import React, {useState} from 'react'
import app from '../../firebase';
import { getDatabase, ref, set } from "firebase/database";


function TestForm() {
    const [name , setName] = useState();
    const [age , setAge] = useState();
        
    // Push Function
    // const Push = () => {
    //   app.ref("user").set({
    //     name : name,
    //     age : age,
    //   }).catch(alert);
    // }

    function writeUserData() {
        const db = getDatabase();
        set(ref(db, 'users/' ), {
          name: name,
          age: age,
        });
      }
    
    return (
      <div className="App">
        <form onSubmit={writeUserData}>
        <input placeholder="Enter your name" value={name} 
        onChange={(e) => setName(e.target.value)}/>
        <br/><br/>
        <input placeholder="Enter your age" value={age} 
        onChange={(e) => setAge(e.target.value)}/>
        <br/><br/> 
        <button type='submit'>PUSH</button>
        </form>
      </div>
    );
  }

export default TestForm
