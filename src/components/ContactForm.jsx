import React, { useState } from "react";
import { createContact } from "../services/contactService";

export default function ContactForm({ handleAddContact, onContactCreated }) {
  const estiloFormulario = {
    display: "flex",
    justifyContent: "center",
    margin: 3,
    gap: 2,
  };

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    type: "familia",
    //isFavorite: false
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState(null);

  function handleInputChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  const validate = () => {
    let newErrors = { name: "", phone: "", email: "" };
    let valid = true;

    if (!/^[a-zA-Z\s]+$/.test(formData.name.trim())) {
      newErrors.name = "El nombre solo debe contener letras";
      valid = false;
    }
    if (!/^\d+$/.test(formData.phone.trim())) {
      newErrors.phone = "El teléfono solo debe contener números";
      valid = false;
    }
    if (
      formData.email &&
      !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email.trim())
    ) {
      newErrors.email = "Email inválido";
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSaving(true);
    setError(null);

    if (!validate()) {
      setIsSaving(false);
      return;
    }

    try {
      const newContact = await createContact(formData);
      setFormData({ name: "", phone: "", email: "", isFavorite: false });
      setErrors({ name: "", phone: "", email: "" });
      onContactCreated?.(newContact);
      handleAddContact?.(formData);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <form className="border border-green-500 rounded-xl p-5 max-w-[400px] mx-auto my-5 bg-white shadow-md"
      onSubmit={handleSubmit}
      
    >
      <h3 style={estiloFormulario}>Agregar Nuevo Contacto</h3>
      <div style={estiloFormulario}>
        <label>Nombre:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Nombre completo"
          required
          disabled={isSaving}
          style={estiloFormulario}
        />
      </div>
      {errors.name && (
        <p style={{ color: "red", textAlign: "center" }}>{errors.name}</p>
      )}
      <div className="flex justify-center m-3 gap-2">
        <label>Teléfono:</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="Teléfono"
          required
          disabled={isSaving}
          style={estiloFormulario}
        />
      </div>
      {errors.phone && (
        <p style={{ color: "red", textAlign: "center" }}>{errors.phone}</p>
      )}
      <div className="flex justify-center m-3 gap-2">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Correo electrónico"
          disabled={isSaving}
          
        />
      </div>
      {errors.email && (
        <p style={{ color: "red", textAlign: "center" }}>{errors.email}</p>
      )}

      <div className="flex justify-center m-3 gap-2">
        <label>Tipo:</label>
        <select
          name="type"
          value={formData.type}
          onChange={handleInputChange}
          disabled={isSaving}
        >
          <option value="familia">Familia</option>
          <option value="social">Social</option>
        </select>
      </div>

      {/* <div style={estiloFormulario}>
        <label>
          <input
            type="checkbox"
            name="isFavorite"
            checked={formData.isFavorite}
            onChange={handleInputChange}
            disabled={isSaving}
          />
          Favorito
        </label>
      </div>*/}
      <div style={{ ...estiloFormulario, marginTop: 20 }}>
        <button type="submit" disabled={isSaving}>
          {isSaving ? "Guardando..." : "💾 Guardar Contacto"}
        </button>
        <button type="submit" disabled={true}>
          {isSaving ? "Guardando..." : "💾 Modificar Contacto"}
        </button>
      </div>
      
      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
    </form>
  );
}
