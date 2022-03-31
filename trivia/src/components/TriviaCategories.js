import { useEffect, useState, useId } from "react";
import axios from "axios";
import { Category } from "./Category";
import { Question } from "./Question";
import he from "he";
import { QuestionList } from "./QuestionList";

const TriviaCategories = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    axios
      .get("https://opentdb.com/api_category.php")
      .then((response) => setCategories(response.data.trivia_categories));
  }, []);
  console.log(categories);
  return (
    <>
      {selectedCategory ? (
        <div>
          <Category
            key={selectedCategory.id}
            name={selectedCategory.name}
            id={selectedCategory.id}
          />
          <button onClick={() => setSelectedCategory(null)}>
            Back to Category List
          </button>
          <QuestionList id={selectedCategory.id} />
        </div>
      ) : (
        <div>
          {categories.map((category) => (
            <div onClick={() => setSelectedCategory(category)}>
              <Category
                key={category.id}
                name={category.name}
                id={category.id}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};
export { TriviaCategories };

{
  /* <a href={`https://opentdb.com/api_count.php?category=${category.id}`}></a> */
}
