import { useState } from "react";

const AddCourse = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    badge_text: '',
    badge_color: '#ff0000',
    instructor_name: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token"); 
    console.log(formData)
    try {
      const response = await fetch('https://react-interview.crd4lc.easypanel.host/api/course', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData),
      });
      const res =await response.json();

      if (response.ok) {
        console.log(res)
        alert('Course added successfully');
      } else {
        alert('Failed to add course');
      }
    } catch (error) {
      alert('Error adding course');
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2 className="formTitle">Add a New Course</h2>
        
        <div className="form-group">
          <label htmlFor="title">Course Title:</label>
          <input 
            type="text" 
            id="title"
            placeholder="Write course name" 
            name="title" 
            value={formData.title} 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="description">Course Description:</label>
          <textarea 
            id="description"
            placeholder="Write description" 
            name="description" 
            value={formData.description} 
            onChange={handleChange} 
            required 
            rows="5" 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="badge_text">Badge Text:</label>
          <input 
            type="text" 
            id="badge_text"
            placeholder="Badge Text" 
            name="badge_text" 
            value={formData.badge_text} 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="badge_color">Badge Color:</label>
          <div className="color-input-container">
            <input 
              type="color" 
              id="badge_color"
              name="badge_color" 
              value={formData.badge_color} 
              onChange={handleChange} 
            />

            <input
              type="text"
              id="badge_color_text"
              name="badge_color_text"
              value={formData.badge_color}
              onChange={handleChange}
              style={{ width: "60px", height: "10px" }}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="instructor_name">Instructor Name:</label>
          <input 
            type="text" 
            id="instructor_name"
            placeholder="Write instructor name" 
            name="instructor_name" 
            value={formData.instructor_name} 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <button type="submit">Add Course</button>
      </form>
    </div>
  );
};

export default AddCourse;
