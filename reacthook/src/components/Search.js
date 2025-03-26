import React, { useState, useEffect } from 'react';

const SearchFilter = ({ data }) => {
    const [query, setQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        const filtered = data.filter(item =>
            item.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredData(filtered);
    }, [data, query]);

    const handleInputChange = (event) => {
        const value = event.target.value;
        setQuery(value);
    };

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search..."
            />
            <ul>
                {filteredData.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default SearchFilter;