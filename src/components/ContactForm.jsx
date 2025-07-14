//Poner useState para usarse no viene en el snipperts por rfc por defecto
import React, { useState } from "react";

export default function ContactForm({ handleAddContact }) {
  const estiloFormulario = {
    display: "flex",
    margin: 2,

    gap: 2,
  };

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const handleChangeName = (event) => {
    setFormData({ ...formData, name: event.target.value });
  };

  const handleChangePhone = (event) => {
    setFormData({ ...formData, phone: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); //evita que se recarge la pagina

    handleAddContact({
      name: formData.name,
      phone: formData.phone,
      isFavorite: false
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ estiloFormulario }}>
      <h3>Agregar Nuevo Contacto</h3>

      {/* Input de nombre controlado */}
      <div style={estiloFormulario}>
        <label>Nombre:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChangeName}
          style={estiloFormulario}
        />
      </div>

      {/* Input de teléfono controlado */}
      <div style={estiloFormulario}>
        <label>Teléfono:</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChangePhone}
          style={estiloFormulario}
        />
      </div>

      <button type="submit">Agregar Contacto</button>
    </form>
  );
}
