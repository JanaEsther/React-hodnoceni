import { useState } from 'react';
import { Star } from '../Star';
import './style.css';

export const Rating = () => {
  const [rating, setRating] = useState(0);
  
  return (
    <div className="rating">
      <div className="rating__value">{rating}</div>
      <div className="rating__stars">
        {[1, 2, 3, 4, 5].map((value) => (
          <Star
          key={value}
          value={value}
          onSelect={setRating}
          />
        ))}
      </div>
    </div>
  );
};
