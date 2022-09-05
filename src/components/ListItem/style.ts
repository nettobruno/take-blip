import styled from 'styled-components';

export const Item = styled.div`
  position: relative;

  text-decoration: none;

  transition: all 0.3s;

  display: flex;
  align-items: center;

  background-color: #ffffff;
  box-shadow: 0px 2px 12px rgba(96, 123, 153, 0.15);
  border-radius: 7px;

  padding: 20px 50px;

  a {
    width: 100%;

    text-decoration: none;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  img {
    position: absolute;
    top: 25px;
    left: -30px;
  }

  a div:last-of-type {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h2 {
    font-size: 16px;
    font-weight: 700;
    color: #52636C;

    margin-left: 10px;
  }

  h3 {
    font-size: 12px;
    font-weight: 400;
    color: #738192;
  }

  a:hover {
    text-decoration: underline;
    text-decoration-color: #738192;
  }
`;