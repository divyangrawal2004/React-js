import { useEffect, useState } from "react";
import "./youTube.css";

function App() {
  const [cnt, setCnt] = useState([]);
  const [searchTerm, setSearchTerm] = useState();
  const Youtube = (query) => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&key=AIzaSyC5VSLgcHWBof_ay_bxov8c3WtrA-nTarU`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCnt(data.items);
      });
  };

  useEffect(() => {
    Youtube(searchTerm);
  }, [searchTerm]);

  return (
    <>
      <h1>Youtube Api</h1>

      <input
        type="text"
        placeholder="Search YouTube..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={() => Youtube(searchTerm)}>Search</button>

      {cnt.map((val, index) => {
        return (
          <div key={index}>
            <h3>{val.snippet.title}</h3>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${val.id.videoId}`}
              title={val.snippet.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        );
      })}
    </>
  );
}

export default App;
