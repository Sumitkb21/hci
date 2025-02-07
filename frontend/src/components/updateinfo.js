import { useState } from "react";
import { Button, Input } from "@/components/ui/button";
import axios from "axios";

const UpdateParticipant = ({ participant, onUpdate }) => {
  const [formData, setFormData] = useState({ ...participant });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    setLoading(true);
    try {
      const response = await axios.put(`/api/participants/${participant.id}`, formData);
      onUpdate(response.data); // Callback to update parent state
      alert("Participant updated successfully!");
    } catch (error) {
      console.error("Error updating participant:", error);
      alert("Failed to update participant.");
    }
    setLoading(false);
  };

  return (
    <div className="p-4 border rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-xl font-bold mb-4">Update Participant</h2>
      <Input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        className="mb-2"
      />
      <Input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className="mb-2"
      />
      <Input
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone"
        className="mb-2"
      />
      <Button onClick={handleUpdate} disabled={loading} className="w-full">
        {loading ? "Updating..." : "Update"}
      </Button>
    </div>
  );
};

export default UpdateParticipant;
