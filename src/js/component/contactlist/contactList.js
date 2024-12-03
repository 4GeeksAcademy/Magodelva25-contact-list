import React, { useContext, useState } from "react";
import { Context } from "../../store/appContext";
import { ContactCard } from "./contentCard/contactCard.js";
import "./../contactlist/contactlist.css";
import { Modal } from "./modal/modalwindow.js";
import { ToolBar } from "../toolbar/toolbar.js"; 

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

        // TOOL BAR
        <div className="container">
            <ToolBar 
            modalVisible = {() => setIsModalVisible(true)}
            resetAll = {() => actions.removeAll()}            
            />

        
        {/* LISTA DE CONTACTOS */}

            <div className="list-container">
                {
                    store.contacts.length > 0 ? (
                        store.contacts.map((item) => (

                            <ContactCard
                                key={item.id}
                                name={item.name}
                                phone={item.phone}
                                email={item.email}
                                address={item.address}
                                function={() => actions.removeContact(item.id)}

                            />
                        ))
                    )
                        : (
                            <div className="no-contacts">
                              <p>No hay contactos aún.</p>
                            </div>
                        )}
            </div>
            
        {/* MODAL */}
            
            <Modal
                isVisible={isModalVisible}
                onClose={() => setIsModalVisible(false)}
            >
          <form onSubmit={handleSubmit}>
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

              placeholder="phone number (000 000 000)"
              onChange={handleChange}
              pattern="[0-9]{9}"
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
            <button className="button" type="submit">Guardar Contacto</button>
          </div>
          </form>
      </Modal>
      </div>
  );
};