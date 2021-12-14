function Ticket(props) {
    return (
                <tr>
                    <td>{props.ticketNumber}</td>
                    <td>{props.priority}</td>
                    <td>{props.status}</td>
                    <td>{props.subject}</td>
                    <td>{props.assignee}</td>
                    <td>{props.customer}</td>
                    <td>{props.mid}</td>
                    <td>{props.department}</td>
                </tr>
    );
}

export default Ticket