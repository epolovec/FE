import app from '../../firebase';
import React, {useState} from 'react';
import '../../App.css';
import './CreateTickets.css'
import SearchBar from '../SearchBar/SearchBar';
import TextBoxes from '../SearchBar/TextBoxes';
import Forms from '../SearchBar/Forms';
import { getDatabase, ref, set } from "firebase/database";

function CreateTicket() {

    const [name , setName] = useState();
    const [position , setPosition] = useState();
    const [email , setEmail] = useState();
    const [phoneNumber , setPhoneNumber] = useState();

    function writeTicket() {
        const db = getDatabase();
        set(ref(db, 'users/' ), {
          name: name,
          position: position,
          email: email,
          phoneNumber: phoneNumber,
        });
      }

    //funckija kuri atnaujina state pav
    return (
        <div class='CreateTickets'>
            <SearchBar placeholder="Enter customer search string" />
            <form onSubmit={writeTicket}>
            <TextBoxes onUpdate={writeTicket}/>
            <Forms />
            <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default CreateTicket