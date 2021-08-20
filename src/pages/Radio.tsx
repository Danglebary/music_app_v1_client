import React, { ReactElement } from 'react';

import './radioStyles.css';

interface Props {}

export default function Radio({}: Props): ReactElement {
    return (
        <div className="radio_page_container">
            <div className="page_header_container">
                <h3 className="page_header_title">Radio</h3>
            </div>
        </div>
    );
}
