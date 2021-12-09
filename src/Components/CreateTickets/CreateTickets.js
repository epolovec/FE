import app from '../../firebase';
import { getDatabase, ref, set } from "firebase/database";
import React, {useState} from 'react';
import '../../App.css';
import './CreateTickets.css'
import SearchBar from '../SearchBar/SearchBar';
import TextBoxes from '../SearchBar/TextBoxes';
import Forms from '../SearchBar/Forms';

function CreateTicket() {
    const _ = require("lodash");

    const [data, setData] = useState({
      name: "",
      position: "",
      email: "",
      phoneNumber: "",
    })
    
    function writeTicket(){
        const db = getDatabase();
        set(ref(db, _.uniqueId('Ticket-')), {
          name: data.name,
          position: data.position,
          email: data.email,
          phoneNumber: data.phoneNumber,
        })
    }

    const handleInput = (e) => {
        setData({
          ...data,
          [e.target.name]: e.target.value,
        })
    }

    return (
        <div class='CreateTickets'>
            <SearchBar placeholder="Enter customer search string" />
            <TextBoxes onUpdate={handleInput} data={data}/>
            <Forms />
            <button onClick={e => writeTicket()}>Submit</button>
        </div>
    );
}

export default CreateTicket