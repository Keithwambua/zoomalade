import MediaCard from "./MediaCard";
export default function MediaGrid({ items, onPlay, onDownload }) {
  if (!items.length)
    return (
      <div className="empty-state">
        <span>⌁</span>
        <h3>No results found</h3>
        <p>Try another title, creator, or category.</p>
      </div>
    );
  return (
    <div className="media-grid">
      {items.map((item) => (
        <MediaCard
          key={item.id}
          item={item}
          onPlay={onPlay}
          onDownload={onDownload}
        />
      ))}
    </div>
  );
}
