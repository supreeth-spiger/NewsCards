import React, { useState, useEffect } from "react";
import axios from "axios";
import { APISource, category, categoryMapper } from "../enum";
import "./mainComponent.scss";
import CardComponent from "../components/card";
import HeaderComponent from "../components/header";

const categoryList = ["apple", "tech_crunch", "wall_street", "tesla"];

const MainComponent = () => {
  const [postList, setPostList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const fetchPosts = async (type) => {
    const res = await axios.get(
      `${APISource.api_endpoint}${category[type]}&apiKey=${APISource.api_key}`
    );
    setPostList(res.data.articles);
  };

  useEffect(() => {
    fetchPosts(categoryList[activeIndex]);
  }, []);

  useEffect(() => {
    console.log(postList);
  }, [postList]);

  const fetchCaetgoryPosts = (data, activeIndex) => {
    fetchPosts(data);
    setActiveIndex(activeIndex);
  };

  return (
    <div className="main-container">
      <HeaderComponent
        fetchCaetgoryPosts={fetchCaetgoryPosts}
        activeIndex={activeIndex}
      />
      <CardComponent postList={postList} />
    </div>
  );
};

export default MainComponent;
