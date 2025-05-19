import { useEffect, useState } from "react";
import Cupcake from "../components/Cupcake";

type Accessory = { id: number; name: string; slug: string };
type CupcakeType = {
  id: number;
  name: string;
  accessory_id: string;
  accessory: string;
  color1: string;
  color2: string;
  color3: string;
};

function CupcakeList() {
  const [cupcakes, setCupcakes] = useState<CupcakeType[]>([]);
  const [accessories, setAccessories] = useState<Accessory[]>([]);
  const [selectedAccessoryId, setSelectedAccessoryId] = useState("");

  useEffect(() => {
    fetch("http://localhost:3310/api/cupcakes")
      .then((response) => response.json())
      .then((data) => setCupcakes(data));
  }, []);

  // Récupère les accessoires
  useEffect(() => {
    fetch("http://localhost:3310/api/accessories")
      .then((response) => response.json())
      .then((data) => setAccessories(data));
  }, []);

  const filteredCupcakes = selectedAccessoryId
    ? cupcakes.filter((cupcake) => cupcake.accessory_id === selectedAccessoryId)
    : cupcakes;

  return (
    <>
      <h1>My cupcakes</h1>

      <form className="center">
        <label htmlFor="cupcake-select">
          Filter by accessory:{" "}
          <select
            id="cupcake-select"
            value={selectedAccessoryId}
            onChange={(e) => setSelectedAccessoryId(e.target.value)}
          >
            <option value="">---</option>
            {accessories.map((accessory) => (
              <option key={accessory.id} value={accessory.id.toString()}>
                {accessory.name}
              </option>
            ))}
          </select>
        </label>
      </form>

      <ul className="cupcake-list" id="cupcake-list">
        {filteredCupcakes.map((cupcake) => (
          <li className="cupcake-item" key={cupcake.id}>
            <Cupcake data={cupcake} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default CupcakeList;
