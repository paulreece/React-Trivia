import { useEffect, useState } from "react";
import axios from "axios";

const TriviaCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://opentdb.com/api_category.php")
      .then((response) => setCategories(response.data.trivia_categories));
  }, []);
  console.log(categories);

  return (
    <ul>
      {categories.map((category) => (
        <li key={category.id}>
          <a href={`https://opentdb.com/api_count.php?category=${category.id}`}>
            {category.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export { TriviaCategories };
