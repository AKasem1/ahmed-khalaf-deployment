import React from 'react';
import { IoTimerOutline } from "react-icons/io5";
import { MdQuiz } from "react-icons/md";
import { AiOutlineRetweet } from "react-icons/ai";
import './Cards.css';
const Cards = () => {
    return (
        <div className="container">
          <div data-text="متابعة دورية مع ولي الأمر" style={{ "--r": "-15", backgroundColor: "red"}} className="glass">
            <AiOutlineRetweet className="icon" />
          </div>
          <div data-text="امتحانات و واجبات تفاعلية" style={{ "--r": "5", backgroundColor: "blue" }} className="glass">
            <MdQuiz className="icon" />
          </div>
          <div data-text="توفير للوقت والمجهود" style={{ "--r": "25" , backgroundColor: "navy"}} className="glass">
            <IoTimerOutline className="icon" />
          </div>
        </div>
      );
    };

export default Cards;
