const List = ({ item: { word } }) => {
  return (
    <li data-aos="fade-zoom-in " className="text-lg">
      <p>{word}</p>
    </li>
  );
};

export default List;
