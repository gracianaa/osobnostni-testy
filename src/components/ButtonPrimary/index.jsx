import './style.css';

export const ButtonPrimary = ({ children }) => {
  return (
    <div className="button__container">
      <button className="button button--primary">{children}</button>
    </div>
  );
};
