import React, { useEffect, useState } from "react";
import List from "./components/List";
import Search from "./components/Search";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

function App() {
  const [word, setWord] = useState("");
  const [synonyms, setSynonyms] = useState([]);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const fetchData = () => {
    fetch(`https://api.datamuse.com/words?rel_syn=${word}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSynonyms(data);
      });
  };

  const handleFetchSynonyms = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div className="flex flex-col  items-center min-h-screen">
      <Header />
      <Search
        setWord={(e) => setWord(e.target.value)}
        handleFetchSynonyms={handleFetchSynonyms}
        word={word}
      />
      <ul className="grid md:grid-cols-4 sm:grid-cols-2 gap-x-10 gap-y-2">
        {synonyms.map((synonym, index) => (
          <List key={index} item={synonym} />
        ))}
      </ul>
      <Footer />
    </div>
  );
}

export default App;
