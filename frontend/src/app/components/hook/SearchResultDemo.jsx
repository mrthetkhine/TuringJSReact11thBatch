'use client';
import {Suspense, useDeferredValue, useState} from 'react';
import SearchResults from "@/app/components/hook/SearchResult";


export default function SearchResultDemo() {
    const [query, setQuery] = useState('');
    const deferredQuery = useDeferredValue(query);
    console.log('SearchResultDemo render query value ',query);
    console.log('SearchResultDemo render deferrey Query value ',deferredQuery);
    return (
        <>
            <label>
                Search albums:
                <input value={query} onChange={e => setQuery(e.target.value)} />
            </label>

            <Suspense fallback={<h2>Loading...</h2>}>
                <SearchResults query={deferredQuery} />
            </Suspense>
        </>
    );
}
