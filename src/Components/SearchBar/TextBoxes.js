import React, {useState} from 'react';
import './TextBoxes.css';
import TextField from '@mui/material/TextField';
import CreateTicket from '../CreateTickets/CreateTickets';

function TextBoxes({onUpdate}) {

    // const handleInput {
    //     onUpdate();
    // }

    return (
        <div class='textBox'>
            <button type="submit" className="textInfo">Name</button>
<TextField id="outlined-basic" label="Name" variant="outlined" value={name} 
        onChange={(e) => setName(e.target.value)}/>
<button type="submit" className="textInfo" >Position</button>
<TextField id="outlined-basic" label="Caller's position" variant="outlined" value={position} 
        onChange={(e) => setPosition(e.target.value)}/>
<div>
<button type="submit" className="textInfo">Email</button>
<TextField id="outlined-basic" label="Caller's Email" variant="outlined" value={email} 
        onChange={(e) => setEmail(e.target.value)}/>
<button type="submit" className="textInfo">Phone</button>
<TextField id="outlined-basic" label="Phone number" variant="outlined" value={phoneNumber} 
        onChange={(e) => setPhoneNumber(e.target.value)}/>
</div>
<div>
<button type="submit" className="textInfo">Type</button>
<TextField id="outlined-basic" label="Phone type" variant="outlined" />
<button type="submit" className="textInfo">Timezone</button>
<TextField id="outlined-basic" label="Time zone" variant="outlined" />
</div>

        </div>
    );
}
export default TextBoxes;