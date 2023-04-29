'use client'
import { useState } from "react";

const CourseSearch = ({getSearchResults}) => {

    const [query, setQuery] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        const response = await fetch(`/api/courses/search?query=${query}`);
        const courses = await response.json();
        getSearchResults(courses);

       
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="" id="" value={query}
                    onChange={(event) => setQuery(event.target.value)} />
                <button type="submit">Submit</button>
            </form>

        </>
  )
}

export default CourseSearch