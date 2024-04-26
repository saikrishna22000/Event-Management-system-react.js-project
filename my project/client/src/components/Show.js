import axios from 'axios';
import { useState, useEffect } from 'react';

function Show() {
  const [res, setRes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081/showall')
      .then((response) => {
        console.log(response.data);
        setRes(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Define a function to map role numbers to role names
  const mapRoleName = (roleNumber) => {
    switch (roleNumber) {
      case 1:
        return 'Admin';
      case 2:
        return 'Counselor';
      case 3:
        return 'Visitor';
      default:
        // Return the original role number if not mapped
        return roleNumber;
    }
  };

  // Create a new array with modified role names
  const updatedRes = res.map(item => ({
    ...item,
    role: mapRoleName(item.role)
  }));

  // Render the table with the updated data
  return (
    <div>
      <h1>Table of Data</h1>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr style={{ border: '1px solid black' }}>
            <th style={{ border: '1px solid black', padding: '8px' }}>email</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Name</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>password</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>role</th>
          </tr>
        </thead>
        <tbody>
          {updatedRes.map((item) => (
            <tr key={item.id} style={{ border: '1px solid black' }}>
              <td style={{ border: '1px solid black', padding: '8px' }}>{item.email}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{item.name}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{item.password}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{item.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Show;
