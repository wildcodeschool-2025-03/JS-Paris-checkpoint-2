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

  const [BoiteCupcake, setBoiteCupcake] = useState([])
  const [CupcakeAccess, setCupcakeAccess] = useState([])
  const [accessoriesFiltered, setAccessoriesFiltered] = useState("")



  useEffect(() => {
    fetch("http://localhost:3310/api/cupcakes")
      .then((response) => response.json())
      .then((cupcakeApi) => {
        // console.log(cupcakeApi);

        setBoiteCupcake(cupcakeApi)
      })
  }, []);


  // Step 3: get all accessories


  useEffect(() => {
    fetch("http://localhost:3310/api/accessories")
      .then((response) => response.json())
      .then((cupcakeApiAccessories) => {
        // console.info(cupcakeApiAccessories);

        setCupcakeAccess(cupcakeApiAccessories)
      })
  }, []);

  // Step 5: create filter state

  const updateAccessoryChange = (event) => {
    setAccessoriesFiltered(event.target.value);
  }

  const pourFiltrerLesCupcakes = BoiteCupcake.filter((cupcake) => {
    if (accessoriesFiltered === "") {
      return true;
    }
    return cupcake.accessory_id === accessoriesFiltered
  })



  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}

          Filter by{" "}
          {/* Step 4: add an option for each accessory */}

          <select
            onChange={updateAccessoryChange}
            id="cupcake-select">
            {CupcakeAccess.map((accessory) => (

              <option key={accessory.id} value={accessory.id}>{accessory.name}</option>
            ))}

          </select>


        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">

        {pourFiltrerLesCupcakes.map((cupcake) => (
          < Cupcake key={cupcake.id} data={cupcake} />
        ))}

        <li className="cupcake-item">
          <Cupcake data={sampleCupcakes[0]} />
        </li>
        {/* end of block */}
      </ul>
    </>
  );
}

export default CupcakeList;
