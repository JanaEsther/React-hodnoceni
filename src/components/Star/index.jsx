import { useState } from 'react';
import './style.css';

export const Star = ({ value, glowing, onSelect }) => {
  //const [glowing, setGlowing] = useState(false);

  const handleStar = () => {
    glowing === true;
    onSelect(value); // Call onSelect with the star value
  };

  const starClass = glowing ? 'rating__star rating__star--on' : 'rating__star';

  return <div className={starClass} onClick={handleStar}></div>;
};
