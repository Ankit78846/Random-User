
import React, { useState } from "react";

const YMDownloader = () => {
  const [video, setVideo] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const API_KEY = "ca6c5d1a0amshaae0cacaf2da95cp1ce9f3jsn4a5dd7fe352a";

  const fetchVideo = async () => {
    if (!video) return alert("Enter YouTube URL");
    setLoading(true);

    try {
     const url = `https://cloud-api-hub-youtube-downloader.p.rapidapi.com/download?id=${videoId}SAmeMF1b_jU&filter=audioandvideo&quality=lowest`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': API_KEY,
		'x-rapidapi-host': 'cloud-api-hub-youtube-downloader.p.rapidapi.com'
	}
};
      const response = await fetch(url, options);
      const data = await response.json();
      setResult(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

const handleDownload = (url) => {
    window.open(url, "_blank");
  };


  const videoId = (url) => {
    const match = url.match(/[?&]v=([^&]+)/);
    return match ? match[1] : url;
  };
  return (
    <div className="container">
      <h1 className="title">YouTube Media Downloader</h1>

      <div className="input">
        <input
          type="text"
          placeholder="Enter YouTube URL"
          value={video}
          onChange={(e) => setVideo(e.target.value)}
          className="inputyd"
        />
        <button onClick={fetchVideo} disabled={loading} className="btnyd">
          {loading ? "Fetching..." : "Fetch"}
        </button>
      </div>

      {result && (
        <div className="result">
          <h2>{result.title}</h2>

          <img
            src={result.thumbnails[0]?.url}
            alt={result.title}
            className="thumb"
          />

          <p className="desc">{result.description}</p>

          <h3>Download Links</h3>

          <div className="links">
            {result.videos?.items?.map((item, index) => (
              <button
                key={index}
                className="download-btn"
                onClick={() => handleDownload(item.url)}
              >
                {item.quality} • {item.sizeText}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default YMDownloader;
