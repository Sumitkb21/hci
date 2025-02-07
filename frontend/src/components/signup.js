import React, { useState } from "react";
import "./signup.css";
import Navbar from "./navbar.js";
import { toast } from "react-toastify";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    gender: "",
    maritalStatus: "",
    address: "",
    phoneNumber: "",
    email: "",
    employmentStatus: "",
    occupation: "",
    educationLevel: "",
    heartRate: "",
    bloodPressure: "",
    respiratoryRate: "",
    bodyTemperature: "",
    oxygenSaturation: "",
    weight: "",
    height: "",
    ecg: "",
    bloodGlucose: "",
    urineOutput: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/participant/signup", // Update to your backend API
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      setFormData({
        fullName: "",
        dob: "",
        gender: "",
        maritalStatus: "",
        address: "",
        phoneNumber: "",
        email: "",
        employmentStatus: "",
        occupation: "",
        educationLevel: "",
        heartRate: "",
        bloodPressure: "",
        respiratoryRate: "",
        bodyTemperature: "",
        oxygenSaturation: "",
        weight: "",
        height: "",
        ecg: "",
        bloodGlucose: "",
        urineOutput: "",
      });
      
      toast.success(data.message, { duration: 1500 });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error.response) {
        const { data } = error.response;
        toast.error(data.message, { duration: 1500 });
      } else {
        toast.error("Something went wrong. Please try again.", { duration: 1500 });
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="signup-container">
        <h2>Participant Enrollment</h2>
        <form onSubmit={handleSubmit}>
          <h3>Demographic Data</h3>
          <label>Full Name:</label>
          <input
            type="text"
            name="fullName"
            onChange={handleChange}
            value={formData.fullName}
            required
          />

          <label>Date of Birth:</label>
          <input
            type="date"
            name="dob"
            onChange={handleChange}
            value={formData.dob}
            required
          />

          <label>Gender:</label>
          <select
            name="gender"
            onChange={handleChange}
            value={formData.gender}
            required
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Non-Binary">Non-Binary</option>
          </select>

          <label>Marital Status:</label>
          <select
            name="maritalStatus"
            onChange={handleChange}
            value={formData.maritalStatus}
            required
          >
            <option value="">Select</option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Divorced">Divorced</option>
            <option value="Widowed">Widowed</option>
            <option value="Other">Other</option>
          </select>

          <h3>Contact Information</h3>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            onChange={handleChange}
            value={formData.address}
            required
          />

          <label>Phone Number:</label>
          <input
            type="tel"
            name="phoneNumber"
            onChange={handleChange}
            value={formData.phoneNumber}
          />

          <label>Email Address:</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            required
          />

          <h3>Socioeconomic Data</h3>
          <label>Employment Status:</label>
          <select
            name="employmentStatus"
            onChange={handleChange}
            value={formData.employmentStatus}
          >
            <option value="">Select</option>
            <option value="Employed">Employed</option>
            <option value="Unemployed">Unemployed</option>
            <option value="Retired">Retired</option>
            <option value="Student">Student</option>
            <option value="Other">Other</option>
          </select>

          <label>Occupation:</label>
          <input
            type="text"
            name="occupation"
            onChange={handleChange}
            value={formData.occupation}
          />

          <label>Education Level:</label>
          <select
            name="educationLevel"
            onChange={handleChange}
            value={formData.educationLevel}
          >
            <option value="">Select</option>
            <option value="No Formal Education">No Formal Education</option>
            <option value="High School">High School</option>
            <option value="Bachelor’s Degree">Bachelor’s Degree</option>
            <option value="Master’s Degree">Master’s Degree</option>
            <option value="Doctorate">Doctorate</option>
            <option value="Other">Other</option>
          </select>

          <h3>Health Data</h3>
          <label>Heart Rate (bpm):</label>
          <input
            type="number"
            name="heartRate"
            onChange={handleChange}
            value={formData.heartRate}
          />

          <label>Blood Pressure:</label>
          <input
            type="text"
            name="bloodPressure"
            onChange={handleChange}
            value={formData.bloodPressure}
          />

          <label>Respiratory Rate:</label>
          <input
            type="number"
            name="respiratoryRate"
            onChange={handleChange}
            value={formData.respiratoryRate}
          />

          <label>Body Temperature (°F):</label>
          <input
            type="number"
            step="0.1"
            name="bodyTemperature"
            onChange={handleChange}
            value={formData.bodyTemperature}
          />

          <label>Oxygen Saturation (%):</label>
          <input
            type="number"
            name="oxygenSaturation"
            onChange={handleChange}
            value={formData.oxygenSaturation}
          />

          <label>Weight (kg):</label>
          <input
            type="number"
            step="0.1"
            name="weight"
            onChange={handleChange}
            value={formData.weight}
          />

          <label>Height (cm):</label>
          <input
            type="number"
            name="height"
            onChange={handleChange}
            value={formData.height}
          />

          <label>ECG (yes/no):</label>
          <select
            name="ecg"
            onChange={handleChange}
            value={formData.ecg}
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          <label>Blood Glucose (mg/dL):</label>
          <input
            type="number"
            name="bloodGlucose"
            onChange={handleChange}
            value={formData.bloodGlucose}
          />

          <label>Urine Output (mL/day):</label>
          <input
            type="number"
            name="urineOutput"
            onChange={handleChange}
            value={formData.urineOutput}
          />

          <button type="submit" disabled={loading}>
            {loading ? "Enrolling..." : "Enroll Participant"}
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
