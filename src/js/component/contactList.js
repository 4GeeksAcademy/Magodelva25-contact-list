import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";

export const ContactList = () => {

    

    const { store, actions } = useContext(Context)
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        address: "",
      })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    const handleSubmit = (e) => {
        e.preventDefault(); 
        actions.addContact(formData);
        setFormData({ name: "", phone: "", email: "", address: "" });
        
    }

    return (

        <>
            <div className="list-container">
                <div className="contact">
                    { 
                    store.contacts.length > 0 ? (
                    store.contacts.map((item) => (
                            <li key={item.id}>
                                <strong>{item.name}</strong>: {item.phone}, {item.email}, {item.address}
                                <i className="fa fa-trash ml-2" onClick={() => actions.removeContact(item.id)}></i>
                            </li>
                    ))
                    ) 
                    :(
                            <p>No hay contactos aún.</p>
                    )}
                </div>
                <div>
                        <label>Nombre:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                </div>
                <div>
                        <label>Teléfono:</label>
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                </div>
                </div>    
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Dirección:</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" onClick={handleSubmit}>Añadir Contacto</button>
        </>
)};