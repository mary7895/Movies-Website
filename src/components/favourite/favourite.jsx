import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { removFav } from "../../store/slice/favMovies";

export default function Favourites() {
  const favMovies = useSelector((state) => state.favMovies.fav);
  const dispatch = useDispatch();

  const handleRemoveFromFavorites = (movie) => {
    dispatch(removFav(movie));
  };

  // Function to truncate text and add "..." if it exceeds the specified length
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  return (
    <Container>
      <h1 className="text-center mt-5 mb-4">Your Favorite Movies</h1>
      <Row>
        {favMovies.map((movie) => (
          <Col key={movie.id} xs={12} sm={6} md={4} lg={3}>
            <Card className="mb-3 h-100">
              <Link to={`/moviesDetails/${movie.id}`}>
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
              </Link>
              <Card.Body className="d-flex flex-column">
                <Link
                  to={`/moviesDetails/${movie.id}`}
                  className="text-decoration-none"
                >
                  <Card.Title>{movie.original_title}</Card.Title>
                </Link>
                <Card.Text className="text-muted mb-auto">
                  {truncateText(movie.overview, 100)}
                </Card.Text>
                <button
                  className="btn"
                  onClick={() => handleRemoveFromFavorites(movie)}
                >
                  <FontAwesomeIcon icon={faHeart} color="red" />
                </button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
