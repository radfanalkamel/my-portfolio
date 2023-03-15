import React from "react";
import classes from "./Home.module.scss";
import {
  TiSocialLinkedinCircular,
  TiSocialTwitterCircular,
  TiPhone,
} from "react-icons/ti";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const ClickHandler = () => {
    navigate("/contact");
  };

  return (
    <>
      <div className={classes.me}>
        <div>
          <h1>
            Hi there!
            <br />
            I'm <b className={classes.bold}>Radfan,</b>
            <br />
            <span>Web Developer</span>
          </h1>
        </div>
        <div>
          <p>From YE</p>
        </div>
        <div>
          <button onClick={ClickHandler}> Hire me </button>
          &nbsp;&nbsp;&nbsp;
          <a href="https://drive.google.com/file/d/1NHxoUyeKcIMBgq5ULvJlP3TJJTRC8z3x/view" target={"_blank"} rel="noopener noreferrer">
          <button >   CV   </button></a>
        </div>
        <ul>
          <li>
            <a href="https://twitter.com/radfanalkamel" target={"_blank"} rel="noopener noreferrer">
              <TiSocialTwitterCircular />
            </a>
          </li>
          &nbsp;&nbsp;
          <li>
            <a href="https://www.linkedin.com/in/radfan-alkamel-682662247/" target={"_blank"} rel="noopener noreferrer">
              <TiSocialLinkedinCircular/>
            </a>
          </li>
          &nbsp;&nbsp;
          <li>
            <a href="tel:+966-53-520-4899" target={"_blank"} rel="noopener noreferrer">
              <TiPhone/>
            </a>
          </li>
        </ul>
        <div>
          {/*<img className={classes.containerimg} src={me} alt="me"></img>*/}
        </div>
      </div>

      {/*
        <div className={classes.me__icon}>
                <span>
                  <AiFillTwitterCircle></AiFillTwitterCircle>
                </span>
                <span>
                  <AiFillLinkedin></AiFillLinkedin>
                </span>
              </div>
        <div className={classes.container}>
        <div className={classes.container__row}>
          <div className={classes.container__col}>
            <h1>
              <BiAtom></BiAtom>
            </h1>
          </div>
          <div className={classes.container__col}>
            <h1>
              <BiBall></BiBall>
            </h1>
          </div>
          <div className={classes.container__col}>
            <h1>
              <BiAbacus></BiAbacus>
            </h1>
          </div>
          <div className={classes.container__col}>
            <h1>
              <BiCamera></BiCamera>
            </h1>
          </div>
          <div className={classes.container__col}>
            <h1>
              <BiCategory></BiCategory>
            </h1>
          </div>
          <div className={classes.container__col}>
            <h1>
              <BiReply></BiReply>
            </h1>
          </div>
        </div>
      </div>
  */}
    </>
  );
};

export default Home;
