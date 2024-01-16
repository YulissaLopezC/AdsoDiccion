import { getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { conceptsCol } from '../services/firebase/config';

export default function Results() {
  const [concepts, setConcepts] = useState([]);

  useEffect(() => {
    (async () => {
      // Recibe la collection
      const querySnapshot = await getDocs(conceptsCol);
      console.log(querySnapshot.docs);
      // Carga los elementos en el array
      setConcepts(querySnapshot.docs);
    })();
  }, []);
  return (
    <div>
      {
        concepts.map((concept, i) => {
          const conceptData = concept.data();
          return (
            <div key={i}>
              <h2>{conceptData.concept_name}</h2>
              <p>{conceptData.concept_def}</p>
            </div>
          );
        })
      }
    </div>
  );
}
