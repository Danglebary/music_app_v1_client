import React, { ReactElement } from 'react';
import GenreCard from '../genre_card/GenreCard';

import './genreListStyles.css';

import {
    genre_list_item_1,
    genre_list_item_2,
    genre_list_item_3,
    genre_list_item_4,
    genre_list_item_5
} from '../../helper_functions/img_imports';

interface Props {}

export default function GenreList({}: Props): ReactElement {
    const genre_list: string[][] = [
        ['Hip-Hop', genre_list_item_1],
        ['Pop', genre_list_item_2],
        ['Rap', genre_list_item_3],
        ['R&B', genre_list_item_4],
        ['Trap', genre_list_item_2],
        ['Alternative', genre_list_item_5],
        ['Hip-Hop', genre_list_item_1],
        ['Pop', genre_list_item_2],
        ['Rap', genre_list_item_3],
        ['R&B', genre_list_item_4],
        ['Trap', genre_list_item_2],
        ['Alternative', genre_list_item_5],
        ['Hip-Hop', genre_list_item_1],
        ['Pop', genre_list_item_2],
        ['Rap', genre_list_item_3],
        ['R&B', genre_list_item_4],
        ['Trap', genre_list_item_2],
        ['Alternative', genre_list_item_5]
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
