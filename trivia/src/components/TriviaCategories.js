import { useEffect, useState, useId } from "react";
import axios from "axios";
import { Category } from "./Category";
import { QuestionList } from "./QuestionList";

const TriviaCategories = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const divTriviaId = useId();
  const buttonId = useId();

  useEffect(() => {
    axios
      .get("https://opentdb.com/api_category.php")
      .then((response) => setCategories(response.data.trivia_categories));
  }, []);
  console.log(categories);
  return (
    <>
      {selectedCategory ? (
        <div key={divTriviaId}>
          <Category
            key={selectedCategory.id}
            name={selectedCategory.name}
            id={selectedCategory.id}
          />
          <button key={buttonId} onClick={() => setSelectedCategory(null)}>
            Back to Category List
          </button>
          <QuestionList id={selectedCategory.id} />
        </div>
      ) : (
        <div>
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => setSelectedCategory(category)}
            >
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
