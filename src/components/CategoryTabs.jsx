const categories = [
  "All",
  "Music",
  "Videos",
  "Trending",
  "Free Songs from Pixabay",
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
