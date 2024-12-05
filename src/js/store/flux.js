const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
		},
		actions: {
			loadSomeData: () => {
				fetch('https://playground.4geeks.com/contact/agendas/MagodelVa/contacts')
				.then((resp) => {
					if (!resp.ok) {
						throw new Error("Error al añadir contacto");
					}
					return resp.json();
				})
				.then(respJson => {
					const store = getStore();
					const contacts = store.contacts;
					const newContact = respJson.contacts;
					const updateContactList = [...contacts, ...newContact];
					setStore({ contacts: updateContactList});
				})
				.catch((error) => console.error("Error en la solicitud:", error));
			},

			addContact: (newContactData) => {
				const store = getStore();
				const contacts = store.contacts;
				
				fetch ('https://playground.4geeks.com/contact/agendas/MagodelVa/contacts', {
					method: 'POST',
					body: JSON.stringify(newContactData),

					headers: {
						'Content-Type' : 'application/json'
					}
				})
				.then((resp) => {
					if (!resp.ok) {
						throw new Error("Error al añadir contacto");
					}
					return resp.json();
				})
				.then((newContact) => {
					const updatedContacts = [...contacts, newContact];
					setStore({ contacts: updatedContacts });
				})
				.catch((error) => console.error("Error en la solicitud:", error));

			},

			editContact: (id, updatedContact) => {
				fetch(`https://playground.4geeks.com/contact/agendas/MagodelVa/contacts/${id}`, {
				  method: "PUT",
				  headers: {
					"Content-Type": "application/json",
				  },
				  body: JSON.stringify(updatedContact),
				})
				  .then((resp) => {
					if (!resp.ok) {
					  throw new Error("Failed to edit contact");
					}
					return resp.json();
				  })
				  .then((respJson) => {
					const store = getStore();
			  
					// Actualiza el contacto en el estado local
					const updatedContacts = store.contacts.map((contact) =>
					  contact.id === id ? { ...contact, ...updatedContact } : contact
					);
			  
					setStore({ contacts: updatedContacts });
				  })
				  .catch((error) => console.error("Error en la solicitud:", error));
			  },
			  

			removeContact: (id) => {
				const store = getStore();
				const contacts = store.contacts;
				
				fetch (`https://playground.4geeks.com/contact/agendas/MagodelVa/contacts/${id}`, {
					method: 'DELETE',
				})
				.then(() => {
					const newContactList = contacts.filter(item => item.id !== id)
					setStore({ contacts: newContactList });
				})
				.catch((error) => console.error("Error en la solicitud:", error));

			},
			removeAll: async () => {
				const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar todos los contactos?");
				if (!confirmDelete) return;
			
				const store = getStore();
				const contacts = store.contacts;
			
				try {
					for (const contact of contacts) {
						await fetch(`https://playground.4geeks.com/contact/agendas/MagodelVa/contacts/${contact.id}`, {
							method: 'DELETE',
							headers: {
								'Content-Type': 'application/json'
							}
						});
					}
			
					setStore({ contacts: [] });
					console.log("Todos los contactos han sido eliminados exitosamente.");
				} catch (error) {
					console.error("Error al intentar eliminar todos los contactos:", error);
				}
			},


			}
		}
	};

export default getState;
