import React from "react";
import Gonderi from "./Gonderi";
import "./Gonderiler.css";

const Gonderiler = ({ gonderiyiBegen, posts }) => {
  return (
    <div className='posts-container-wrapper'>
      {posts.map((post) => (
        <Gonderi key={post.id} postData={post} gonderiyiBegen={gonderiyiBegen} />
      ))}
    </div>
  );
}

export default Gonderiler;
