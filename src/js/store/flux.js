const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			loadSomeData: () => {
				fetch('https://playground.4geeks.com/contact/agendas/MagodelVa/contacts')
				.then(resp => resp.json())
				.then(respJson => {
					const store = getStore();
					const contacts = store.contacts;
					const newContact = respJson.contacts;
					const updateContactList = [...contacts, ...newContact];
					setStore({ contacts: updateContactList});
					console.log(store)
				})
			},

			addContact: (nombre, phoneNumber, emailAdress, adress) => {
				const store = getStore();
				const contacts = store.contacts;
				
				fetch ('https://playground.4geeks.com/contact/agendas/MagodelVa', {
					method: 'POST',
					body: JSON.stringify( {
						name: nombre,
      					phone: phoneNumber,
      					email: emailAdress,
      					address: adress,
					}),

					headers: {
						'Content-Type' : 'application/json'
					}
				})
				.then (resp => resp.json())
				.then (respJson => {
					const newContacts = [...contacts, respJson];
					setStore({ contacts: newContacts})
				})

			}
		}
	};
};

export default getState;
