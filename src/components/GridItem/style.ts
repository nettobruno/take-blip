import styled from 'styled-components';

export const Item = styled.div`
    position: relative;

    background-color: #ffffff;
    box-shadow: 0px 2px 12px rgba(96, 123, 153, 0.15);
    border-radius: 7px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 50px 10px;

    transition: all 0.3s;

  :hover {
    transform: scale(1.1);
  }

  button {
    cursor: pointer;
    background-color: transparent;
    position: absolute;
    top: 10px;
    left: 10px;
  }

  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }

  h2 {
    font-size: 16px;
    font-weight: 700;
    color: #52636C;
    text-decoration: none;

    margin-top: 20px;
  }

  h3 {
    font-size: 12px;
    font-weight: 400;
    color: #738192;
    text-decoration: none;
  }
`;