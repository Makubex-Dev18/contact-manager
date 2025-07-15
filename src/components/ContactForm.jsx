//Poner useState para usarse no viene en el snipperts por rfc por defecto
import React, { use, useState } from "react";

export default function ContactForm({ handleAddContact }) {
  const estiloFormulario = {
    display: "flex",
    justifyContent: "center",
    margin: 3,
    gap: 2,
  };

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
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

    // Validación simple
    let newErrors = { name: "", phone: "" };
    let valid = true;

    // Validar nombre (solo letras y espacios)
    if (!/^[a-zA-Z\s]+$/.test(formData.name.trim())) {
      newErrors.name = "El nombre solo debe contener letras";
      valid = false;
    }

    // Validar teléfono (solo números)
    if (!/^\d+$/.test(formData.phone.trim())) {
      newErrors.phone = "El teléfono solo debe contener números";
      valid = false;
    }

    setErrors(newErrors);

    if (!valid) return;

    handleAddContact({
      name: formData.name,
      phone: formData.phone,
      isFavorite: false,
    });

    // Limpiar el formulario
    setFormData({ name: "", phone: "" });
    setErrors({ name: "", phone: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "20px",
        maxWidth: "400px",
        margin: "20px auto",
        backgroundColor: "default",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        border: "1px solid green",
      }}
    >
      <h3 style={estiloFormulario}>Agregar Nuevo Contacto</h3>

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
      {errors.name && (
        <p style={{ color: "red", textAlign: "center" }}>{errors.name}</p>
      )}

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
      <div style={estiloFormulario}>
        <button type="submit">Agregar Contacto</button>
      </div>
      {errors.phone && (
        <p style={{ color: "red", textAlign: "center" }}>{errors.phone}</p>
      )}
    </form>
  );
}
