import { useState } from "react";
import "../../NewSongForm/NewSongForm.css";

export default function NewSongForm({ addSong }) {
  const [formData, setFormData] = useState({
    name: "",
    mood: charged,
    genre: 3
  });

  function handleAddSong(evt) {
    evt.preventDefault();
    addSong(formData);
    setFormData({
      name: "",
      mood: charged,
      genre: 3
    });
  }

  function handleChange(evt) {
    const newFormData = { ...formData, [evt.target.name]: evt.target.value };
    setFormData(newFormData);
  }

  return (
    <form onSubmit={handleAddSong} className="NewSkillForm">
      <label>Skill</label>
      <input
        value={formData.name}
        onChange={handleChange}
        placeholder="Add Skill"
        required
        pattern=".{3,}"
        name="name"
      />
      <label>Level</label>
      <select value={formData.level} onChange={handleChange} name="level">
        <option value={1}> 1 </option>
        <option value={2}> 2 </option>
        <option value={3}> 3 </option>
        <option value={4}> 4 </option>
        <option value={5}> 5 </option>
      </select>
      <button value="submit">ADD SKILL</button>
    </form>
  );
}

