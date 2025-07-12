import ContactCard from "./ContactCard";

export default function ContactList({
  contactsToShow,
  handleSelectContact,
  selectedContact,
  onSelectContact,
}) {
  const estiloSection = {
    display: "flex",
    gap: 20,
    justifyContent: "center",
    border: "1px solid green",
    padding: "10px",
    marginLeft: "350px",
    marginRight: "350px",
    marginTop: 3,
    borderRadius: 8,
  };

  return (
    <div>
      <section style={estiloSection}>
        {contactsToShow.map((contact) => {
          const estiloBoton = {
            backgroundColor:
              selectedContact?.id === contact.id ? "#2f7cff" : "#3adabb",
            border: "none",
            padding: "10px 12px",
            color: "#fff",
            borderRadius: 8,
          };

          return (
            <div key={contact.id}>
              <button
                style={estiloBoton}
                onClick={() => onSelectContact(contact)}
              >
                Contact {contact.id}
              </button>
            </div>
          );
        })}
      </section>
    </div>
  );
}
