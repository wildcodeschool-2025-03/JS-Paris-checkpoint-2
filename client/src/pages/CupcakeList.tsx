type CupcakeType = {
  id: number;
  accessory_id: string;
  accessory: string;
  color1: string;
  color2: string;
  color3: string;
  name: string;
};

type AccessoryArray = { id: number; name: string; slug: string }[];

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cupcake from "../components/Cupcake";

/* you can use sampleCupcakes if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */

function CupcakeList() {
  const [CupCakes, setCupCakes] = useState<CupcakeType[]>([]);

  // Step 1: get all cupcakes
  useEffect(() => {
    async function getCupCakes() {
      fetch("http://localhost:3310/api/cupcakes")
        .then((response) => response.json())
        .then((data) => setCupCakes(data));
    }

    getCupCakes();
  }, []);

  // Step 3: get all accessories

  const [accessories, setAccessories] = useState<AccessoryArray>([]);

  useEffect(() => {
    async function getAccessories() {
      fetch("http://localhost:3310/api/accessories")
        .then((response) => response.json())
        .then((dataAccessories) => setAccessories(dataAccessories));
    }

    getAccessories();
  }, []);

  // Step 5: create filter state

  const [filter, setFilter] = useState("");

  const cupCakesFiltered = CupCakes.filter((cupcake) => {
    if (filter === "") return true; // aucun filtre sélectionné : on montre tout

    return cupcake.accessory === filter;
  });

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            id="cupcake-select"
          >
            {accessories.map((accessory) => (
              <option key={accessory.id} value={accessory.slug}>
                {accessory.name}
              </option>
            ))}
          </select>
        </label>
      </form>

      <ul className="cupcake-list" id="cupcake-list">
        {cupCakesFiltered.map((cupcake) => (
          <li className="cupcake-item" key={cupcake.id}>
            <Link to={`/cupcakedetail/${cupcake.id}`}>
              <Cupcake data={cupcake} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CupcakeList;
