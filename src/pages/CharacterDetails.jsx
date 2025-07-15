import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function CharacterDetails() {
  const { id } = useParams();
  const BASE_URL = "https://ih-crud-api.herokuapp.com";

  const [character, setCharacter] = useState({}); // info from api
  const [isLoading, setIsLoading] = useState(true);

  // /characters/:id
  useEffect(() => {
    axios
      .get(BASE_URL + "/characters/" + id)
      .then((response) => {
        setCharacter(response.data);
      })
      .catch((error) => {
        console.log("ERROR: ", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <div className="box">
        <h2>{character.name}</h2>
        <p>Occupation: {character.occupation}</p>
        <p>Weapon: {character.weapon}</p>
        <p>Debt: {character.debt ? "Yes" : "No"}</p>
      </div>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </>
  );
}

export default CharacterDetails;
