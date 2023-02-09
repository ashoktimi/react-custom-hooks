import { useState, useEffect } from "react";
import axios from "axios";

function useAxios(  keyInLS, baseUrl  ) {
  const [responses, setResponses] = useLocalStorage(keyInLS);
  const addResponseData = async (formatter = data => data, restOfUrl = "") => {
    console.log(restOfUrl)
   
    const response = await axios.get(`${baseUrl}${restOfUrl}`);
    setResponses(data => [...data, formatter(response.data)]);
  };

  const clearResponses = () => setResponses([]);

  return [responses, addResponseData, clearResponses];
}

function useLocalStorage(key, initialValue = []) {
  if (localStorage.getItem(key)) {
    initialValue = JSON.parse(localStorage.getItem(key));
  }
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);
  return [value, setValue];

}

export { useAxios, useLocalStorage };


// Another Example

// import axios from 'axios';
// import { useState, useEffect } from 'react';

// const useAxios = (url) => {
//   const [cards, setCards] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     setLoading(true);
//     axios.get(url)
//       .then(response => {
//         setCards(response.data);
//         setLoading(false);
//       })
//       .catch(error => {
//         setError(error);
//         setLoading(false);
//       });
//   }, [url]);

//   return [cards, loading, error];
// };

// export default useAxios;


