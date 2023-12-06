import { Button } from '../../components/Button';
import pdfButton from './pdf_v2.png';
import './style.css';
import { useOutletContext, useParams } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useRef } from 'react';

export const ResultsPage = () => {
  const refPDF = useRef();

  const downloadPDF = () => {
    const input = refPDF.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4', true);
      pdf.addImage(imgData, 'JPEG', 10, 5, 200, 80);
      pdf.save('personality.pdf');
    });
  };

  const { score } = useParams();
  const test = useOutletContext();
  const results = test.results;

  let bestResult = null;

  results.forEach((result) => {
    if (score >= result.minScore) {
      if (bestResult === null || result.minScore > bestResult.minScore) {
        bestResult = result;
      }
    }
  });

  return (
    <div className="content">
      <div className="resultCard">
        <div className="resultCard__content" ref={refPDF}>
          <div className="resultCard__text">
            <h4 className="resultCard__title">{bestResult.result}</h4>
            <p className="resultCard__description">{bestResult.description}</p>
          </div>
          <div className="resultCard__img">
            <img src={bestResult.image} alt={bestResult.image} />
          </div>
        </div>
        <Button onClick={downloadPDF} type={'secondary'}>
          <div className="buttonShare">
            <div className="buttonShare__image">
              <img src={pdfButton} alt="share" />
            </div>
            Uložit jako PDF
          </div>
        </Button>
      </div>
    </div>
  );
};
