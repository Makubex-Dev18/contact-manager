export default function ContactCard({
  contact,
  toggleFavorite,
  handleNextContact,
}) {
  return (
    <div style={{ color: "blue", fontFamily: "Roboto" }}>
      {contact ? (
        <>
          <h3 style={{ fontSize: "34px", fontWeight: "bold" }}>
            {contact?.name}
            <span>{contact?.isFavorite ? "⭐" : "☆"}</span>{" "}
          </h3>
          <p>Telefono: {contact?.phone}</p>
          <button onClick={() => toggleFavorite(contact.id)}>
            {contact?.isFavorite ? "Quitar Favorito" : "Agregar Favorito"}
          </button>
          <button onClick={() => handleNextContact(contact)}>Siguiente</button>
        </>
      ) : (
        <p>No hay un contacto seleccionado</p>
      )}
    </div>
  );
}

//el ? junto a la propiedad permite que si contact es null o undefined, no se produzca un error al intentar acceder a sus propiedades
