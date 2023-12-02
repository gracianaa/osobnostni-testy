import './style.css';

export const AnswerList = ({ answer, selected, onSelect }) => {
  return (
    <li
      onClick={() => {
        onSelect();
      }}
      className={`answers__answer${
        selected ? ' answers__answer--selected' : ''
      }`}
    >
      <p className="answers__text">{answer.answer}</p>
    </li>
  );
};
