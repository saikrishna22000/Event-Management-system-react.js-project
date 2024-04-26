import axios from 'axios';
import { useState, useEffect } from 'react';
import './Show1.css'; // Import CSS file

function Show1() {
    const [res, setRes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/eventlist')
            .then((response) => {
                console.log(response.data);
                setRes(response.data);
            })
            .catch(error => {
                console.error('Error fetching event list:', error);
            });
    }, []);

    return (
        <div className="table-container"> {/* Add a class to the containing div */}
            <h2>Event List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Event Name</th>
                        <th>Setting Capacity</th>
                        <th>Amount</th>
                        <th>Need Food</th>
                        <th>Need Transport</th>
                    </tr>
                </thead>
                <tbody>
                    {res.map((event, index) => (
                        <tr key={index}>
                            <td>{event.en}</td>
                            <td>{event.ca}</td>
                            <td>{event.am}</td>
                            <td>{event.ne ? 'Yes' : 'No'}</td>
                            <td>{event.nt ? 'Yes' : 'No'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Show1;
