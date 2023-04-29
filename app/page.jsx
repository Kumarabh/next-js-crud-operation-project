'use client'

import { useEffect, useState } from "react";
import LoadingPage from './loading';
import CourseSearch from "./components/CourseSearch";
import Courses from "./components/Courses";

const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchCourses = async () => {
      const response = await fetch('/api/courses/');
      const responseJson = await response.json();
  
      setCourses(responseJson);
      setLoading(false);
    }

    fetchCourses();  
  }, [])

  if(loading) {
    return <LoadingPage />
  }

  return (
    <>
        <h2>Welcome to home page.</h2>
        <CourseSearch getSearchResults={(results) => {setCourses(results)}}/>
        <Courses courses={courses} />
    </>
  )
}

export default HomePage;