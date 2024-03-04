import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import fetchData from "../../../hooks/fetchData";
import Img from "../../../components/LazyLoadingImage/Img";
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";
import "./herobanner.scss";

const HeroBanner = () => {
  const { url } = useSelector((state) => state.home);
  const [backgroundMovieImage, setBackgroundMovieImage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const { data, loading } = fetchData("/movie/top_rated");

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackgroundMovieImage(bg);
  }, [data]);

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && searchQuery.length > 0) {
      navigate(`/search?query=${searchQuery}`);
    }
  };

  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdropImage">
          <Img src={backgroundMovieImage} />
        </div>
      )}
      <div className="opacityLayer"></div>
      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome!</span>
          <span className="subTitle">
            Millions of movies, TV shows and people to discover.Explore Now
          </span>
        </div>
        <div className="searchInput">
          <input
            type="text"
            placeholder="Search Movies and TV shows"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
          />
          <button>Search</button>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
