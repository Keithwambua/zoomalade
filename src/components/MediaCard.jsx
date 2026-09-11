import { Download, Headphones, Play, Video } from "lucide-react";
import Button from "./Button";
export default function MediaCard({ item, onPlay, onDownload }) {
  return (
    <article className="media-card">
      <div className="thumbnail-wrap">
        <img src={item.thumbnail} alt="" />
        <span className="type-badge">{item.type}</span>
        <button
          className="play-overlay"
          onClick={() => onPlay(item)}
          aria-label={`Play ${item.title}`}
        >
          <Play fill="currentColor" size={18} />
        </button>
        <span className="duration">{item.duration}</span>
      </div>
      <div className="card-body">
        <div>
          <h3>{item.title}</h3>
          <p>{item.creator}</p>
        </div>
        <span className="views">{item.views} views</span>
      </div>
      <div className="card-actions">
        <Button variant="primary" onClick={() => onPlay(item)}>
          <Play size={14} fill="currentColor" /> Play
        </Button>
        <Button variant="ghost">
          <Headphones size={14} /> Audio
        </Button>
        <Button variant="ghost">
          <Video size={14} /> Video
        </Button>
        <Button
          variant="icon"
          onClick={onDownload}
          aria-label={`Download ${item.title}`}
        >
          <Download size={16} />
        </Button>
      </div>
    </article>
  );
}
