import React, { ReactElement } from 'react';

import './searchBarStyles.css';

import {
    SearchButtonIcon,
    SearchMicIcon
} from '../../helper_functions/img_imports';

interface Props {}

export default function SearchBar({}: Props): ReactElement {
    return (
        <div className="search_container">
            <h1 className="search_bar_label">Search</h1>
            <div className="search_bar_container">
                <div className="search_bar_icon_containers">
                    <SearchButtonIcon
                        className="search_bar_icons"
                        viewBox="0 0 200 200"
                        preserveAspectRatio="xMidYMid meet"
                    />
                </div>
                <input
                    className="search_bar_input"
                    type="text"
                    placeholder="Artists, Songs, Lyrics, and More"
                />
                <div className="search_bar_icon_containers">
                    <SearchMicIcon
                        className="search_bar_icons"
                        viewBox="0 0 200 200"
                        preserveAspectRatio="xMidYMid meet"
                    />
                </div>
            </div>
        </div>
    );
}
