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
          placeholder="Enter a job title..."
          name="jobTitle"
          value={editFormData.jobTitle}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter your job id..."
          name="jobId"
          value={editFormData.jobId}
          onChange={handleEditFormChange}
        ></input>
      </td> 
      <td>
        <select  type="text"
          required="required"
          placeholder="Enter Status..."
          name="Status"
          value={editFormData.Status}
          onChange={handleEditFormChange}>
    <option value="">--Please choose an option--</option>
    <option value="Close">Close</option>
    <option value="Open">Open</option>
</select>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter number of opening..."
          name="Number"
          value={editFormData.Number}
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