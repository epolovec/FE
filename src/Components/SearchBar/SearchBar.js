import '../../App.css';
import JSONDATA from './Data.json';
import {useState} from 'react';
import './SearchBar.css'
function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('')
    return (
        <div class='search'><div class='searchInputs'>
            <input type="text" placeholder="Search..." onChange={event => {setSearchTerm(event.target.value)}}/>
            <div className='searchIcon'><button type="submit" className='searchbutton'>Search</button>
                </div></div>
            
            {JSONDATA.filter((val)=> {
                if(searchTerm === ""){
                }else if (val.MID.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val
                }
            }).map((val,key)=>{
        return <div className="user" key={key}> <p className="dropDown">{val.MID}</p> </div>
      })}
        </div>
    )
}
export default SearchBar;