import React, { useContext, useState } from "react";
import { Context } from "../../store/appContext";
import { ContactCard } from "../contentCard/contactCard";
import "./../contactlist/contactlist.css";
import { Modal } from "./modalwindow.js";


export const ContactList = () => {



    const { store, actions } = useContext(Context)
    const [isModalVisible, setIsModalVisible] = useState(false)
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
        setIsModalVisible(false);

    }

    return (
        <div className="container-fluid">

            <div className="add-contact" onClick={() => setIsModalVisible(true)}>             
              <i className="fa-solid fa-plus" ></i>
              <p>Add new contact</p>
            </div>

            <div className="list-container">
                {
                    store.contacts.length > 0 ? (
                        store.contacts.map((item) => (

                            <ContactCard
                                name={item.name}
                                phone={item.phone}
                                email={item.email}
                                address={item.address}
                                key={item.id}
                                function={() => actions.removeContact(item.id)}

                            />
                        ))
                    )
                        : (
                            <p>No hay contactos aún.</p>
                        )}
            </div>
            <Modal
                isVisible={isModalVisible}
                onClose={() => setIsModalVisible(false)}
            >
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Contact name"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              placeholder="Phone number"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Email address"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="address"
              value={formData.address}
              placeholder="Address"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <button className="button" type="submit" onClick={handleSubmit}>Guardar Contacto</button>
          </div>
      </Modal>
    </div>
  );
};