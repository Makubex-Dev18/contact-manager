export default function ContactCard({ contact, toggleFavorite }) {
  return (
    <div style={{ color: "blue", fontFamily: "Roboto" }}>
      <h3 style={{ fontSize: "24px", fontWeight: "bold" }}>
        {contact?.name}
        <span>{contact?.isFavorite ? "⭐" : "☆"}</span>{" "}
      </h3>
      <p>Telefono: {contact?.phone}</p>
      <button onClick={() => toggleFavorite(contact.id)}>
        {contact?.isFavorite ? "Quitar Favorito" : "Agregar Favorito"}
      </button>
    </div>
  );
}

//el ? junto a la propiedad permite que si contact es null o undefined, no se produzca un error al intentar acceder a sus propiedades
