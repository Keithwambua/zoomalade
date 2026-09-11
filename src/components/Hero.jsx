import { Search, Sparkles } from "lucide-react";
import Button from "./Button";

export default function Hero({ query, onQueryChange, onSearch }) {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <div className="eyebrow">
          <Sparkles size={15} /> YOUR MEDIA, YOUR WAY
        </div>
        <h1>
          Everything you want to <em>watch.</em>
          <br />
          Listen. Discover.
        </h1>
        <p>
          Search, preview and access your favorite media from one beautifully
          simple platform.
        </p>
        <form
          className="search-bar"
          onSubmit={(event) => {
            event.preventDefault();
            onSearch();
          }}
        >
          <Search size={21} />
          <input
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Search for videos, music or creators..."
            aria-label="Search media"
          />
          <Button type="submit">Search</Button>
        </form>
        <div className="trust-row">
          <span>Fast</span>
          <i /> <span>Simple</span>
          <i /> <span>Powerful</span>
        </div>
      </div>
      <div className="hero-art" aria-hidden="true">
        <div className="art-glow" />
        <div className="art-ring ring-a" />
        <div className="art-ring ring-b" />
        <div className="art-center">
          <span>▶</span>
        </div>
        <div className="art-chip chip-one">MP4</div>
        <div className="art-chip chip-two">MP3</div>
        <div className="art-chip chip-three">HD</div>
      </div>
    </section>
  );
}
