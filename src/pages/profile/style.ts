import styled from 'styled-components';

interface Props {
  color: string;
}

export const Container = styled.div`
  max-width: 1600px;
  width: 100%;
  height: 85vh;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-bottom: 50px;

    border-bottom: 1px solid #B9CBD3;
  }

  header .user {
    display: flex;
    align-items: center;
  }

  header .circle {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 56px;
    height: 56px;

    background-color: #DEE8EC;
    border-radius: 28px;

    margin-right: 10px;
  }

  h1 {
    font-size: 24px;
    font-weight: 700;
    color: #56616E;
  }

  h4 {
    font-size: 16px;
    font-weight: 400;
    color: #8CA0B3;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    color: #8CA0B3;
  }
  @media(max-width: 1650px) {
    max-width: 1400px;
  }

  @media(max-width: 1450px) {
    max-width: 1200px;
  }

  @media(max-width: 1250px) {
    max-width: 1000px;
  }

  @media(max-width: 1050px) {
    max-width: 800px;
  }

  @media(max-width: 850px) {
    max-width: 600px;
  }
`;

export const Grid = styled.div`
  margin-top: 30px;

  display: grid;
  grid-template:
		"item1 item2 item2 item5" 1fr
		"item3 item3 item4 item5" 1fr 
    / 1fr 1fr 1fr 1fr;
  
    grid-gap: 20px;

    /* Estilização geral dos blocos */
    .item1,
    .item2,
    .item3,
    .item4 {
      background-color: #fff;
      box-shadow: 0px 2px 12px rgba(96, 123, 153, 0.15);
      border-radius: 7px;

      padding: 30px;
    }

    .item2,
    .item3,
    .item4 {
      display: flex;
      align-items: center;
    }

  .item1 {
    grid-area: item1;
  }

  .item2 {
    grid-area: item2;
  }

  .item3 {
    grid-area: item3;
  }

  .item4 {
    grid-area: item4;
  }

  h2 {
    font-size: 24px;
    font-weight: 800;
    color: #52636C;
  }

  h3 {
    font-size: 14px;
    font-weight: 400;
    color: #52636C;
  }


  /* Estilização do bloco apenas com textos */
  .item1 div:first-of-type {
    margin-bottom: 10px;
  }

  .item1 p {
    font-size: 12px;
    font-weight: 600;
    color: #52636C;
  }


  /* Estilização do bloco com imagem, textos e botão */
  .item5 {
    grid-area: item5;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .item5 p {
    font-size: 16px;
    font-weight: 400;
    color: #8CA0B3;

    margin-top: 30px;
  }

  .item5 span {
    font-size: 24px;
    font-weight: 700;
    color: #56616E;
  }

  .item5 button {
    background: #2CC3D5;
    border-radius: 8px;
    color: #F8FBFB;
    cursor: pointer;
    font-size: 14px;
    font-weight: 700;
    padding: 10px;

    margin-top: 20px;
  }

  .item5 button:hover {
    background-color: #218F9C;
  }

  @media(max-width: 1100px) {
    grid-template:
      "item1" 1fr
      "item2" 1fr
      "item3" 1fr
      "item4" 1fr
      "item5" 1fr
      / 1fr;

    .item1,
    .item2,
    .item3,
    .item4,
    .item5 {
      margin: 0 30px;
      padding: 10px;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    .item1 {
      flex-direction: column;
      text-align: center;
    }
  }
`;

export const Circle = styled.div<Props>`
  width: 56px;
  height: 56px;

  background-color: ${(props) => props.color === 'lightBlue' && '#2CC3D5'};
  background-color: ${(props) => props.color === 'darkBlue' && '#517BF2'};
  background-color: ${(props) => props.color === 'green' && '#4DCB7B'};

  border-radius: 28px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 15px;
`;

export const Footer = styled.div`
  border-top: 1px solid #B9CBD3;

  padding-top: 50px;
  padding-bottom: 10px;

  p {
    font-size: 12px;
    font-weight: 400;
    color: #738192;

    text-align: center;
  }
`;