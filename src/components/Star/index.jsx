import { useState } from 'react';
import './style.css';

export const Star = ({ value, onSelect }) => {
  const [glowing, setGlowing] = useState(false);

  const handleStar = () => {
    setGlowing(true)
    onSelect(value)
    ;
  };

  const starClass = glowing ? 'rating__star rating__star--on' : 'rating__star';

  return (
    <div
      className={starClass}
      onClick={handleStar}
      value={value}
    ></div>
  );
};
