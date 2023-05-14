import React from "react";

const Jobrowdisplay = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a Issue..."
          name="Issue"
          value={editFormData.Issue}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter your Complain id..."
          name="ComplainId"
          value={editFormData.CompainId}
          onChange={handleEditFormChange}
        ></input>
      </td> 
      <td>
        <input  type="date"
          required="required"
          placeholder="Enter Date..."
          name="Date"
          value={editFormData.Date}
          onChange={handleEditFormChange}>
</input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter number of opening..."
          name="Number"
          value={editFormData.empId}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default Jobrowdisplay;