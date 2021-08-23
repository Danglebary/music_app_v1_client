import { useState, useEffect } from 'react';

const useFetch = (query: string) => {
    const [status, setStatus] = useState('idle');
    const [data, setData]: any = useState([]);

    useEffect(() => {
        if (!query) return;

        const fetchData = async () => {
            setStatus('fetching');
            const response = await fetch(query);
            const data = await response.json();
            setData(data);
            setStatus('Fetched');
        };

        fetchData();
    }, [query]);

    return { status, data };
};

export default useFetch;
