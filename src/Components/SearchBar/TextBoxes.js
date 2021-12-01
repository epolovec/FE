import React from 'react';
import './TextBoxes.css';
import TextField from '@mui/material/TextField';
function TextBoxes() {
    return (
        <div class='textBox'>
<TextField id="outlined-basic" label="Name" variant="outlined" />
<TextField id="outlined-basic" label="Caller's position" variant="outlined" />
<div>
<TextField id="outlined-basic" label="Caller's Email" variant="outlined" />
<TextField id="outlined-basic" label="Phone number" variant="outlined" />
</div>
<div>
<TextField id="outlined-basic" label="Phone type" variant="outlined" />
<TextField id="outlined-basic" label="Time zone" variant="outlined" />
</div>

        </div>
    );
}
export default TextBoxes;