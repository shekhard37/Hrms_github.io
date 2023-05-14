import './App.css';
import React from 'react'

export default function salary() {
  return (
    <div className="App">
      <h1>Employee View Salary</h1>
      <center>
      <table>
        <thead>
        <tr>
          
          <th>Annual Salary</th>
          <th>Payment Start date</th>
          <th>Payment End date</th>
          <th>Payment</th>
          <th>Due Payment</th>

        </tr>
        </thead>
        <tbody>
          <tr>
            <td>60000</td>
            <td>July 1 2022</td>
            <td>August 1 2022</td>
            <td>50000</td>
            <td>10000</td>

          </tr>
          <tr>
            <td>60000</td>
            <td>August 1 2022</td>
            <td>September 1 2022</td>
            <td>60000</td>
            <td>0</td>
          </tr>
          <tr>
            <td>60000</td>
            <td>September 1 2022</td>
            <td>October 1 2022</td>
            <td>40000</td>
            <td>20000</td>
          </tr>
          <tr>
            <td>60000</td>
            <td>October 1 2022</td>
            <td>November 1 2022</td>
            <td>---</td>
            <td>---</td>
          </tr>
          <tr>
            <td>60000</td>
            <td>November 1 2022</td>
            <td>December 1 2022</td>
            <td>---</td>
            <td>---</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>Total Payment</td>
            <td>1040000</td>
            <td>---</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>Due Payment</td>
            <td>30000</td>
          </tr>

          </tbody>
      </table></center>
    </div>
  )
}