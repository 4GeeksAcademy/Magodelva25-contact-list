import React from "react";
import "./../contentCard/contactcard.css";

export const ContactCard = (props) => {

    return (

        <div className="card-container">
            <div className="card-content">
                <h6>{props.name}</h6>
                <ul>
                    <li>{props.phone}</li>
                    <li>{props.email}</li>
                    <li>{props.address}</li>
                </ul>
            <div className={props.icon} key={props.key} onClick={props.function}></div>
            </div>
        </div>

    )

}