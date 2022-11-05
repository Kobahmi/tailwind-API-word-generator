import React, { useState } from "react";
import List from "./components/List";
import Search from "./components/Search";

function App() {
  const [word, setWord] = useState("");
  const [synonyms, setSynonyms] = useState([]);

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
    <div className="App">
      <Search
        setWord={(e) => setWord(e.target.value)}
        handleFetchSynonyms={handleFetchSynonyms}
        word={word}
      />
      <ul>
        {synonyms.map((synonym, index) => (
          <List key={index} item={synonym} />
        ))}
      </ul>
    </div>
  );
}

export default App;
