const Search = (props) => {
  const { handleFetchSynonyms, word, setWord } = props;

  return (
    <header className="search-input">
      <form onSubmit={handleFetchSynonyms} className="form">
        <input
          type="text"
          className="form-input"
          placeholder="type here"
          value={word}
          onChange={setWord}
        />
        <button type="submit" className="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default Search;
