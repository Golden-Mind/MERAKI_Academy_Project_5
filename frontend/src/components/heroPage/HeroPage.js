import React, { useEffect, useState } from "react";
import "./heroStyle.css";
import { useNavigate } from "react-router-dom";
import { AiOutlineSend } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
const images = [
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  "https://images.unsplash.com/photo-1505826759037-406b40feb4cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
];
// const delay = 2500;
export default function HeroPage() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const timeoutRef = React.useRef(null);
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  useEffect(() => {
    resetTimeout();
    //to make it automatic
    // timeoutRef.current = setTimeout(
    //   () =>
    //     setIndex((prevIndex) =>
    //       prevIndex === images.length - 1 ? 0 : prevIndex + 1
    //     ),
    //   delay
    // );

    return () => {
      resetTimeout();
    };
  }, [index]);
  return (
    <>
      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {images.map((backgroundImage, index) => (
            <>
              <div className="slide" key={index} style={{ backgroundImage }}>
                <img src={backgroundImage} alt="img-hero" />
              </div>
            </>
          ))}
        </div>

        <div className="slideshowDots">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </div>
      <div className="parOfNav">
        <div className="nav-infoo">
          <div className="infoo">
            <p>
              <p>
                {" "}
                Why <span className="jebna-hero">Jebna</span>
                <span className="lak-hero">lak</span>!!{" "}
              </p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
          </div>
          <div
            className="hero-log"
            onClick={() => {
              navigate("/login");
            }}
          >
            <p> Get Started </p>
          </div>
        </div>
      </div>
      <div className="about-us">
        <div className="contaner-about">
          <div className="about">
            <img
              src="https://c.neh.tw/thumb/f/720/comhiclipartmepgu.jpg"
              style={{ width: "20%" }}
            />
            <h4> Momani </h4>
            <p className="about-info">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="about">
            <img
              src="https://c.neh.tw/thumb/f/720/comhiclipartmepgu.jpg"
              style={{ width: "20%" }}
            />
            <h4> Ruba </h4>
            <p className="about-info">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="about">
            <img
              src="https://c.neh.tw/thumb/f/720/comhiclipartmepgu.jpg"
              style={{ width: "20%" }}
            />
            <h4> Beesan </h4>
            <p className="about-info">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
      <div className="hero-product">
        <div className="product-contnt"></div>
      </div>
      <div className="footer">
        <div className="foot-content">
          <div className="foot-info">
            <p> Jebnalak</p>
            <h5>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </h5>
          </div>
          <div className="hero-email">
            <input type="email" placeholder="type your email .." />
            <AiOutlineSend className="hero-send" />
          </div>
        </div>
        <div className="foot-end">
          <p>Copyright &copy; 2022 spacingtech rights reserved</p>
          <div className="foot-icon">
            <BsFacebook />
            <AiOutlineInstagram />
            <AiOutlineMail />
          </div>
        </div>
      </div>
    </>
  );
}
