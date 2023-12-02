import './style.css';

export const AnswerList = ({ answer }) => {
  return (
    <>
      <li className="answers__answer" key={answer.id}>
        <p className="answers__text">{answer.answer}</p>
      </li>
    </>
  );
};
