import React, { useState } from "react";
import "./ym.css"
const YoutubeMediaDownloader = () => {
  const [video, setVideo] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const API_KEY = "ca6c5d1a0amshaae0cacaf2da95cp1ce9f3jsn4a5dd7fe352a";

  const fetchVideo = async () => {
    if (!video) return alert("Enter YouTube URL");

    setLoading(true);

    try {
      const url = `https://youtube-media-downloader.p.rapidapi.com/v2/video/details?videoId=${getVideoId(
        video
      )}&urlAccess=normal&videos=auto&audios=auto`;

      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key": API_KEY,
          "x-rapidapi-host": "youtube-media-downloader.p.rapidapi.com",
        },
      };

      const response = await fetch(url, options);
      const data = await response.json(); // parse JSON
      setResult(data); // store in state
      console.log(data); // still useful for debugging
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = (url) => {
    window.open(url, "_blank");
  };

  // Helper to extract video ID from YouTube URL
  const getVideoId = (url) => {
    const match = url.match(/[?&]v=([^&]+)/);
    return match ? match[1] : url;
  };

  return (
    <div className="yd-container">
  <h1 className="yd-title">YouTube Media Downloader</h1>

  <div className="yd-input-group">
    <input
      type="text"
      placeholder="Enter YouTube URL"
      value={video}
      onChange={(e) => setVideo(e.target.value)}
      className="yd-input"
    />
    <button onClick={fetchVideo} disabled={loading} className="yd-btn">
      {loading ? "Fetching..." : "Fetch"}
    </button>
  </div>

  {result && (
    <div className="yd-result">
      <h2>{result.title}</h2>

      <img
        src={result.thumbnails[0]?.url}
        alt={result.title}
        className="yd-thumb"
      />

      <p className="yd-desc">{result.description}</p>

      <h3>Download Links</h3>

      <div className="yd-links">
        {result.videos?.items?.map((item, index) => (
          <button
            key={index}
            className="yd-download-btn"
            onClick={() => handleDownload(item.url)}
          >
            {item.quality} • {item.sizeText}
          </button>
        ))}
      </div>
    </div>
  )}
</div>
  )
};

export default YoutubeMediaDownloader;
