import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cupcake from "../components/Cupcake";

function CupcakeDetails() {
  const { id } = useParams();
  const [cupcake, setCupcake] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3310/api/cupcakes/${id}`)
      .then((response) => response.json())
      .then((data) => setCupcake(data));
  }, [id]);

  return (
    <>
      <Cupcake data={cupcake} />
    </>
  );
}

export default CupcakeDetails;
