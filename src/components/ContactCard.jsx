export default function ContactCard({
  contact,
  toggleFavorite,
  handleNextContact,
  handleDeleteContact,
}) {
  return (
    <div style={{ color: "blue", fontFamily: "Roboto" }}>
      {contact ? (
        <>
          <p>Contacto Nro: {contact?.id}</p>
          <h3 style={{ fontSize: "34px", fontWeight: "bold" }}>
            👤{contact?.fullname}
            <span>{contact?.isFavorite ? "⭐" : "☆"}</span>{" "}
          </h3>
          <p>📞 {contact?.phonenumber}</p>
          <p>✉️ {contact?.email}</p>
          <button onClick={() => toggleFavorite(contact.id)}>
            {contact?.isFavorite ? "Quitar Favorito" : "Agregar Favorito"}
          </button>
          <button onClick={() => handleNextContact(contact)}>Siguiente</button>
          <button
            onClick={() => handleDeleteContact(contact.id)}
            style={{ color: "red" }}
          >
            Eliminar Contacto
          </button>
        </>
      ) : (
        <p>No hay un contacto seleccionado</p>
      )}
    </div>
  );
}

//el ? junto a la propiedad permite que si contact es null o undefined, no se produzca un error al intentar acceder a sus propiedades
