import './style.css';

export const ButtonSecondary = ({ children }) => {
  return (
    <div className="button__container">
      <button className="button button--secondary">{children}</button>
    </div>
  );
};
