import React, { useState, useEffect } from "react";
import { updateContact } from "../services/contactService";

export default function ContactEditForm({ contact, onContactUpdated, onCancel }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    type: "familia",
    company: "",
    birthday: "",
  });
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState(null);
  const [hasChanges, setHasChanges] = useState(false);

  // Cargar datos iniciales cuando cambia el contacto
  useEffect(() => {
    if (contact) {
      setFormData({
        name: contact.fullname || "",
        phone: contact.phonenumber || "",
        email: contact.email || "",
        type: contact.type || "familia",
        company: contact.company || "",
        birthday: contact.birthday || "",
      });
    }
  }, [contact]);

  // Detectar cambios
  useEffect(() => {
    if (!contact) return;
    setHasChanges(
      formData.name !== (contact.fullname || "") ||
      formData.phone !== (contact.phonenumber || "") ||
      formData.email !== (contact.email || "") ||
      formData.type !== (contact.type || "familia") ||
      formData.company !== (contact.company || "") ||
      formData.birthday !== (contact.birthday || "")
    );
  }, [formData, contact]);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function resetForm() {
    if (contact) {
      setFormData({
        name: contact.fullname || "",
        phone: contact.phonenumber || "",
        email: contact.email || "",
        type: contact.type || "familia",
        company: contact.company || "",
        birthday: contact.birthday || "",
      });
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSaving(true);
    setError(null);
    try {
      const updated = {
        fullname: formData.name,
        phonenumber: formData.phone,
        email: formData.email,
        type: formData.type,
        company: formData.company || null,
        birthday: formData.birthday || null,
      };
      const updatedContact = await updateContact(contact.id, updated);
      onContactUpdated?.(updatedContact);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "20px",
        maxWidth: "400px",
        margin: "20px auto",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      }}
    >
      <h3>Editar Contacto</h3>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          disabled={isSaving}
        />
      </div>
      <div>
        <label>Teléfono:</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          required
          disabled={isSaving}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          disabled={isSaving}
        />
      </div>
      <div>
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
      <div>
        <label>Empresa:</label>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleInputChange}
          disabled={isSaving}
        />
      </div>
      <div>
        <label>Cumpleaños:</label>
        <input
          type="date"
          name="birthday"
          value={formData.birthday}
          onChange={handleInputChange}
          disabled={isSaving}
        />
      </div>
      <div style={{ marginTop: 20 }}>
        <button type="submit" disabled={isSaving || !hasChanges}>
          {isSaving ? "Guardando..." : "💾 Guardar Cambios"}
        </button>
        <button type="button" onClick={resetForm} disabled={isSaving} style={{ marginLeft: 10 }}>
          Restaurar
        </button>
        <button type="button" onClick={onCancel} disabled={isSaving} style={{ marginLeft: 10 }}>
          Cancelar
        </button>
      </div>
      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
    </form>
  );
}