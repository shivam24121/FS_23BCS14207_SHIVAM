import React, { useState } from 'react';

const FormWithTable = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
  });
  const [entries, setEntries] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.course) {
      setEntries([...entries, formData]);

      setFormData({ name: '', email: '', course: '' });
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div>
      <h1>Enrollment Form</h1>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Course:</label>
          <input
            type="text"
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {/* Table to display entries */}
      <h2>Enrolled Students</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index}>
              <td>{entry.name}</td>
              <td>{entry.email}</td>
              <td>{entry.course}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FormWithTable;
