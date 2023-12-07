import { Button } from '../../components/Button';
import pdfButton from './pdf_v2.png';
import fbButton from './facebook.png';
import waButton from './whatsapp.png';
import './style.css';
import { useOutletContext, useParams } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useRef } from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share';

export const ResultsPage = () => {
  const { score } = useParams();
  const test = useOutletContext();
  const results = test.results;
  const refPDF = useRef();

  const downloadPDF = () => {
    const input = refPDF.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4', true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 10;
      pdf.addImage(
        imgData,
        'PNG',
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio,
      );
      pdf.save('personality.pdf');
    });
  };

  let bestResult = null;

  results.forEach((result) => {
    if (score >= result.minScore) {
      if (bestResult === null || result.minScore > bestResult.minScore) {
        bestResult = result;
      }
    }
  });

  const currentURL = window.location.href;

  return (
    <div className="content">
      <div className="resultCard">
        <div className="resultCard__permanent" ref={refPDF}>
          <div className="resultCard__text">
            <h4 className="resultCard__title">{bestResult.result}</h4>
            <p className="resultCard__description">{bestResult.description}</p>
          </div>
          <div className="resultCard__img">
            <img src={bestResult.image} alt={bestResult.image} />
          </div>
        </div>
        <div className="resultsPage__buttons">
          <Button to={'/#chooseTest'} type={'primary'}>
            Vybrat další test
          </Button>
          <Button onClick={downloadPDF} type={'secondary'}>
            <div className="buttonShare">
              <div className="buttonShare__image">
                <img src={pdfButton} alt="share" />
              </div>
              Uložit jako PDF
            </div>
          </Button>

          <FacebookShareButton
            style={{
              backgroundColor: 'white',
              padding: '10px 20px',
              fontSize: '15px',
              color: '#968BC8',
            }}
            className="button button--secondary"
            url={currentURL}
            quote={`${bestResult.result}`}
          >
            <div className="buttonShare">
              <div className="buttonShare__image">
                <img src={fbButton} alt="share" />
              </div>
              Sdílet na Facebook
            </div>
          </FacebookShareButton>

          <WhatsappShareButton
            style={{
              backgroundColor: 'white',
              padding: '10px 20px',
              fontSize: '15px',
              color: '#968BC8',
            }}
            className="button button--secondary"
            title={`${bestResult.result}`}
            url={currentURL}
          >
            <div className="buttonShare">
              <div className="buttonShare__image">
                <img src={waButton} alt="share" />
              </div>
              Sdílet na WhatsApp
            </div>
          </WhatsappShareButton>
        </div>
      </div>
    </div>
  );
};
