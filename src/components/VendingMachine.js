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
    width: 260px;
    height: 400px;
    background-color: rgb(220, 220, 220);
    border: 4px solid rgb(225, 225, 225);
    margin: 0 auto;
    position: relative;
    margin-top: 100px;
`;

const DrinkArea = styled.div`
    width: 180px;
    height: 150px;
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
    background-color: #bbb;
`;

const Can = styled.div`
    width: 20px;
    height: 40px;
    margin: 10px;
    border-radius: 5px;
    background-color: gray;

    &.on {
        animation: ${refill} 1s linear;
    }
`;


const BtnArea = styled.div`
    width: 180px;
    height: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const Btn = styled.div`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: darkgray;

    &.on {
        background-color: violet;
    }
`;

const Output = styled.div`
    width: 180px;
    height: 60px;
    background-color: #bbb;
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
`;

const Paid = styled.div`
    width: 50px;
    height: 20px;
    border-radius: 5px;
    background-color: gray;
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