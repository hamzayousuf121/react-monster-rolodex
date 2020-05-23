import React from 'react'

function Search(props) {
    return (
        <div className="m-3">
            <input type="search" className="seachField" onChange={props.handlechange} placeholder={props.placeholder} />
        </div>
    )
}

export default Search;
