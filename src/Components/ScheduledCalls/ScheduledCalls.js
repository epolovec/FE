import React from 'react';
import '../../App.css';
import './ScheduledCalls.css'

function ScheduledCalls() {
    return (
        <div class='ScheduledCalls'>
            <h1>Scheduled Calls</h1>
            <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">Ticket #</th>
      <th scope="col">Priority</th>
      <th scope="col">Status</th>
      <th scope="col">Subject</th>
      <th scope="col">Assignee</th>
      <th scope="col">Customer</th>
      <th scope="col">MID</th>
      <th scope="col">Department</th>
      <th scope="col">Time remaining</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1267522</td>
      <td>Medium</td>
      <td>Closed</td>
      <td>Overnight maintenance</td>
      <td>Gustas Buivydas</td>
      <td>MOM'S WAFFLES</td>
      <td>0018675224</td>
      <td>POS Support</td>
      <td>00:04:31</td>
    </tr>
    <tr>
      <td>1267522</td>
      <td>Medium</td>
      <td>Closed</td>
      <td>Overnight maintenance</td>
      <td>Gustas Buivydas</td>
      <td>MOM'S WAFFLES</td>
      <td>0018675224</td>
      <td>POS Support</td>
      <td>00:04:31</td>
    </tr>
    <tr>
      <td>1267522</td>
      <td>Medium</td>
      <td>Closed</td>
      <td>Overnight maintenance</td>
      <td>Gustas Buivydas</td>
      <td>MOM'S WAFFLES</td>
      <td>0018675224</td>
      <td>POS Support</td>
      <td>00:04:31</td>
    </tr>
  </tbody>
</table>
        </div>
    );
}

export default ScheduledCalls