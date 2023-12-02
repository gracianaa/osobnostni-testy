import './style.css';

export const AnswerList = ({ answer, selected, onSelect }) => {
  const value = answer.value;

  return (
    <>
      <li
        onClick={() => {
          onSelect();
        }}
        className={`answers__answer${
          selected ? ' answers__answer--selected' : ''
        }`}
        key={answer.id}
      >
        <p className="answers__text">
          {answer.answer} {value}
        </p>
      </li>
    </>
  );
};
