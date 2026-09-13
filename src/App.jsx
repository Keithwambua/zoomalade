import { useState, useEffect } from "react";

function App() {
  const [mediaItems, setMediaItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/media")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setMediaItems(data.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error connecting to backend:", err);
        setLoading(false);
      });
  }, []);

  const filteredItems = mediaItems.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="p-6 bg-slate-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Zoomalade Media Hub</h1>
      <input
        type="text"
        placeholder="Search media by title or category..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-3 mb-6 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-400"
      />
      {loading ? (
        <p className="text-gray-400">Loading live data...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="p-4 bg-slate-800 rounded-lg border border-slate-700"
            >
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <span className="text-sm text-cyan-400 uppercase tracking-wide">
                {item.category}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
