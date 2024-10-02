import { useState } from "react";

const ManualInput = ({ addMember }) => {
  const [formData, setFormData] = useState({
    sowoId: "",
    firstName: "",
    lastName: "",
    house: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Falls es sich um das Sowo-ID-Feld handelt, wird die Eingabe in eine Zahl umgewandelt
    setFormData({
      ...formData,
      [name]: name === "sowoId" ? Number(value) : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { sowoId, firstName, lastName, house } = formData;

    if (sowoId && firstName && lastName && house) {
      const newMember = {
        sowo_id: sowoId,
        firstName: firstName,
        lastName: lastName,
        house: house,
        timeOfArrival: new Date().toLocaleTimeString("de-DE", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      };
      addMember(newMember);
      setFormData({
        sowoId: "",
        firstName: "",
        lastName: "",
        house: "",
      });
    } else {
      alert("Bitte alle Felder ausfüllen");
    }
  };

  const inputFields = [
    {
      label: "Sowo ID",
      name: "sowoId",
      placeholder: "Sowo ID",
      type: "number",
    },
    { label: "Vorname", name: "firstName", placeholder: "Vorname" },
    { label: "Nachname", name: "lastName", placeholder: "Nachname" },
    { label: "Haus", name: "house", placeholder: "Haus" },
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col my-auto p-5 rounded-lg"
    >
      {inputFields.map(({ label, name, placeholder, type = "text" }) => (
        <div key={name} className="flex flex-col mb-3">
          <label className="text-white mb-2">{label}:</label>
          <input
            type={type}
            name={name}
            value={formData[name]}
            onChange={handleInputChange}
            className="p-2 rounded"
            placeholder={placeholder}
          />
        </div>
      ))}
      <button
        type="submit"
        className="bg-pink-700 hover:bg-pink-800 py-2 px-4 text-white rounded"
      >
        Mitglied hinzufügen
      </button>
    </form>
  );
};

export default ManualInput;
