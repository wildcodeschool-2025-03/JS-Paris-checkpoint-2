import { useEffect, useState } from "react";
import Cupcake from "../components/Cupcake";

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
  // Step 1: get all cupcakes
  const [, setCupCakes] = useState([]);
  useEffect(() => {
    async function getCupCakes() {
      fetch("http://localhost:3310/api/cupcakes")
        .then((response) => response.json())
        .then((data) => setCupCakes(data));
    }

    getCupCakes();
  }, []);
  // Step 3: get all accessories
  const [, setAllAccessories] = useState([]);
  useEffect(() => {
    async function getAllAccessories() {
      fetch(" http://localhost:3310/api/accessories")
        .then((response) => response.json())
        .then((data) => setAllAccessories(data));
    }

    getAllAccessories();
  }, []);

  // Step 5: create filter state


  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select id="cupcake-select">
            {" "}
            onChange=()
            <option value="">---</option>
            {/* Step 4: add an option for each accessory */}
            accessories.map((accessory) )
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}
        {/* Step 5: filter cupcakes before repeating */}
        <li className="cupcake-item">
          <Cupcake data={sampleCupcakes[0]} />
        </li>
        {/* end of block */}
      </ul>
    </>
  );
}

export default CupcakeList;
