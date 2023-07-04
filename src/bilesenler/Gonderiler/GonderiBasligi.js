// Bu dosyada bir değişiklik yapmanıza gerek yok
import React from "react";

const GonderiBasligi = ({ thumbnailUrl, username }) => {
  return (
    <div className='post-header'>
      <div className='post-thumb-wrapper'>
        <img alt='post header' className='post-thumb' src={thumbnailUrl} />
      </div>
      <h2>{username}</h2>
    </div>
  );
};


export default GonderiBasligi;
