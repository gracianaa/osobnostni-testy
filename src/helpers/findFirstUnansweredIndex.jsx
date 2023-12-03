export const findFirstUnansweredIndex = (questions, selectedAnswers) => {
  let firstUnansweredIndex = null;

  questions.forEach((question, index) => {
    if (firstUnansweredIndex === null && !(question.id in selectedAnswers)) {
      firstUnansweredIndex = index;
    }
  });

  return firstUnansweredIndex;
};
