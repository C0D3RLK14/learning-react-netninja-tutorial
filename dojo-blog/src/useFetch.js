// A reusable custom hook for fetching data

import { useState, useEffect } from 'react';

// NOTE: When creating a custom hook the hook's name should start with 'use' unless won't work
// getting the endpoint url as a parameter insted of hard coding
const useFetch = (url) => {
    // const [blogs, setBlogs] = useState(null);
    // Changing the 'blogs' var name to 'data' to increase reusability
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true); 
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
            .then(res => {
                if(!res.ok){
                    throw Error('Could not fetch data for that resource.');
                }

                return res.json();
            }) // NOTE: 'data' below and 'data' above mentioned are not the same
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                setError(err.message);
                setIsPending(false);
            });
        }, 1000);
        // adding 'url' to the dependency array so that it watches for changes of 'url'. And rerun accordingly.
    }, [url]);

    // returning the values
    return { data, isPending, error };

};

export default useEffect;