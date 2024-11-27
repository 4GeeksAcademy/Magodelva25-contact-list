import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const ContactList = () => {

    const { store } = useContext(Context)
    return (

        <div>
            <div className="list-container">
                <div className="contact">
                    {
                        store.contacts.map((item) => (
                            <li key = {item.id}>
                                {item.name},
                                {item.phone},
                                {item.email},
                                {item.address}
                            </li>    
                        ))
                    }
                </div>
                <form>
                    <input type="text" id="name" placeholder="Name"></input>
                    <input type="text" id="phoneNumber" placeholder="phoneNumber"></input>
                    <input type="text" id="emailAdress" placeholder="emailAdress"></input>
                    <input type="text" id="adress" placeholder="Name"></input>
                    <button
                </form>
            </div>
        </div>

    )
}