import React from 'react';
import '../../App.css';
import './AllTickets.css';
import Ticket from './TicketsModel';

function AllTickets() {
    return (
        <div className='ScheduledCalls'>
            <h1>All Tickets</h1>
            <table className='table table-dark'>
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
                    </tr>
                </thead>
                <tbody>
                    <Ticket ticketNumber='1267522' priority='Medium' status='Closed' subject='Overnight maintenance' assignee='Gustas Buivydas' customer="MOM'S WAFFLES" mid='0018675224' department='POS Support' />
                    <Ticket ticketNumber='1267522' priority='Medium' status='Closed' subject='Overnight maintenance' assignee='Gustas Buivydas' customer="MOM'S WAFFLES" mid='0018675224' department='POS Support' />
                    <Ticket ticketNumber='1267522' priority='Medium' status='Closed' subject='Overnight maintenance' assignee='Gustas Buivydas' customer="MOM'S WAFFLES" mid='0018675224' department='POS Support' />
                    <Ticket ticketNumber='1267522' priority='Medium' status='Closed' subject='Overnight maintenance' assignee='Gustas Buivydas' customer="MOM'S WAFFLES" mid='0018675224' department='POS Support' />
                    <Ticket ticketNumber='1267522' priority='Medium' status='Closed' subject='Overnight maintenance' assignee='Gustas Buivydas' customer="MOM'S WAFFLES" mid='0018675224' department='POS Support' />
                    <Ticket ticketNumber='1267522' priority='Medium' status='Closed' subject='Overnight maintenance' assignee='Gustas Buivydas' customer="MOM'S WAFFLES" mid='0018675224' department='POS Support' />
                    <Ticket ticketNumber='1267522' priority='Medium' status='Closed' subject='Overnight maintenance' assignee='Gustas Buivydas' customer="MOM'S WAFFLES" mid='0018675224' department='POS Support' />
                    <Ticket ticketNumber='1267522' priority='Medium' status='Closed' subject='Overnight maintenance' assignee='Gustas Buivydas' customer="MOM'S WAFFLES" mid='0018675224' department='POS Support' />
                    <Ticket ticketNumber='1267522' priority='Medium' status='Closed' subject='Overnight maintenance' assignee='Gustas Buivydas' customer="MOM'S WAFFLES" mid='0018675224' department='POS Support' />
                </tbody>
            </table>
        </div>
    );
}

export default AllTickets