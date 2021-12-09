import React from "react";
import "./TextBoxes.css";
import TextField from "@mui/material/TextField";

function TextBoxes({ data, onUpdate }) {
  const { name, position, email, phoneNumber } = data;

  return (
    <div class="textBox">
      <button className="textInfo">Name</button>
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        name="name"
        value={name}
        onChange={onUpdate}
      />
      <button className="textInfo">Position</button>
      <TextField
        id="outlined-basic"
        label="Caller's position"
        variant="outlined"
        name="position"
        value={position}
        onChange={onUpdate}
      />
      <div>
        <button className="textInfo">Email</button>
        <TextField
          id="outlined-basic"
          label="Caller's Email"
          variant="outlined"
          name="email"
          value={email}
          onChange={onUpdate}
        />
        <button className="textInfo">
          Phone
        </button>
        <TextField
          id="outlined-basic"
          label="Phone number"
          variant="outlined"
          name="phoneNumber"
          value={phoneNumber}
          onChange={onUpdate}
        />
      </div>
      <div>
        <button className="textInfo">
          Type
        </button>
        <TextField id="outlined-basic" label="Phone type" variant="outlined" />
        <button className="textInfo">
          Timezone
        </button>
        <TextField id="outlined-basic" label="Time zone" variant="outlined" />
      </div>
    </div>
  );
}
export default TextBoxes;
