import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import "./card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function MyCard(props) {
  const handleFavoriteClick = () => {
    props.onToggleFav(props.product); // Pass the movie object as an argument
  };

  return (
    <div>
      <Card style={{ width: "18rem", margin: "20px" }}>
        <Card.Body>
          <div className="card-image-czzontainer">
            <Card.Img
              variant="top"
              src={props.imgUrl}
              className="card-imagee"
            />
          </div>
          <Card.Title>
            <Link to={`/moviesDetails/${props.productId}`}>
              {props.CardTitle}
            </Link>
          </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <div>
            <FontAwesomeIcon
              icon={faHeart}
              color={props.isFav ? "red" : "black"}
              onClick={handleFavoriteClick}
            />
          </div>
      
        </Card.Body>
      </Card>
    </div>
  );
}

export default MyCard;
