import { ReactElement } from 'react'
import GenreList from '../components/genre_list/GenreList';
import SearchBar from '../components/search_bar/SearchBar';

import './searchStyles.css'

interface Props {
    
}

export default function Search({}: Props): ReactElement {

    return (
        <div className="search_page_container">
            <SearchBar />
            <GenreList />
        </div>
    )
}
