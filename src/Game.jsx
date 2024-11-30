import React, { useRef, useState } from "react";
import circle from "./assets/circle.png";
import cross from "./assets/cross.png";

let data = ["", "", "", "", "", "", "", "", ""];
const Game = () => {
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);
  let titleRef = useRef(null);
  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);

  let box_arr = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

  const toggle = (e, num) => {
    if (lock) {
      return 0;
    }
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src='${cross}'/>`;
      data[num] = "x";
      setCount(++count);
    } else {
      e.target.innerHTML = `<img src='${circle}'/>`;
      data[num] = "o";
      setCount(++count);
    }
    checkWin();
  };

  const checkWin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data[5]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data[6]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data[7]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data[6]);
    }
  };

  const won = (winner) => {
    setLock(true);
    if (winner === "x") {
      titleRef.current.innerHTML = `Congratulations player X`;
    } else {
      titleRef.current.innerHTML = `Congratulations player O`;
    }
  };

  const reset = () => {
    setLock(false);
    let data = ["", "", "", "", "", "", "", "", ""];
    titleRef.current.innerHTML = "";
    box_arr.map((e) => {
      e.current.innerHTML = "";
    });
  };

  return (
    <section className="text-center ">
      <h1 className="mt-[50px] text-white font-bold text-3xl lg:text-6xl flex justify-center items-center">
        Tic Tac Toe
      </h1>
      <h1
        ref={titleRef}
        className="pt-10 text-white text-3xl font-semibold"
      ></h1>
      <div className="h-[600px] w-[565px] flex m-auto py-10 ml-7 sm:m-auto">
        <div>
          <div
            ref={box1}
            className="Boxes"
            onClick={(e) => {
              toggle(e, 0);
            }}
          ></div>
          <div
            ref={box2}
            className="Boxes"
            onClick={(e) => {
              toggle(e, 1);
            }}
          ></div>
          <div
            ref={box3}
            className="Boxes"
            onClick={(e) => {
              toggle(e, 2);
            }}
          ></div>
        </div>
        <div>
          <div
            ref={box4}
            className="Boxes"
            onClick={(e) => {
              toggle(e, 3);
            }}
          ></div>
          <div
            ref={box5}
            className="Boxes"
            onClick={(e) => {
              toggle(e, 4);
            }}
          ></div>
          <div
            ref={box6}
            className="Boxes"
            onClick={(e) => {
              toggle(e, 5);
            }}
          ></div>
        </div>
        <div>
          <div
            ref={box7}
            className="Boxes"
            onClick={(e) => {
              toggle(e, 6);
            }}
          ></div>
          <div
            ref={box8}
            className="Boxes"
            onClick={(e) => {
              toggle(e, 7);
            }}
          ></div>
          <div
            ref={box9}
            className="Boxes"
            onClick={(e) => {
              toggle(e, 8);
            }}
          ></div>
        </div>
      </div>
      <button
        onClick={() => {
          reset();
        }}
        className="w-[150px] h-[45px] lg:w-[200px] lg:h-[70px] border-none outline-none cursor-pointer rounded-[50px] bg-[#1f3540] text-xl lg:text-2xl text-[#26ffcb] mt-6 mb-12"
      >
        Reset
      </button>
    </section>
  );
};

export default Game;
