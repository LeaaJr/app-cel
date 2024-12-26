import React from "react";
import '../Style/MoveCards.css'
import img from "../Img/Img";

const MoveCards = () => {

    return (
        <section className="secmovecard">
            <div className="contmovecard">
                    <h1 className="guesmovecard text-6xl">Cual te gusta mas?</h1>
                    <p className="pmovecard">Elige tu preferiddo</p>
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
                    <img src={img["#776353"]} alt=" White " />
                </div >
            </div>
        </section>
    );
};

export default MoveCards