import './style.css';

export const Star = ({ value, glowing, onSelect }) => {

  const handleStar = () => {
    glowing === true;
    onSelect(value); // Volani onSelect s value star
  };

  const starClass = glowing ? 'rating__star rating__star--on' : 'rating__star';

  return <div className={starClass} onClick={handleStar}></div>;
};
