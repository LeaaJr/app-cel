import React from "react";
import '../Style/MoveCards.css'
import img from "../Img/Img";

const MoveCards = () => {

    return (
        <section className="secmovecard">
            <div className="contmovecard">
                    <h1 className="guesmovecard text-6xl">Choose your favorite</h1>
                    <p className="pmovecard"> With the best style </p>
                <div className="movecard">
                    <img src={img["#121415"]} alt="Black" />
                </div >
                <div className="movecard">
                    <img src={img["#333739"]} alt=" Gray" />
                </div >
                <div className="movecard">
                    <img src={img["#585f63"]} alt=" White " />
                </div >
                <div className="movecard">
                    <img src={img["#776353"]} alt=" Dor " />
                </div >
            </div>
        </section>
    );
};

export default MoveCards