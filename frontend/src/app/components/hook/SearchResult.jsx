import {use} from 'react';
import { fetchData } from './data.js';

export default function SearchResults({ query }) {
    console.log('SearchResults query', query);
    if (query === '') {
        return null;
    }
    const albums = use(fetchData(`/search?q=${query}`));
    if (albums.length === 0) {
        return <p>No matches for <i>"{query}"</i></p>;
    }
    return (
        <ul>
            {albums.map(album => (
                <li key={album.id}>
                    {album.title} ({album.year})
                </li>
            ))}
        </ul>
    );
}
