import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CharacterDetails from "./pages/CharacterDetails";

function App() {
  return (
    <>
      <h1>React characters app</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/characters/:id" element={<CharacterDetails />} />
      </Routes>
    </>
  );
}

export default App;
