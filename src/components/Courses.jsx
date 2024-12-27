import { useEffect, useState } from "react";

const Courses = () => {
    const [courses,setCourses] = useState([]);
    const token = localStorage.getItem('token')
    useEffect(()=>{
        fetch('https://react-interview.crd4lc.easypanel.host/api/course',{
            headers:{
                'Authorization':`Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(data => {setCourses(data.data.data)
            console.log(courses)})
        
    },[])
    return (
        <div className="grid-container">
        {courses.map((item) => (
            <div key={item.id} className="card">
                <img src={item.image} alt={item.title} className="card-img" />
                <div className="card-content">
                    <span
                        className="badge"
                        style={{ backgroundColor: item.badge_color }}
                    >
                        {item.badge_text}
                    </span>
                    <h2 className="title">{item.title}</h2>
                    <p className="description">{item.description}</p>
                    <div className="instructor">Instructor: {item.instructor_name}</div>
                </div>
            </div>
        ))}
    </div>
    );
};

export default Courses;