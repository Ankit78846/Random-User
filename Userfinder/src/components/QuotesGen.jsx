import { useEffect, useState } from "react";
import "./quotes.css";

const QuotesGen = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchQuote = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/quotes/random");
      const data = await response.json();
      setQuote(data.quote);
      setAuthor(data.author);
      console.log(data);
    } catch (error) {
      setQuote("Failed to load quote");
      setAuthor("");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);


  return (
    <div className="container">
      <h1>Quotes Generator 💬</h1>

      <div className="card">
        <p className="quote">{loading ? "Loading..." : `"${quote}"`}</p>
        {!loading && <p className="author">— {author}</p>}

        <div className="buttons">
          <button onClick={fetchQuote}>New Quote</button>
        </div>
      </div>
    </div>
  );
};

export default QuotesGen;
