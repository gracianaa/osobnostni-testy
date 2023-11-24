import './style.css';

export const MenuItem = ({ text, onSelect }) => {
  const handleClick = () => {
    onSelect();
  };

  return (
    <a onClick={handleClick} href="#" className="menu-item">
      {text}
    </a>
  );
};
