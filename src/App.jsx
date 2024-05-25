import React from "react";
import { Router, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/navbar/navbar";
import About from "./pages/about/about";
import Home from "./pages/home/home";
import Contact from "./pages/contact/contact";
import NotFound from "./pages/notFound/notFound";
import Movies from "./pages/movies/movies";
import MoviesDetails from "./pages/moviesDetails/moviesDetails";
import Favourits from "./components/favourite/favourite";
import { Provider } from "react-redux";
import store from "./store/store";



export default class App extends React.Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <div>
            <MyNavbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/favourites" element={<Favourits />} />
              <Route path="/moviesDetails/:id" element={<MoviesDetails />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Provider>
      </>
    );
  }
}
