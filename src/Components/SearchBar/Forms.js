import React from 'react';
import './Forms.css';

function Forms() {
    return (
    <div> <form class="form">
        <div>         
        <textarea disabled  class="inputSoftwareVersion1 text">Software version</textarea>
        <textarea  class="inputSoftwareVersion" /> 
        </div>
        <textarea disabled  class="input-field1 text">Solution description </textarea>
        <textarea  class="input-field" />
        <div>         
        <textarea disabled  class="inputSoftwareVersion1 text">Problem Started</textarea>
        <textarea  class="inputSoftwareVersion" /> 
        </div>
    </form>

    </div>

    );
}
export default Forms;