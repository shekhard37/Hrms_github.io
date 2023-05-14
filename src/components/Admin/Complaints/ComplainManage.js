import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./Complain.css";
import data from "./mock-data2.json";
import ReadOnlyRow from "./Readonly2";
import EditableRow from "./ComplainList";

const EditCustomer = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    Issue: "",
    ComplainId: "",
    Date: "",
    empId: "",
  });

  const [editFormData, setEditFormData] = useState({
    Issue: "",
    ComplainId: "",
    Date: "",
    empId: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      Issue: addFormData.Issue,
      ComplainId: addFormData.ComplainId,
      Date: addFormData.Date,
      empId: addFormData.empId,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      Issue: editFormData.Issue,
      ComplainId: editFormData.ComplainId,
      Date: editFormData.Date,
      empId: editFormData.empId,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
     Issue: contact.Issue,
      ComplainId: contact.ComplainId,
      Date: contact.Date,
      empId: contact.empId,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Issue</th>
              <th>Complain Id</th>
              <th>Date</th>
              <th>Emp Id</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      {/* <h2>Add a Contact</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="email"
          required="required"
          placeholder="Enter your email"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="phoneNumber"
          required="required"
          placeholder="Enter a phone number..."
          onChange={handleAddFormChange}
        />
        <select  type="text"
          name="status"
          required="required"
          placeholder="status" onChange={handleAddFormChange}>
    <option value="">--Please choose an option--</option>
    <option value="Reject">Reject</option>
    <option value="Approve">Approve</option>
    <option value="Pending">Pending</option>

</select>
        <button type="submit">Add</button>
      </form> */}
    </div>
  );
};

export default EditCustomer;