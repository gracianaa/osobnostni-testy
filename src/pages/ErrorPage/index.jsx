import './style.css';
import eror from './eror.png';
import { Button } from '../../components/Button';

export const ErrorPage = () => {
  return (
    <div className="erorPage__content">
      <h1 className="erorPage__heading">Ups, tudy cesta nevede...</h1>
      <Button to={'/'} type={'secondary'}>
        Zpět na hlavní stránku
      </Button>
      <div className="erorPage__img">
        <img src={eror} alt="eror image" />
      </div>
    </div>
  );
};
