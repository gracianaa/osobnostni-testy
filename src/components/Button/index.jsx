import './style.css';

export const Button = ({ children, type }) => {
  return (
    <button
      className={`button ${
        type === 'primary' ? 'button--primary' : 'button--secondary'
      }`}
    >
      {children}
    </button>
  );
};
