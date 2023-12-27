import "./Cards.css";

const Card = (props) => {
  let arrList = [];
  for (let i = 0; i < props.rating; i++) {
    arrList.push(<i key={i+"2a"} className="fa-solid fa-star"></i>);
  }
  return (
    <div className="cardContainer">
      <div className="restroName">
        <span>{props.name}</span>
        <div className="ratingsStar">
          {arrList}
      
        </div>
      </div>
      <div className="addrress">
        <p>
          <i className="fa-solid fa-location-dot"></i>
          {props.address}, {props["address line 2"]}
        </p>
      </div>
      <p>
        {props.outcode} {props.postcode}
      </p>

      <div className="bottomPart">
        <p>
          <i className="fa-solid fa-utensils"></i> {props.type_of_food}
        </p>
        <a href={props.URL}>Visit Menu</a>
      </div>
    </div>
  );
};

export default Card;
