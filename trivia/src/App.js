import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { TriviaCategories } from "./components/TriviaCategories";
import { Counter } from "./components/Counter";
import { Counter_Reducer } from "./components/CountReducer";
import { Question } from "./components/Question";

function App() {
  return (
    <>
      <h1>Trivia Categories:</h1>
      <TriviaCategories />
    </>
  );
}

export default App;
