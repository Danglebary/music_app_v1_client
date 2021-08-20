import React, { ReactElement } from 'react';

import './browseStyles.css';

interface Props {}

export default function Browse({}: Props): ReactElement {
    return (
        <div className="browse_page_container">
            <div className="browse_page_header_container">
                <h3 className="page_header_title">Browse</h3>
            </div>
        </div>
    );
}
