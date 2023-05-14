import React from "react";

const Readonly1 = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.jobTitle}</td>
      <td>{contact.jobId}</td>
      <td>{contact.Status}</td>
      <td>{contact.Number}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Readonly1;