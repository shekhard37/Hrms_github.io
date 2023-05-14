import React from "react";

const Readonly1 = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <>
    <tr>
      <td>{contact.Issue}</td>
      <td>{contact.ComplainId}</td>
      <td>{contact.Date}</td>
      <td>{contact.empId}</td>
      <td>
        {/* <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button> */}
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          Resolved
        </button>
      </td>
    </tr>
    </>
  );
};

export default Readonly1;