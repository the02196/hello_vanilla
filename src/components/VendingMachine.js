import React from 'react';
import styled, { keyframes } from 'styled-components';

const refill = keyframes`
    0% { opacity: 1; }
    25% { transform: rotate(-15deg); opacity: 0.5; }
    50% { transform: rotate(0); opacity: 0; }
    75% { transform: rotate(15deg); opacity: 0.5; }
    100% { transform: rotate(0); opacity: 1; }
`;

const move2 = keyframes`
    0% { top: 10px; opacity: 0.1; }
    50% { opacity: 0.3; }
    100% { opacity: 1; }
`;

const move3 = keyframes`
    0% {}
    50% { transform: rotate(-30deg) translateY(-60px); opacity: 0.5; }
    100% { opacity: 0; }
`;

const Machine = styled.div`
    width: 230px;
    height: 350px;
    background-color: #D1E8DE;
    border: 4px solid rgb(225, 225, 225);
    margin: 0 auto;
    position: relative;
    margin-top: 100px;
    @media screen and (max-width: 1920px) {
          transform: scale(0.9);
      }
`;

const DrinkArea = styled.div`
    width: 170px;
    height: 120px;
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const Drink = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: #A8CBB9;
`;

const Can = styled.div`
    width: 13px;
    height: 30px;
    margin: 10px;
    border-radius: 3px;
    background-color: #4C9A9C;

    &.on {
        animation: ${refill} 1s linear;
    }
`;


const BtnArea = styled.div`
    width: 150px;
    height: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const Btn = styled.div`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: darkgray;

    &.on {
        background-color: violet;
    }
`;

const Output = styled.div`
    width: 160px;
    height: 60px;
    background-color: #bbb;
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
`;

const Paid = styled.div`
    width: 30px;
    height: 13px;
    border-radius: 2px;
    background-color: #4C9A9C;
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    visibility: hidden;
    transition: 1s;

    &.on {
        opacity: 1;
        visibility: visible;
        animation: ${move2} 2s forwards;
    }

    &.move {
        animation: ${move3} 1s linear;
        opacity: 0;
    }
`;

const VendingMachine = () => {
    return (
        <Machine>
            <DrinkArea>
                <Drink>
                    <Can className="on" />
                    <Can />
                    <Can />
                    <Can />
                    <Can />
                </Drink>
                <BtnArea>
                  <Btn />
                  <Btn />
                  <Btn />
                  <Btn />
                  <Btn />
                </BtnArea>
                <Drink>
                    <Can />
                    <Can />
                    <Can />
                    <Can />
                    <Can />
                </Drink>
                <BtnArea>
                  <Btn />
                  <Btn />
                  <Btn />
                  <Btn />
                  <Btn />
                </BtnArea>
            </DrinkArea>
            <Output>
                <Paid className="on"></Paid>
            </Output>
        </Machine>
    );
};

export default VendingMachine;