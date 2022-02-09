import React, { useState } from "react";

import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";

const FaqSection = () => {
  return (
    <>
      <Faq>
        <h2>
          Any Quesitons <span>FAQ</span>
        </h2>
        <div className="question">
          <Toggle>
            {" "}
            <h4>How Do I Start?</h4>
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corporis, consequatur?
              </p>
            </div>
            <div className="faq-line"></div>
          </Toggle>
        </div>
        <Toggle>
          <div className="question">
            <h4>Daily Scheduale</h4>
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corporis, consequatur?
              </p>
            </div>
            <div className="faq-line"></div>
          </div>
        </Toggle>
        <Toggle>
          <div className="question">
            <h4>Diffrent Payment Methods</h4>
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corporis, consequatur?
              </p>
            </div>
            <div className="faq-line"></div>
          </div>
        </Toggle>
        <Toggle>
          <div className="question">
            <h4>What Products Do You Offer?</h4>
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corporis, consequatur?
              </p>
            </div>
            <div className="faq-line"></div>
          </div>
        </Toggle>
      </Faq>
    </>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
  }
  .question {
    padding: 3rem 0;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0;
  }
  p {
    padding: 1rem 0;
  }
`;

export default FaqSection;
