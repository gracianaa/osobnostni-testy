import './style.css';
import tests from '../../../tests.json';
import { CardTest } from '../CardTest';

export const ChooseTest = () => {
  return (
    <section className="testList">
      <h2 className="testList__header">Vyber si svůj test</h2>
      <div className="testList__cards">
        {tests.map((test) => (
          <CardTest key={test.id} test={test} />
        ))}
      </div>
    </section>
  );
};
