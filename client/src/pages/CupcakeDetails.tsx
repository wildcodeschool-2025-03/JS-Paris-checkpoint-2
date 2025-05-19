import { useEffect, useState } from "react";
import { useParams } from "react-router";


function CupcakeDetails() {

    const { id } = useParams();
    const [cupCake, setCupCake] = useState();

    useEffect(() => {
        async function getCupCake() {
            const response = await fetch(`http://localhost:3310/api/cupcakes/${id}`);
            const data = await response.json();
            setCupCake(data)
        }

        getCupCake();
    }, [id])

    return (
        cupCake && (
            <main>
                <h1>{cupCake.name}</h1>
                <h2>{cupCake.accessory}</h2>
                <div>{cupCake.color1}</div>
                <div>{cupCake.color2}</div>
                <div>{cupCake.color3}</div>
            </main>
        )
    )
}

export default CupcakeDetails