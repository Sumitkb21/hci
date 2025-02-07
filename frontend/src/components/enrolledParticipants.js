import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CRCNavbar from './crcNavbar';
import "./enrolledParticipants.css";

export default function EnrolledParticipants() {
  const [participants, setParticipants] = useState([]);
  const [filteredParticipants, setFilteredParticipants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({ ageMin: '', ageMax: '', weightMin: '', weightMax: '', heartRateMin: '', heartRateMax: '' });
  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    const fetchParticipants = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/v1/getAllParticipants');
        if (response.data.success) {
          setParticipants(response.data.user);
          setFilteredParticipants(response.data.user);
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

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const applyFilters = () => {
    const filtered = participants.filter((participant) => {
      const age = new Date().getFullYear() - new Date(participant.dob).getFullYear();
      const weight = participant.weight;
      const heartRate = participant.heartRate;

      return (
        (filters.ageMin === '' || age >= parseInt(filters.ageMin)) &&
        (filters.ageMax === '' || age <= parseInt(filters.ageMax)) &&
        (filters.weightMin === '' || weight >= parseInt(filters.weightMin)) &&
        (filters.weightMax === '' || weight <= parseInt(filters.weightMax)) &&
        (filters.heartRateMin === '' || heartRate >= parseInt(filters.heartRateMin)) &&
        (filters.heartRateMax === '' || heartRate <= parseInt(filters.heartRateMax))
      );
    });

    setFilteredParticipants(filtered);
  };

  const saveFilteredParticipants = async () => {
    try {
      const payload = { participants: filteredParticipants, testDate: selectedDate };
      const response = await axios.post('http://localhost:4000/api/v1/addScheduled_List', payload);
      if (response.data.success) {
        alert('Filtered participants and test date saved successfully');
      } else {
        alert('Failed to save filtered participants and test date');
      }
    } catch (err) {
      console.error('Error saving filtered participants', err);
      alert('Error saving filtered participants');
    }
  };

  if (loading) return <p>Loading participants...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <CRCNavbar />
      <div className="filters">
        <input type="number" name="ageMin" placeholder="Min Age" onChange={handleFilterChange} />
        <input type="number" name="ageMax" placeholder="Max Age" onChange={handleFilterChange} />
        <input type="number" name="weightMin" placeholder="Min Weight (kg)" onChange={handleFilterChange} />
        <input type="number" name="weightMax" placeholder="Max Weight (kg)" onChange={handleFilterChange} />
        <input type="number" name="heartRateMin" placeholder="Min Heart Rate" onChange={handleFilterChange} />
        <input type="number" name="heartRateMax" placeholder="Max Heart Rate" onChange={handleFilterChange} />
        <button onClick={applyFilters}>Apply Filters</button> <br />
        <hr />
        <input type="date" name="testDate" onChange={handleDateChange} />
        <button onClick={saveFilteredParticipants}>Schedule Test for Participants</button>
      </div>

      <div className="participant-list">
        {filteredParticipants.map((participant) => (
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
            <button >Update</button>
          </div>
        ))}
      </div>
    </div>
  );
} 
