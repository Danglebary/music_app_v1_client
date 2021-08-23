import { ReactElement, useEffect, useState } from 'react';
import GenreCard from '../genre_card/GenreCard';

import './genreListStyles.css';

import {
    genre_list_item_1,
    genre_list_item_2,
    genre_list_item_3,
    genre_list_item_4,
    genre_list_item_5
} from '../../helper_functions/img_imports';

import useFetch from '../../hooks/useFetch';

interface Props {}

export default function GenreList({}: Props): ReactElement {
    const genre_bg_imgs = [
        genre_list_item_1,
        genre_list_item_2,
        genre_list_item_3,
        genre_list_item_4,
        genre_list_item_5
    ];

    const { status, data } = useFetch('genres');

    const genresList: [] = data?.genres;

    return (
        <div className="genre_list_container">
            <h3 className="genre_list_categories_label">Browse Categories</h3>
            <div className="genre_list_items_container">
                {genresList !== null && genresList !== undefined
                    ? genresList.map((genre, i) => {
                          return (
                              <div className="genre_list_item" key={i}>
                                  <GenreCard
                                      title={genre}
                                      image={
                                          genre_bg_imgs[
                                              Math.floor(
                                                  Math.random() *
                                                      genre_bg_imgs.length
                                              )
                                          ]
                                      }
                                  />
                              </div>
                          );
                      })
                    : null}
            </div>
            <div className="genre_list_empty"></div>
        </div>
    );
}
