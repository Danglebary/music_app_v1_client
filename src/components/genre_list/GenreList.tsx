import React, { ReactElement } from 'react';
import GenreCard from '../genre_card/GenreCard';

import './genreListStyles.css';

import {
    pic_1,
    pic_2,
    pic_3,
    pic_4,
    pic_5
} from '../../helper_functions/img_imports';

interface Props {}

export default function GenreList({}: Props): ReactElement {
    const genre_list: string[][] = [
        ['Hip-Hop', pic_1],
        ['Pop', pic_2],
        ['Rap', pic_3],
        ['R&B', pic_4],
        ['Trap', pic_2],
        ['Alternative', pic_5],
        ['Hip-Hop', pic_1],
        ['Pop', pic_2],
        ['Rap', pic_3],
        ['R&B', pic_4],
        ['Trap', pic_2],
        ['Alternative', pic_5],
        ['Hip-Hop', pic_1],
        ['Pop', pic_2],
        ['Rap', pic_3],
        ['R&B', pic_4],
        ['Trap', pic_2],
        ['Alternative', pic_5]
    ];

    return (
        <div className="genre_list_container">
            <h3 className="genre_list_categories_label">Browse Categories</h3>
            <div className="genre_list_items_container">
                {genre_list.map((genre, i) => {
                    return (
                        <div className="genre_list_item" key={i}>
                            <GenreCard title={genre[0]} image={genre[1]} />
                        </div>
                    );
                })}
            </div>
            <div className="genre_list_empty"></div>
        </div>
    );
}
