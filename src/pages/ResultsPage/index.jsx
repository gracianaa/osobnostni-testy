import { Button } from '../../components/Button';
import pdfButton from './pdf.png';
import fbButton from './facebook.png';
import waButton from './whatsapp.png';
import './style.css';
import { useOutletContext, useParams } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useRef, useState } from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share';

export const ResultsPage = () => {
  const { score } = useParams();
  const data = useOutletContext();
  const test = data[0];
  const shareOpen = data[1];
  const setShareOpen = data[2];
  const shareButtonClass = `buttonShare ${shareOpen ? 'active' : 'closed'}`;
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
            {bestResult.description.map((paragraph, index) => (
              <p key={index} className="resultCard__description">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="resultCard__img">
            <img src={bestResult.image} alt={bestResult.image} />
          </div>
        </div>
        <div className="resultsPage__buttons">
          <Button to={'/#chooseTest'} type={'primary'}>
            Vybrat další test
          </Button>
          <div className="shareButtons__parent">
            <Button
              onClick={() => {
                setShareOpen(!shareOpen);
              }}
              type={'secondary'}
            >
              Sdílet s přáteli
            </Button>

            <div className="buttonsShare">
              <button
                className={`buttonPdf ${shareButtonClass}`}
                onClick={downloadPDF}
              >
                <div className="buttonPdf__image">
                  <img src={pdfButton} alt="share" />
                </div>
              </button>

              <FacebookShareButton
                className={shareButtonClass}
                url={currentURL}
                quote={`${bestResult.result}`}
              >
                <FacebookIcon size={32} round={true} />
              </FacebookShareButton>

              <WhatsappShareButton
                className={shareButtonClass}
                title={`${bestResult.result}`}
                url={currentURL}
                separator=", celý výsledek osobnostního testu: "
              >
                <WhatsappIcon size={32} round={true} />
              </WhatsappShareButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
