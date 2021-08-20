import React, { ReactElement } from 'react';

import './libraryStyles.css';

interface Props {}

export default function Library({}: Props): ReactElement {
    return (
        <div className="library_page_container">
            <div className="page_header_container">
                <h3 className="page_header_title">Library</h3>
            </div>
            <div className="library_page_main_content_container">
                <div className="placeholder_text_container">
                    <h4>Add Music to Your Library</h4>
                    <p>
                        Browse millions of songs and collect your favorites
                        here.
                    </p>
                    <div className="browse_music_button">
                        Browse Apple Music
                    </div>
                </div>
            </div>
        </div>
    );
}
