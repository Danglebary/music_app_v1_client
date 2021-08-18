import React, { ReactElement } from 'react';

import './searchBarStyles.css';

interface Props {}

export default function SearchBar({}: Props): ReactElement {
    return (
        <div className="search_container">
            <h1 className="search_bar_label">Search</h1>
            <div className="search_bar_container">
                <div className="search_bar_icon">🔍</div>
                <input
                    className="search_bar_input"
                    type="text"
                    placeholder="Artists, Songs, Lyrics, and More"
                />
            </div>
        </div>
    );
}
