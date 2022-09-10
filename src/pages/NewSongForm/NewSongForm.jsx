import { useState } from "react";
//import "../../NewSongForm/NewSongForm.css";

export default function NewSongForm({ addSong }) {
  const [formData, setFormData] = useState({
    name: "",
    mood: "charged",
    genre: "rock"
  });

  function handleAddSong(evt) {
    evt.preventDefault();
    addSong(formData);
    setFormData({
      name: "",
      mood: "charged",
      genre: "rock"
    });
  }

  function handleChange(evt) {
    const newFormData = { ...formData, [evt.target.name]: evt.target.value };
    setFormData(newFormData);
  }

  return (
    <form onSubmit={handleAddSong} className="NewSongForm">
      <label>song name and artist</label>
      <input
        value={formData.name}
        onChange={handleChange}
        placeholder="name - artist"
        name="name"
      />
      <label>mood</label>
      <select value={formData.mood} onChange={handleChange} name="mood">
        <option value={1}> charged </option>
        <option value={2}> romantic </option>
        <option value={3}> playful </option>
        <option value={4}> calm </option>
        <option value={5}> high </option>
        <option value={6}> pensive </option>
        <option value={7}> sleepy </option>
        <option value={8}> hostile </option>
        <option value={9}> melancholic </option>
        <option value={10}> positive </option>
      </select>
      <label>genre</label>
      <select value={formData.genre} onChange={handleChange} name="genre">
        <option value={1}> rock </option>
        <option value={2}> pop </option>
        <option value={3}> hip-hop </option>
        <option value={4}> rnb </option>
        <option value={5}> country </option>
      </select>
      <button value="submit">add song</button>
    </form>
  );
}
