import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch, isLoading }) => {
    const [city, setCity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (city.trim()) {
            onSearch(city);
        }
    };

    return (
        <div className="search-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter city name..."
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="search-input"
                    disabled={isLoading}
                />
                <button
                    type="submit"
                    className="search-button"
                    disabled={isLoading || !city.trim()}
                >
                    {isLoading ? 'Searching...' : 'Search'}
                </button>
            </form>
        </div>
    );
};

export default SearchBar;