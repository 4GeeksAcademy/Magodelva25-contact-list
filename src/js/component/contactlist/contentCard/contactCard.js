import React from "react";
import "./contactcard.css";


export const ContactCard = (props) => {

    const contactProfilePicture = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMEHR-eHDBqtNRO_S6WmrVcA_mWeRKsY8sHQ&s"
    ]
    return (

        <div className="card-container">
                <img src={contactProfilePicture} alt="pokemon-random" />        
            <div className="contact-details">
                <h6>{props.name}</h6>
                <ul>
                    <li>{props.phone}</li>
                    <li>{props.email}</li>
                    <li>{props.address}</li>
                </ul>
                <button className="remove-btn" key={props.key} onClick={props.function}>Remove</button>
            </div>
        </div>

    )

}