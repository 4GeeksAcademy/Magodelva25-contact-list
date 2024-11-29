import React, { useState} from "react";
import "./../contentCard/contactcard.css";


export const ContactCard = (props) => {


    const [profileImage, setProfileImage] = useState();
    
    const contactProfilePicture = [

                "https://static.wikia.nocookie.net/espokemon/images/b/bf/Mew.png/revision/latest/scale-to-width-down/1000?cb=20160311010530",
                "https://static.wikia.nocookie.net/espokemon/images/f/f5/Alakazam.png/revision/latest?cb=20170615171153",
                "https://static.wikia.nocookie.net/espokemon/images/0/07/Oranguru.png/revision/latest?cb=20160920133218",
                "https://static.wikia.nocookie.net/espokemon/images/9/95/Metagross.png/revision/latest?cb=20141214183056"

             ];        
    const randomNumber = Math.floor(Math.random() * 4);
    const generatedPicture = contactProfilePicture[randomNumber];
    setProfileImage (generatedPicture);


     };

    return (

        <div className="card-container">
                <img src={profileImage} className="profile-picture" alt="pokemon-random"/>
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