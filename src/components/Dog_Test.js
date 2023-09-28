import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Dog_Test() {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [column, setColumn] = useState("");
  const [row, setRow] = useState("");
  const [classPlate, setClassPlate] = useState("");
  const [dogMove, setDogMove] = useState(false);
  const [pixels, setPixels] = useState([]);
  const [className, setClassName] = useState("");
  const [classNameForDog, setClassNameForDog] = useState(false);

  const Pixel = styled.div`
    width: 10px;
    height: 10px;
    border: 1px solid rgb(247, 247, 247);
    box-sizing: border-box;
    &.on {
      background-color: #ff8400;
    }
    &.off {
      background-color: white;
    }
    &.plate {
      background-color: rgb(120, 120, 120);
    }
    &.plate-top {
      background-color: rgb(190, 190, 190);
    }
  `;
  const PixelCanvas = styled.div`
    display: flex;
    width: ${width};
    height: ${height};
    flex-wrap: wrap;
    margin: 100px auto;
    border: 1px solid rgb(212, 212, 212);
    overflow: hidden;
    position: relative;
  `;

  const Plate = styled.div`
    background-color: rgb(120, 120, 120);
  `;

  const Dog = styled.div`
    width: 118px;
    height: 90px;
    position: absolute;
    background-image: url("../images/dog/dog_sprite.png");
    background-position: left;
    background-size: cover;
    top: 210px;
    right: 95px;
    &.move {
      background-position: right;
    }
  `;
  const Wrap = styled.div`
    div {
      &.pixel-canvas {
        &.dog {
          width: 118px;
          height: 90px;
          position: absolute;
          background-image: url(../images/dog/dog_sprite.png);
          background-position: left;
          background-size: cover;
          top: 210px;
          right: 95px;
          &.move {
            background-position: right;
          }
        }
      }
    }
  `;

  function DogMove() {
      setClassNameForDog(!classNameForDog)
  }

  useEffect(() => {
    setTimeout(()=>{
        DogMove();
    }, 1000)
  }, [classNameForDog]);

  let num = 50;
  let numR = 50;
  let numC = 50;
  let allPixelsNum = numR * numC;

  function pixelCanvasWidthHeight() {
    setWidth(`${num * 10}px`);
    setHeight(`${num * 10}px`);
  }

  //   let r_Count = 0;
  //   let c_Count = 1;

  
  //   function plusCounts() {
  //     r_Count++;
  //     if (r_Count > num) {
  //       r_Count = 1;
  //       c_Count++;
  //     }
  //   }

  function AddClassNameRowAndColumn() {
    for (let i = 0; i < numR; i++) {
      for (let index = 0; index < numC; index++) {
        pixels.push(
          <Pixel
            key={index}
            className={className !== "" ? "pixel" : className}
          ></Pixel>
        );
      }
    }
  }

  useEffect(()=>{
      pixelCanvasWidthHeight();
      AddClassNameRowAndColumn();
  }, [])
  


//   const AutoChangePixelBgColor = () => {
//     let autoPlayTimer = Math.floor(Math.random() * 80 + 30);
//     let c_Number = 1;
//     let r_Number = Math.floor(Math.random() * 8 + 11);
//     setColumn(c_Number);
//     setRow(r_Number);
//     const interval = setInterval(() => {
//       setColumn(column + 1);
//       if (row < 12) {
//         setRow(12);
//       } else if (column === 28) {
//         clearInterval(interval);
//       }
//       // Add Foods
//       setClassName(`pixel c-${column} r-${row} on`);

//       // Remove Foods
//       setClassName(`.pixel.c-${column - 1}.r-${row}`);
//     }, autoPlayTimer);
//   };

  //   function DrawPlate() {
  //     for (let i = 10; i < 21; i++) {
  //       let plate = document.querySelector(`.pixel.c-30.r-${i}`);
  //       plate.classList.add("plate");
  //     }
  //     for (let i = 11; i < 20; i++) {
  //       let plate = document.querySelector(`.pixel.c-29.r-${i}`);
  //       plate.classList.add("plate-top");
  //     }
  //   }

  //   function RemoveAllFood() {
  //     pixels.forEach((pixel) => {
  //       pixel.classList.remove("on");
  //     });
  //   }

  //   for (let i = 0; i < 50; i++) {
  //     AutoChangePixelBgColor();
  //   }

  //   function feed() {
  //     setInterval(() => {
  //       for (let i = 0; i < 50; i++) {
  //         AutoChangePixelBgColor();
  //       }
  //       setTimeout(() => {
  //         RemoveAllFood();
  //       }, 20);
  //     }, 4000);

  //     DrawPlate();
  //   }

  return (
    <>
      <Wrap>
        <PixelCanvas>
          {pixels.map((e) => {
            return e;
          })}
          <Dog className={classNameForDog === true ? "move" : ""} />
        </PixelCanvas>
      </Wrap>
    </>
  );
}

export default Dog_Test;
