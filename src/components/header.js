import { categoryMapper } from "../enum";
import "../screen/mainComponent.scss";

const categoryList = ["apple", "tech_crunch", "wall_street", "tesla"];

const HeaderComponent = ({fetchCaetgoryPosts, activeIndex}) => {
  return (
    <header className="topics-wrapper">
      {categoryList.map((item, idx) => {
        const className = activeIndex === idx ? "topic active" : "topic";
        return (
          <span
            className={className}
            key={idx}
            onClick={() => fetchCaetgoryPosts(item, idx)}
          >
            {categoryMapper[item]}
          </span>
        );
      })}
    </header>
  );
};

export default HeaderComponent;
