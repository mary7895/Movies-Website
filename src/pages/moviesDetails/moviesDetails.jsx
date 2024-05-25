import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./moviesDetails.css"; 
import axiosInstance from "../../axiosConfig/instance";

const MoviesDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

// console.log(params);
  useEffect(() => {
    axiosInstance
      .get(`/${params.id}`, {
        params: {
          page: currentPage,
        },
      })
      .then((response) => {
        setProduct(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); //params.currentPage

  function goBack() {
    window.history.back();
  }
  return (
   
    <div className="card-details">
      <img
        className="card-image"
        src={`https://image.tmdb.org/t/p/w500/${product.poster_path}`}
        alt={product.title}
      />
      <div className="card-content">
        <h2 className="card-title-details text-primary">{product.title}</h2>
        <p className="card-description">{product.overview}</p>
        <p>
          <strong>Release Date:</strong> {product.release_date}
        </p>
        <p>
          <strong>Popularity:</strong> {product.popularity}
        </p>
        <p>
          <strong>Vote Average:</strong> {product.vote_average}
        </p>
        {/* Add more details as needed */}
        <button
          onClick={() => {
            goBack();
          }}
          className="btn btn-primary w-25"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default MoviesDetails;
