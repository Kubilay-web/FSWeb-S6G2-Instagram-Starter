import React from 'react';
import Yorum from './Yorum';
import './Yorumlar.css';

const Yorumlar = ({ yorumlar }) => {
  return (
    <div>
      {yorumlar.map((comment) => (
        <Yorum key={comment.id} yorum={comment} />
      ))}
    </div>
  );
};

export default Yorumlar;
