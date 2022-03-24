import React, { useState } from "react";
import Message from "./components/Message";
import FavoritedStar from "./components/FavoritedStar";
import ThankYou from "./components/ThankYou";

const App = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [currentRating, setCurrentRating] = useState("");

    const RatingButton = (props) => {
        return <button onClick={() => setCurrentRating(props.number)}>{props.number}</button>;
    };

    return (
        <>
            {!isSubmitted && (
                <div id="container">
                    <FavoritedStar />
                    <Message />
                    <ul className="button-list">
                        <li>
                            <RatingButton number={1} />
                        </li>
                        <li>
                            <RatingButton number={2} />
                        </li>
                        <li>
                            <RatingButton number={3} />
                        </li>
                        <li>
                            <RatingButton number={4} />
                        </li>
                        <li>
                            <RatingButton number={5} />
                        </li>
                    </ul>
                    <button className="submit-btn" onClick={() => setIsSubmitted(true)}>
                        SUBMIT
                    </button>
                </div>
            )}

            {isSubmitted && <ThankYou setIsSubmitted={setIsSubmitted} currentRating={currentRating} />}
        </>
    );
};

export default App;
