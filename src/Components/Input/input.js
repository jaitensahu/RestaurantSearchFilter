import "./input.css";
const Input = (props) => {
  function searchBarInput(e) {
    props.getSearchInput(e.target.value);
  }
  function ratingInput(e) {
    props.getRatingInput(e.target.value);
  }

  return (
    <div className="inputContainer">
      <input
        type="text"
        placeholder="Search Restaurants"
        onChange={searchBarInput}
      />
      <div>
        <label htmlFor="rating">Minimun Rating:</label>
        <input type="number" placeholder="Rating" onChange={ratingInput} />
      </div>
    </div>
  );
};
export default Input;
