import React, { useEffect, useState } from "react";
import MyCard from "../../components/card/card";
import "bootstrap/dist/css/bootstrap.min.css";
import axiosInstance from "../../axiosConfig/instance";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removFav } from "../../store/slice/favMovies";
import "./movies.css";

const Movies = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [inputName, setInputName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const favMovies = useSelector((state) => state.favMovies.fav);
  const dispatch = useDispatch();

  useEffect(() => {
    if (inputName.trim() === "") {
      loadAllMovies();
    } else {
      searchMovies();
    }
  }, [currentPage, inputName]);

  const loadAllMovies = () => {
    setLoading(true);
    axiosInstance
      .get("/popular", {
        params: {
          page: currentPage,
        },
      })
      .then((response) => {
        setProducts(response.data.results);
        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setError("Failed to fetch popular movies.");
      });
  };

  const searchMovies = () => {
    if (inputName.trim() !== "") {
      setLoading(true);
      axiosInstance
        .get(
          "https://api.themoviedb.org/3/search/movie?api_key=7a1c19ea3c361a4d3cc53eb70ef8298c",
          {
            params: {
              query: inputName,
              page: currentPage,
            },
          }
        )
        .then((response) => {
          setProducts(response.data.results);
          setLoading(false);
          setError(null);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
          setError("Failed to search movies.");
        });
    } else {
      loadAllMovies();
    }
  };

  const handleNextPage = () => {
    setCurrentPage((page) => page + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((page) => page - 1);
    }
  };

  const handleInputChange = (event) => {
    setInputName(event.target.value);
  };

  let isFav = (movie) => favMovies.some((fav) => fav.id === movie.id);

  const handlToggleFavMovie = (movie) => {
    if (isFav(movie)) {
      dispatch(removFav(movie));
    } else dispatch(addFav(movie));
  };

  return (
    <div className="container">
      <h1 className="text-center mt-5 mb-4">Discover Movies</h1>

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by name"
          value={inputName}
          onChange={handleInputChange}
        />
        <div className="input-group-append">
          <button
            className="btn btn-primary"
            type="button"
            onClick={searchMovies}
          >
            Search
          </button>
        </div>
      </div>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-danger">{error}</p>}

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((product) => (
          <div key={product.id} className="col">
            <MyCard
              imgUrl={`https://image.tmdb.org/t/p/w500${product.poster_path}`}
              CardTitle={product.original_title}
              productId={product.id}
              isFav={isFav(product)}
              onToggleFav={handlToggleFavMovie}
              product={product}
            />
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-center mt-4">
        <button
          className="btn btn-primary me-2"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button className="btn btn-primary" onClick={handleNextPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Movies;

///there is another way from interaction component (if we do not handle the search result from backend)
// import React, { useEffect, useState } from "react";
// import MyCard from "../../components/card/card";
// import "bootstrap/dist/css/bootstrap.min.css";
// import axiosInstance from "../../axiosConfig/instance";
// import { useDispatch, useSelector } from "react-redux";
// import { addFav, removFav } from "../../store/slice/favMovies";
// import SearchResult from "./../../components/searchResult/searchResult";

// const Movies = () => {
//   const [products, setProducts] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [inputName, setInputName] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const favMovies = useSelector((state) => state.favMovies.fav);
//   const dispatch = useDispatch();
//   const [filteredArr, setFilteredArr] = useState(products);

//   useEffect(() => {
//     loadAllMovies();
//   }, [currentPage, inputName]);

//   const loadAllMovies = () => {
//     setLoading(true);
//     axiosInstance
//       .get("/popular", {
//         params: {
//           page: currentPage,
//         },
//       })
//       .then((response) => {
//         setProducts(response.data.results);
//         setFilteredArr(response.data.results);
//         setLoading(false);
//         setError(null);
//       })
//       .catch((error) => {
//         console.log(error);
//         setLoading(false);
//         setError("Failed to fetch popular movies.");
//       });
//   };

//   const isFav = (movie) => favMovies.some((fav) => fav.id === movie.id);

//   const handlToggleFavMovie = (movie) => {
//     if (isFav(movie)) {
//       dispatch(removFav(movie));
//     } else {
//       dispatch(addFav(movie));
//     }
//   };

//   const handleSearch = (data) => {
//     const searchResults = products.filter((movie) =>
//       movie.original_title.toLowerCase().includes(data.name.toLowerCase())
//     );
//     setFilteredArr(searchResults);
//   };

//   const goToNextPage = () => {
//     setCurrentPage(currentPage + 1);
//   };

//   const goToPrevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   return (
//     <>
//       <div className="container my-5">
//         <SearchResult handleSearch={handleSearch}></SearchResult>
//       </div>
//       <div className="d-flex flex-wrap justify-content-center align-items-center">
//         {(filteredArr.length > 0 ? filteredArr : products).map((product) => (
//           <MyCard
//             key={product.id}
//             imgUrl={`https://image.tmdb.org/t/p/w500${product.poster_path}`}
//             CardTitle={product.original_title}
//             productId={product.id}
//             isFav={isFav(product)}
//             onToggleFav={handlToggleFavMovie}
//             product={product}
//           />
//         ))}
//       </div>
//       <div className="container my-3">
//         {/* Styling for buttons */}
//         <button
//           onClick={goToPrevPage}
//           disabled={currentPage === 1}
//           className="btn btn-primary me-2"
//         >
//           Prev
//         </button>
//         <button onClick={goToNextPage} className="btn btn-primary">
//           Next
//         </button>
//       </div>
//     </>
//   );
// };

// export default Movies;
