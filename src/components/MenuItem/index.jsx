import './style.css';

export const MenuItem = ({ text, onSelect, id }) => {
  const handleClick = () => {
    onSelect();
  };

  return (
    <a onClick={handleClick} href={id} className="menu-item">
      {text}
    </a>
  );
};
