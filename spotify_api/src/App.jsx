import { useEffect, useState } from "react";
import "./Sportify.css";

const App = () => {                                        // Ye hamara main React functional component hai jismein pura app bana hai.
  const [accessToken, setAccessToken] = useState("");    // Spotify API ka access token store karta hai.
  const [tracks, setTracks] = useState([]);               // Search kiye gaye songs (track list) store karta hai [array] ke under .
  const [currentSong, setCurrentSong] = useState(null);      // Abhi jo song chal raha hai usko store karega  null likhne ka reason h ki abhi koi song chalu nhi h iski jagah undefine bhi kr skte h
  const [searchQuery, setSearchQuery] = useState("");       // User jo search karega uska text store karega.

  const fetchToken = () => {                                  //Ye function Spotify API se token fetch karta hai.
    const clientId = "dc75e4e3214745a296b0650b31296264";        //id or secret ye  credentials hote h api access ke lia
    const clientSecret = "355c8464bb6d4e68aa60e6d57465048b";

    fetch("https://accounts.spotify.com/api/token", {
      method: "POST",                                       // token lene ke lia post request bhej rha h
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",  //Header mein content type form-urlencoded hai.
      },
      body: new URLSearchParams({                            //Body mein required data bhej rahe hain. Spotify ko batana padta hai kis type ka token chahiye.
        grant_type: "client_credentials",                  
        client_id: clientId,
        client_secret: clientSecret,
      }),
    })
      .then((res) => res.json())                     //Res JSON mein convert kr rha h
      .then((data) => {                              // convert hua data data mein store hua h
        setAccessToken(data.access_token);           //token ko accessToken state mein store kar rahe hain.
      });
  };

  // Track fetch with .then()
  const fetchTracks = () => {                                            // seacrh pr click krne pr ye function call hoga
    if (!accessToken || !searchQuery) return;                            //Agar accesstoken ya searchquery nahi mile, to kuch bhi na karo.

    const url = `https://api.spotify.com/v1/search?q=${searchQuery}&type=track`;  // q mtlb query type track ka mtln only song cahia

    fetch(url, {
      method: "GET",                                      // ye pura  Spotify se data lene ke liye GET request bhej rahe hain with token.
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTracks(data.tracks.items);                                       // settracks ke under song list ke sath update krega
        setSearchQuery("");                                                 // search krne ke bad input box  clear null ho jaeygi
      });
  };

  useEffect(() => {
    fetchToken();                                            // fetchtoken ko call krvane ke lia useeffect mai isko call krvaya h
  }, []);

  return (
    <>
      <h1 align="center">Spotify API Access</h1>
    
      <div className="search-container">
        <input type="text" placeholder="Enter singer name..."  value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />   
        {/* Agar value hata dega to vo ban jayega uncontrolled component.    jisko control browser krta h react nhi  or setsearch React ke searchQuery state mein store ho jata hai.*/}
        <button className="btn btn-primary" onClick={fetchTracks}>  Search  </button>
      </div>
    
      <div className="container">
        <div className="row">
          {tracks.map((track) => (
            <div className="col-md-4 mb-4" key={track.id}> 
              <div className="card" style={{ width: "22rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Song: {track.name}</h5>      {/* tract mai se name fetch karega  */}
                  <p className="card-text">Artist: {track.artists[0].name}</p>   {/* tract mai se artists name fetch karega  */}

                  <iframe src={`https://open.spotify.com/embed/track/${track.id}`}  width="300" height="80" frameBorder="0" allow="encrypted-media" ></iframe>
                                {/* hr ek song ki ek unique id hoti h uske lia track id allow se inbiled song run ki permission deta h */}
                  {track.preview_url ? (
                    // Check karta hai: kya track.preview_url exist karta hai to  buton dikhao nhi to message
                    <button
                      className="btn btn-success"
                      onClick={() => setCurrentSong(track.preview_url)}>  Play Song  </button>   /* setCurrentSong call hoga os song start krega */
                  ) : (
                    <p>No preview available</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Agar currentSong mein koi value hai tabhi ye neeche ka HTML render hoga.  Agar currentSong = null hoga, to ye block dikhai hi nahi dega. */}
        {currentSong && (
          <div className="player">
            <audio controls autoPlay>    {/* control se volums & play & pause ye sb control hoga  or play pr click krne pr autoplay hoga */}
              <source src={currentSong} type="audio/mpeg" />   {/* src mai : jo preview URL state mein store hai, usi ko play karo  ans mpeg mtlb mp3 format mai song h */}
              Your browser does not support the audio element.  {/* agr purane browser mai audio nhi h to ye message aayega */}
            </audio> 
          </div>
        )}
      </div>
    </>
  );
};

export default App;