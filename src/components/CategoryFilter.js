import React from "react";

function CategoryFilter({ categories, onSelectCategory, selectedCategory }) {
  return (
    <div className="categories">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={selectedCategory === category ? "selected" : ""}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;