import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { TriviaCategories } from "./TriviaCategories";

function App() {
  return (
    <>
      <h1>Trivia Categories:</h1>
      <TriviaCategories />
    </>
  );
}

export default App;
