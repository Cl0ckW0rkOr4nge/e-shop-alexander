import React from 'react'
import '../cart/styles/inputSearch.css'

const InputSearch = ({ inputText, setInputText }) => {

    const handleChange = e => {
        setInputText(e.target.value)
    }

    return (
        <div className="wrap">
            <div className="search">
                <input value={inputText} onChange={handleChange} type="text" className="searchTerm"
                    placeholder="Search what you looking for ?" />
                <button type="submit" class="searchButton">
                    <i className="fa fa-search"></i>
                </button>
            </div>
        </div>
    )
}

export default InputSearch
