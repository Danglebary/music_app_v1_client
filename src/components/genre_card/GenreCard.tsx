import React, { ReactElement } from 'react';
import './genreCardStyles.css';

interface Props {
    title: string;
    image: string;
}

export default function GenreCard({ title, image }: Props): ReactElement {
    return (
        <div className="genre_card_container">
            <img
                className="genre_card_background"
                src={image}
                alt="genre card background"
            />
            <p className="genre_card_title">{title}</p>
        </div>
    );
}
