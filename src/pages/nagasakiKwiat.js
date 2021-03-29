import React from "react";
//styled
import styled from "styled-components";
import Footer from "../components/Footer";
//images
import kwiat from "../images/KwiatMilosciIPokoju.NuclearFutures.org.jpg.jpg";

const KwiatZycia = () => {
  return (
    <>
      <NagasakiPage>
        <h2>Kwiat życia i pokoju</h2>
        <div className="text">
          <span>
            Pomnik "Kwiat życia i pokoju" Również znany pod nazwą Pomniku Ofiar
            Nagasaki autorstwa Polaka Mariusza Kulpy, replika zrealizowanego
            pomnika Dar Narodu Polskiego odsłoniętego w 1986 roku w Nagasaki,
            upamiętniającego ofiary bomby atomowej z 1945 roku. Replika została
            odsłonięta 9 VIII 1988 roku na skwerze między ulicami Szeroką i Św
            Ducha, przedstawia metalową rzeźbę o wysokości 2m, w formie
            skamieniałych liści symbolizujących zagłądę oraz wyrastającym nowym
            kwiatem symbolem życia i odrodzenia. Początkowo przeznaczony do
            Warszawy, ostatecznie stanął w Gdańku, portowym mieście, w którym
            2WŚ się rozpoczełą, zakończyła się natomiast w Nagasaki, innym
            portowym mieście.
          </span>
          <div className="image">
            <img src={kwiat} alt="kwiat milosci i pokoju" />
          </div>
        </div>
      </NagasakiPage>
      <Footer
        zrodlo={
          "https://www.gedanopedia.pl/gdansk/?title=POMNIK_%E2%80%9EKWIAT_%C5%BBYCIA_I_POKOJU%E2%80%9D"
        }
      />
    </>
  );
};

const NagasakiPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: Center;
  flex-direction: column;
  text-align: center;
  min-height: 90vh;
  h2 {
    padding: 1rem 0;
    text-transform: upperCase;
  }
  .text {
    width: 70%;
    padding: 1rem 0;
    font-size: 1.5rem;
    display: flex;
    @media screen and (max-width: 1000px) {
      width: 95%;
      flex-direction: column;
      padding: 0;
    }
    span {
      font-family: "Lato", sans-serif;
      letter-spacing: 2px;
      text-align: left;
      padding: 1rem;
    }
    .image {
      img {
        height: 30rem;
        width: 20rem;
        object-fit: cover;
      }
    }
  }
`;

export default KwiatZycia;
