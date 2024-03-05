import React, { useState } from "react";
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";
import "../Home.scss";
import SwitchTabs from "../../../components/SwitchTabs/SwitchTabs";
import Carousel from "../../../components/Carousel/Carousel";
import fetchData from "../../../hooks/fetchData";

const Trending = () => {
  const [endPoint, setEndPoint] = useState("day");
  const { data, loading } = fetchData(`/trending/all/${endPoint}`);

  const onTabChange = (tab) => {
    setEndPoint(tab === "Day" ? "day" : "week");
  };
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Trending</span>
        <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} />
    </div>
  );
};

export default Trending;
