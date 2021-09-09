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
  const [loader, setLoader] = useState(true);

  const fetchPosts = async (type) => {
    const res = await axios.get(
      `${APISource.api_endpoint}${category[type]}&apiKey=${APISource.api_key}`
    );
    if(res.data.articles){
      setLoader(false)
      setPostList(res.data.articles);
    }else{
      return ["NO Data"]
    }
  };

  useEffect(() => {
    fetchPosts(categoryList[activeIndex]);
  }, []);



  const fetchCaetgoryPosts = (data, activeIndex) => {
    setLoader(true);
    fetchPosts(data);
    setActiveIndex(activeIndex);
  };

  return (
    <div className="main-container">
      <HeaderComponent
        fetchCaetgoryPosts={fetchCaetgoryPosts}
        activeIndex={activeIndex}
      />
      <CardComponent postList={postList} dataLoader={loader}/>
    </div>
  );
};

export default MainComponent;
