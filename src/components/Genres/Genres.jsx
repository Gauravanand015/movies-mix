import React from "react";
import { useSelector } from "react-redux";
import "./Genres.scss";

const Genres = ({ genresIds }) => {
  const { genres } = useSelector((state) => state.home);
  return (
    <div className="genres">
      {genresIds.map((genresId) => {
        console.log(genres[genresId]?.name);
        if (!genres[genresId]?.name) return;
        return (
          <div key={genresId} className="genre">
            {genres[genresId]?.name}
          </div>
        );
      })}
    </div>
  );
};

export default Genres;
