import React from "react";
import Thanks from "../images/illustration-thank-you.svg";

const ThankYou = ({ setIsSubmitted, currentRating }) => {
    return (
        <div id="container" className="thanks-container">
            <img src={Thanks} alt="payment on cellphone" />
            <div className="rating-result-container">
                <p className="rating-result">You selected {currentRating} out of 5</p>
            </div>
            <h3 style={{ color: "white", fontSize: 24 }}>Thank You!</h3>
            <p style={{ fontSize: 14, color: "hsl(217, 12%, 63%" }}> We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
            <button className="submit-btn" onClick={() => setIsSubmitted(false)}>
                RATE AGAIN
            </button>
        </div>
    );
};

export default ThankYou;
