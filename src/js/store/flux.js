const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
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

			}
		}
	};
};

export default getState;
