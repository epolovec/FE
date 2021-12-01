import React, { useState} from 'react';
import './SearchBar.css'


function SearchBar({placeholder, data}) {
    const [filteredData, setFilteredData] = useState([]);

    const handleFilter = (event) => {
        const searchWord = event.target.value
        const newFilter = data.filter((value) => {
            return value.title.includes(searchWord)
        });
        setFilteredData(newFilter);
    }
    return (
        <div class='search'>
            <div className="searchInputs">
                
                <input type="text" placeholder={placeholder} onChange={handleFilter}/>
                <div className='searchIcon'><button type="submit" className='searchbutton'>Search</button>
                </div>
                </div>
                {filteredData.length !== 0 && (
                <div className="dataResult">
                    {filteredData.map((value,key)=> {
                        return (
                            <a className='dataItem' href={value.link} target='_blank' rel="noreferrer">
                                <p>{value.title}</p>
                            </a>
                        );
                    })}
                    
                </div>
                
                )}
              
        </div>
        
    );
}

export default SearchBar