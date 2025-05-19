import { useEffect, useState } from "react";
import Cupcake from "../components/Cupcake";
import { Link } from "react-router-dom";


/* ************************************************************************* */
const sampleCupcakes: CupcakeArray = [
  {
    id: 10,
    accessory_id: "4",
    accessory: "wcs",
    color1: "blue",
    color2: "white",
    color3: "red",
    name: "France",
  },
  {
    id: 11,
    accessory_id: "4",
    accessory: "wcs",
    color1: "yellow",
    color2: "red",
    color3: "black",
    name: "Germany",
  },
  {
    id: 27,
    accessory_id: "5",
    accessory: "christmas-candy",
    color1: "yellow",
    color2: "blue",
    color3: "blue",
    name: "Sweden",
  },
];

/* you can use sampleCupcakes if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */



function CupcakeList() {

  const [CupCakes, setCupCakes] = useState([]);

  // Step 1: get all cupcakes
  useEffect(() => {
    async function getCupCakes() {

      fetch("http://localhost:3310/api/cupcakes")
        .then((response) => response.json())
        .then((data) => setCupCakes(data))
    }

    getCupCakes();
  }, [])

  // Step 3: get all accessories

  const [accessories, setAccessories] = useState([]);

  useEffect(() => {
    async function getAccessories() {

      fetch("http://localhost:3310/api/accessories")
        .then((response) => response.json())
        .then((dataAccessories) => setAccessories(dataAccessories))
    }

    getAccessories();
  }, [])

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

          <select value={filter} onChange={(e) => setFilter(e.target.value)} id="cupcake-select">

            {accessories.map((accessory) => (

              <option key={accessory.id} value={accessory.slug}>{accessory.name}</option>

            ))
            }
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
