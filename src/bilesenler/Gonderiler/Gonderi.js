import React from "react";
import Yorumlar from "../Yorumlar/Yorumlar";
import BegenBolumu from "./BegenBolumu";
import GonderiBasligi from "./GonderiBasligi";


const Gonderi = ({ postData, gonderiyiBegen }) => {
  const { username, thumbnailUrl, imageUrl, id, likes, comments } = postData;

  const handleGonderiyiBegen = () => {
    gonderiyiBegen(id);
  };

  return (
    <div className='post-border'>
      <GonderiBasligi username={username} thumbnailUrl={thumbnailUrl} />
      <div className='post-image-wrapper'>
        <img alt='post thumbnail' className='post-image' src={imageUrl} />
      </div>
      <BegenBolumu gonderiyiBegen={handleGonderiyiBegen} likeNr={likes} />
      <Yorumlar yorumlar={comments} />
    </div>
  );
};

export default Gonderi;
