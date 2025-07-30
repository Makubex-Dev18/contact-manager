import ContactCard from "./ContactCard";
import  { useEffect, useState } from "react";
import {fetchContacts} from "../services/contactService";

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


export default function ContactList({
  contactsToShow,
  handleSelectContact,
  selectedContact,
  onSelectContact,
  onContactSelect
}) {
  
    const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  
  async function loadContacts() {
    setIsLoading(true);
    setError(null);
    
    try {
      const contacts = await fetchContacts();
      setContacts(contacts);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {   loadContacts(); }, []);



  
  return (
    
    <div>
       <div>
        <h3>📞 Agenda de Contactos</h3>
        <button onClick={loadContacts} disabled={isLoading}>
          {isLoading ? 'Cargando...' : '🔄 Cargar'}
        </button>
      </div>

      {isLoading && <p>🔄 Cargando contactos...</p>}
      
      {error && (
        <>
          <p>❌ Error: {error}</p>
          <button onClick={loadContacts}>🔄 Reintentar</button>
        </>
      )}

      <section className="mt-1 border border-green-500 rounded-xl p-2 max-w-[200px] mx-auto my-3 bg-white shadow-md text-center flex flex-col items-center gap-4">
        {contacts.map((contact) => {
          const estiloBoton = {
            backgroundColor:
              selectedContact?.id === contact.id ? "#2f7cff" : "#3adabb",
            border: "none",
            padding: "10px 12px",
            color: "#fff",
            borderRadius: 8,
            marginTop: 10,
            marginBottom: 10,
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
