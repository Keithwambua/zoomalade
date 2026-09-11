import { useMemo, useState } from "react";
import {
  AudioLines,
  Crown,
  Download,
  Headphones,
  Home,
  Menu,
  Music2,
  Play,
  Search,
  Settings,
  UserRound,
  Video,
} from "lucide-react";

const tracks = [
  {
    title: "Better Days",
    artist: "NF",
    format: "MP3",
    size: "3.4 MB",
    quality: "320kbps",
    duration: "3:42",
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=500&q=85",
  },
  {
    title: "Blinding Lights",
    artist: "The Weeknd",
    format: "MP3",
    size: "4.1 MB",
    quality: "320kbps",
    duration: "4:05",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=500&q=85",
  },
  {
    title: "Good Vibes",
    artist: "Chill Nation",
    format: "MP4",
    size: "12.6 MB",
    quality: "1080p",
    duration: "3:18",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=500&q=85",
  },
  {
    title: "Summer Time",
    artist: "Vibe Tracks",
    format: "MP3",
    size: "2.8 MB",
    quality: "320kbps",
    duration: "2:56",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=85",
  },
  {
    title: "Ocean Eyes",
    artist: "Billie Eilish",
    format: "MP4",
    size: "18.3 MB",
    quality: "1080p",
    duration: "4:20",
    image:
      "https://images.unsplash.com/photo-1507522472026-6a1c4c0b5e4a?auto=format&fit=crop&w=500&q=85",
  },
];
const tabs = [
  { label: "Music (MP3)", icon: Music2 },
  { label: "Video (MP4)", icon: Video },
  { label: "Audio", icon: AudioLines },
];

export default function App() {
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState(0);
  const [playing, setPlaying] = useState(null);
  const [notice, setNotice] = useState("");
  const results = useMemo(
    () =>
      tracks.filter((track) =>
        `${track.title} ${track.artist}`
          .toLowerCase()
          .includes(query.toLowerCase()),
      ),
    [query],
  );
  function notify(message) {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 2600);
  }
  return (
    <div className="app-shell">
      <header className="app-header">
        <div>
          <h1>ZOOMALADE</h1>
          <p>Media Player and Manager</p>
        </div>
        <div className="header-actions">
          <button
            className="premium-button"
            onClick={() => notify("Premium features coming soon.")}
          >
            <span>Premium</span> <Crown />
          </button>
          <button
            className="icon-button"
            aria-label="Settings"
            onClick={() => notify("Settings opened.")}
          >
            <Settings />
          </button>
        </div>
      </header>
      <main>
        <form
          className="search-bar"
          onSubmit={(event) => {
            event.preventDefault();
            notify(
              query ? `Searching for ${query}` : "Try a song, artist, or link.",
            );
          }}
        >
          <Search />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search for a song, video or paste a link..."
            aria-label="Search"
          />
          <button type="submit">Search</button>
        </form>
        <section className="track-list" aria-label="Search results">
          {results.map((track) => {
            const isVideo = track.format === "MP4";
            return (
              <article className="track" key={track.title}>
                <div className="artwork">
                  <img src={track.image} alt="" />
                  <span>{track.duration}</span>
                </div>
                <div className="track-info">
                  <h2>{track.title}</h2>
                  <p>{track.artist}</p>
                  <div className="metadata">
                    {isVideo ? <Video /> : <Music2 />}
                    <span>{track.format}</span>
                    <b>•</b>
                    <span>{track.size}</span>
                    <b>•</b>
                    <span>{track.quality}</span>
                  </div>
                </div>
                <div className="track-actions">
                  <button
                    className="play-button"
                    onClick={() => {
                      setPlaying(playing === track.title ? null : track.title);
                      notify(
                        playing === track.title
                          ? `${track.title} paused`
                          : `Playing ${track.title}`,
                      );
                    }}
                  >
                    <Play fill="currentColor" />{" "}
                    <span>{playing === track.title ? "Pause" : "Play"}</span>
                  </button>
                  <button
                    className="outline-button"
                    onClick={() => notify(`${track.title} video selected.`)}
                  >
                    <Video /> <span>Video</span>
                  </button>
                  <button
                    className="outline-button"
                    onClick={() => notify(`${track.title} audio selected.`)}
                  >
                    <Headphones /> <span>Audio</span>
                  </button>
                </div>
                <button
                  className="more-button"
                  aria-label={`More options for ${track.title}`}
                  onClick={() => notify("More options coming soon.")}
                >
                  <Menu />
                </button>
              </article>
            );
          })}
          {results.length === 0 && (
            <p className="empty-state">No results found. Try another search.</p>
          )}
        </section>
      </main>
      <nav className="bottom-nav" aria-label="Main navigation">
        <button
          className="active"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <Home />
          <span>Home</span>
        </button>
        <button onClick={() => notify("Trending tracks coming soon.")}>
          <AudioLines />
          <span>Trending</span>
        </button>
        <button onClick={() => notify("Your cache will appear here.")}>
          <Download />
          <span>Cache</span>
        </button>
        <button onClick={() => notify("Profile opened.")}>
          <UserRound />
          <span>Profile</span>
        </button>
      </nav>
      {notice && (
        <div className="toast" role="status">
          {notice}
        </div>
      )}
    </div>
  );
}
