import { getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react"
import { conceptsCol } from "../services/firebase/config";

export const Results = () => {
  const [concepts, setConcepts] = useState([]);

  useEffect(() => {
    (async() => {
        //resive la collection
        const querySnapshot = await getDocs(conceptsCol);
        console.log(querySnapshot.docs);
        //carga los elementos en el array
        setConcepts(querySnapshot.docs);
    })()
  }, [])
    return (
    <div>
        {
            concepts.map((concept, i) => {
                const conceptData = concept.data();
                return (  
                    <div key={i}>
                        <h2>{conceptData["concept_name"]}</h2>
                        <p>{conceptData["concept_def"]}</p>
                    </div>
                )
            })
        }
    </div>

  )
}
