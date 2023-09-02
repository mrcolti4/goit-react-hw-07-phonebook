const URL = 'https://64f27ef4edfa0459f6c5e603.mockapi.io/contacts';

export const ContactsApi = {
  async fetchContacts() {
    const data = await fetch(URL).then(data => data.json());
    return data;
  },
  async addContact(data) {
    fetch(URL, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  },
  async deleteContact(id) {
    fetch(`${URL}/${id}`, {
      method: 'DELETE',
    });
  },
};
