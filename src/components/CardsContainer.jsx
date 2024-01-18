import { getDocs } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { conceptsCol } from '../services/firebase/config';
import Card from './Card';

export default function CardsContainer() {
  const [concepts, setConcept] = useState([]);

  useEffect(() => {
    (async () => {
      const querySnapshot = await getDocs(conceptsCol);
      setConcept(querySnapshot.docs);
    })();
  }, []);

  return (

    <>
      {
        concepts.map((concept) => {
          console.log(concept)
          const data = concept.data();
          return (
            <Card concept={data.concept_name} definition={data.concept_def} />
          );
        })
      }
    </>
  );
}
