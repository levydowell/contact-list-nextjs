"use client";

export const ContactsAPI = {
  contacts: [],
    // {
    //   id: 1,
    //   name: "Levy Dowell",
    //   email: "levydowell@yahoo.com",
    //   imgURL: "https://picsum.photos/200",
    //   phone: "123456789",
    // },
    // {
    //   id: 2,
    //   name: "Jane Smith",
    //   email: "jane@yahoo.com",
    //   imgURL: "https://picsum.photos/200",
    //   phone: "123456789",
    // },
  
  all: function () {
    return this.contacts;
  },
  addContact: function({ id, name, email, imgURL, phone }) {
    this.contacts.push({ id, name, email, imgURL, phone });
  },
  get: function (id) {
    const isContact = (c) => c.id === id;
    return this.contacts.find(isContact);
  },
  delete: function (c) {
    const elementIndeces = this.contacts.indexOf(c);
    this.contacts.splice(elementIndeces, 1);
    console.log('deleted', this.contacts)
  }
};
