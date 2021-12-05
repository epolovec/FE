import React from 'react';
import './TextBoxes.css';
import TextField from '@mui/material/TextField';
function TextBoxes() {
    return (
        <div class='textBox'>
            <button type="submit" className="textInfo">Name</button>
<TextField id="outlined-basic" label="Name" variant="outlined" />
<button type="submit" className="textInfo">Position</button>
<TextField id="outlined-basic" label="Caller's position" variant="outlined" />
<div>
<button type="submit" className="textInfo">Email</button>
<TextField id="outlined-basic" label="Caller's Email" variant="outlined" />
<button type="submit" className="textInfo">Phone</button>
<TextField id="outlined-basic" label="Phone number" variant="outlined" />
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