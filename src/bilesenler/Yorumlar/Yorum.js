// Bu dosyayı değiştirmenize gerek yok
import React from 'react';

const Yorum = ({ yorum }) => {
  const { username, text } = yorum;

  return (
    <div className='comment-text'>
      <span className='user'>{username}</span>
      {' '}
      <span className='comment'>{text}</span>
    </div>
  );
};


export default Yorum;