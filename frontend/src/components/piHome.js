import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import CRCNavbar from './crcNavbar';
import './enrolledParticipants.css';
import PINavbar from './piNavbar';

export const PIHome = () => {
  const [participants, setParticipants] = useState([]);
  const [selectedParticipant, setSelectedParticipant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchParticipants = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/v1/getAllParticipants');
        if (response.data.success) {
          setParticipants(response.data.user);
          console.log("here");
          console.log(response.data.user);
        } else {
          setError('Failed to fetch participants');
        }
      } catch (err) {
        setError('Error fetching data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchParticipants();
  }, []);

  const handleParticipantChange = (e) => {
    const participantId = e.target.value;
    const participant = participants.find(p => p._id === participantId);
    setSelectedParticipant(participant);
  };

  if (loading) return <p>Loading participants...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <PINavbar/>
      <div className="participant-dashboard">
        <h1>Participant Details</h1>
        <select onChange={handleParticipantChange} defaultValue="">
          <option value="" disabled>Select a Participant</option>
          {participants.map(participant => (
            <option key={participant._id} value={participant._id}>{participant.fullName}</option>
          ))}
        </select>

        {selectedParticipant && (
          <div className="dashboard">
            <div className="dashboard-row">
              <div className="dashboard-item">
                <h3>Blood Cholesterol</h3>
                <p>{selectedParticipant.cholesterol} mg/dL</p>
              </div>
              <div className="dashboard-item">
                <h3>Body Temperature</h3>
                <p>{selectedParticipant.bodyTemperature} &#8451;</p>
              </div>
            </div>

            <div className="dashboard-row">
              <div className="dashboard-item">
                <h3>Heart Rate</h3>
                <p>{selectedParticipant.heartRate} bpm</p>
              </div>
              <div className="dashboard-item">
                <h3>Blood Glucose</h3>
                <p>{selectedParticipant.glucose} mg/dL</p>
              </div>
            </div>

            <div className="dashboard-row">
              <div className="dashboard-item">
                <h3>Blood Pressure (Systolic)</h3>
                <p>{selectedParticipant.bloodPressure} mmHg</p>
              </div>
              <div className="dashboard-item">
                <h3>Blood Pressure (Diastolic)</h3>
                <p>{selectedParticipant.bloodPressure} mmHg</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

