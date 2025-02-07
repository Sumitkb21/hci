import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CRCNavbar from './crcNavbar';
import "./showScheduled.css"


export default function ShowScheduledList() {
  const [scheduledList, setScheduledList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch scheduled list from backend
  useEffect(() => {
    const fetchScheduledList = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/v1/getScheduled_List');
        if (response.data.success) {
          setScheduledList(response.data.list);
        } else {
          setError('Failed to fetch scheduled list');
        }
      } catch (err) {
        console.error(err);
        setError('Error fetching scheduled list');
      } finally {
        setLoading(false);
      }
    };

    fetchScheduledList();
  }, []);

  // Remove participant from scheduled list
  const removeParticipant = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:4000/api/v1/removeParticipant/${id}`);
      if (response.data.success) {
        alert('Participant removed successfully');
        setScheduledList(scheduledList.filter((participant) => participant._id !== id));
      } else {
        alert('Failed to remove participant');
      }
    } catch (err) {
      console.error('Error removing participant:', err);
      alert('Error removing participant');
    }
  };

  if (loading) return <p>Loading scheduled list...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <CRCNavbar />
      <div className="scheduled-list">
        {scheduledList.length === 0 ? (
          <p>No scheduled participants found.</p>
        ) : (
          scheduledList.map((participant) => (
            <div key={participant._id} className="participant-box">
              <h3>{participant.fullName}</h3>
              <p><strong>DOB:</strong> {participant.dob}</p>
              <p><strong>Gender:</strong> {participant.gender}</p>
              <p><strong>Marital Status:</strong> {participant.maritalStatus}</p>
              <p><strong>Address:</strong> {participant.address}</p>
              <p><strong>Phone:</strong> {participant.phoneNumber}</p>
              <p><strong>Email:</strong> {participant.emailAddress}</p>
              <p><strong>Occupation:</strong> {participant.occupation}</p>
              <p><strong>Education Level:</strong> {participant.educationLevel}</p>
              <p><strong>Heart Rate:</strong> {participant.heartRate} bpm</p>
              <p><strong>Respiratory Rate:</strong> {participant.respiratoryRate} bpm</p>
              <p><strong>Oxygen Saturation:</strong> {participant.oxygenSaturation}%</p>
              <p><strong>Weight:</strong> {participant.weight} kg</p>
              <p><strong>Height:</strong> {participant.height} cm</p>
              <p><strong>ECG:</strong> {participant.ecg}</p>
              <p><strong>Urine Output:</strong> {participant.urineOutput} ml</p>
              <p><strong>Test Date:</strong> {participant.testDate}</p>
              <button onClick={() => removeParticipant(participant._id)}>Remove from Schedule</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
