import { createSelector } from '@reduxjs/toolkit';

export const selectContactList = state => state.contacts.items;

export const selectFilter = state => state.filter;

// export const selectFilteredContactList = state => {
//   return (
//     state.contacts.items &&
//     state.contacts.items.filter(contact =>
//       contact.name
//         .toLowerCase()
//         .trim()
//         .includes(state.filter.toLowerCase().trim())
//     )
//   );
// };

export const selectFilteredContactList = createSelector(
  [selectContactList, selectFilter],
  (contacts, filter) => {
    return (
      contacts &&
      contacts.filter(contact =>
        contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
      )
    );
  }
);
