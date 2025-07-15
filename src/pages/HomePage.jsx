import axios from "axios";
import { useEffect, useState } from "react";

const BASE_URL = "https://ih-crud-api.herokuapp.com";

function HomePage() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(BASE_URL + "/characters")
      .then((response) => {
        setCharacters(response.data);
      })
      .catch((error) => {
        console.log("ERROR on GET: ", error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h2>Number of characters: {characters.length}</h2>
      {characters.map((character, i) => {
        return (
          <div key={i} className="box">
            <p>Name: {character.name}</p>
            <p>Occupation: {character.occupation}</p>
            <p>Weapon: {character.weapon}</p>
          </div>
        );
      })}

      {/* {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <h1>Number of characters: {characters.length}</h1>
      )} */}
    </div>
  );
}

export default HomePage;
