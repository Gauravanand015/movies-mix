import React, { useEffect, useState } from "react";
import styles from "./HeroBanner.module.scss";
import { useNavigate } from "react-router-dom";
import fetchData from "../../hooks/fetchData";
import { useSelector } from "react-redux";

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
    <div className={styles.heroBanner}>
      <div className={styles.wrapper}>
        <div className={styles.heroBannerContent}>
          <span className={styles.title}>Welcome.</span>
          <span className={styles.subTitle}>
            Millions of movies, TV shows and people to discover.Explore Now
          </span>
        </div>
        <div className={styles.searchInput}>
          <input
            type="text"
            placeholder="Search Movies and TV shows"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
          />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
