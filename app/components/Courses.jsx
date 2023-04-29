import Link from "next/link";

// const fetchCourses = async () => {
//     const url = `http://localhost:3000/api/courses`
//     const response = await fetch(url, { next: { revalidate: 60 } });
//     return await response.json();
// }

const Courses = ({courses}) => {

    // const courses = await fetchCourses();

    return (
        <>
            <div className="card-container">
                {
                    courses.map((course, index) => {
                        return (
                            <div key={course.id} className="card">
                                <div className="card-header">
                                    {course.title}
                                </div>
                                <div className="card-body">
                                    {course.description}
                                </div>
                                <div className="card-footer">
                                    <Link href={course.link}>Go to courses</Link>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        </>
    )
}

export default Courses
