import ContactCard from "./ContactCard";

export default function ContactList({ contact, toggleFavorite }) {
  return (
    <div>
      {/* <h2>Mis Lista de Contactos:</h2> */}
      <ContactCard contact={contact} toggleFavorite={toggleFavorite} />
    </div>
  );
}
