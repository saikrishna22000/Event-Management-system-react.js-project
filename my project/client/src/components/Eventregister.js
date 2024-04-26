import React, { useState } from 'react';
import axios from 'axios';
import './EventRegister.css'; // Import CSS file for styling

const EventRegister = () => {
  const [eventName, setEventName] = useState('');
  const [capacity, setCapacity] = useState('');
  const [amount, setAmount] = useState('');
  const [needFood, setNeedFood] = useState(false);
  const [needTransport, setNeedTransport] = useState(false);
  const [needAccommodation, setNeedAccommodation] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
      
    axios.post('http://localhost:8081/insert1',{
        en: eventName,
        ca: capacity,
        am: amount,
        ne: needFood,
        nt: needTransport
    }).then((response)=>{
        console.log(response.data);
        setSuccessMessage('Event registered successfully!');
    }).catch(error => {
        console.error('Error registering event:', error);
        setSuccessMessage('Failed to register event. Please try again.');
    });
  };

  return (
    <div className="container">
      <h2 className="title">Event Registration</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="eventName">Event Name:</label>
          <input type="text" id="eventName" value={eventName} onChange={(e) => setEventName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="settingCapacity">Setting Capacity:</label>
          <input type="text" id="settingCapacity" value={capacity} onChange={(e) => setCapacity(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount for Event:</label>
          <input type="text" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>

        <div className="form-group">
          <input type="checkbox" checked={needFood} onChange={(e) => setNeedFood(e.target.checked)} />
          <label htmlFor="needFood">Need Food</label>
        </div>
        <div className="form-group">
          <input type="checkbox" checked={needTransport} onChange={(e) => setNeedTransport(e.target.checked)} />
          <label htmlFor="needTransport">Need Transport</label>
        </div>

        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>

      {successMessage && <div className="success-message">{successMessage}</div>}
    </div>
  );
};

export default EventRegister;
