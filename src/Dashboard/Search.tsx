import React from 'react';
    
const Search = ({setSearchTerm, searchTerm}) => {

    return(
        <div>
            <div>
                <input 
                    placeholder="Search..."
                    value = {searchTerm}
                    onChange = {(e)=> setSearchTerm(e.target.value)}
                />
            </div>
        </div>
    )
}

export default Search;