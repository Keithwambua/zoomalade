const categories = [
  "All",
  "Lo-fi",
  "Videos",
  "Trending",
  "Licensed from Pixabay",
  "Recently Added",
];
export default function CategoryTabs({ active, onChange }) {
  return (
    <div className="category-tabs" role="tablist" aria-label="Media categories">
      {categories.map((category) => (
        <button
          key={category}
          className={active === category ? "active" : ""}
          onClick={() => onChange(category)}
          role="tab"
          aria-selected={active === category}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
