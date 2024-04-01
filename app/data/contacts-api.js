"use client";

export const ContactsAPI = {
  contacts: [
    {
      id: 1,
      name: "Levy Dowell",
      email: "levydowell@yahoo.com",
      imgURL: "https://picsum.photos/200",
      phone: "123456789d",
    },
  ],
  all: function () {
    return this.contacts;
  },
  get: function (id) {
    const isContact = (c) => c.name === id;
    return this.contacts.find(isContact);
  },
};
