const Search = (props) => {
  const { handleFetchSynonyms, word, setWord } = props;

  return (
    <header className="search">
      <form
        data-aos="fade-up"
        onSubmit={handleFetchSynonyms}
        className="flex flex-col items-center md:flex-row gap-2 py-4"
      >
        <input
          type="text"
          className="p-2 border-2 border-grey-500 rounded-md"
          placeholder="type here"
          value={word}
          onChange={setWord}
        />
        <button
          type="submit"
          className="p-2 bg-blue-300 rounded-md hover:bg-blue-400 ease-in-out duration-200 w-fit"
        >
          Search
        </button>
      </form>
    </header>
  );
};

export default Search;
