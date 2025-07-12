//paso1 para importar el hook de react para usar state
import { useState } from "react";

import Header from "./components/Header.jsx";
import ContactList from "./components/ContactList.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  //paso2 para crear el state de selectedContact
  const [selectedContact, setSelectedContact] = useState(
    null
    /*id: 1,
    name: "John Doe",
    phone: "123-456-7890",
    isFavorite: true,*/
  );

  const [showOnlyFavorites,setShowOnlyFavorites]= useState(false);



  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "Juan Perez",
      phone: "155-354-5590",
      isFavorite: true,
    },
    {
      id: 2,
      name: "Pepe Reyes",
      phone: "987-654-3210",
      isFavorite: false,
    },
    {
      id: 3,
      name: "Alice Johnson",
      phone: "555-555-5555",
      isFavorite: true,
    },
  ]);

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

  const estiloBoton = {
    backgroundColor: "#2f7cff",
    border: "none",
    padding: "10px 12px",
    color: "#fff",
    borderRadius: 8,
  };

  const estiloMostrarFav ={
    marginTop:40,
    marginBottom:40,
  };







  //mejor forma  de crear una funcion y usar handle ese nombre es recomedado para funciones que manejan eventos y cambien estados
  //handleSelectContact es una funcion que recibe un contacto y lo setea como el contacto seleccionado
  //la funcion setSelectedContact es la que actualiza el estado de selectedContact
  const handleSelectContact = (contact) => {
    console.log({ contact });
    setSelectedContact(contact);
  };


  let contactsToShow = contacts;
  if(showOnlyFavorites){
    contactsToShow=contacts.filter((contact)=>contact.isFavorite);
  }


  const handleChangeFavorite = (event) => {
    console.log(event);
    setShowOnlyFavorites(event.target.checked)
  }

  const toggleFavorite = (id) => {
    const updatedContacts = contacts.map((contact) => {
      return {
        id: contact.id,
        name: contact.name,
        phone: contact.phone,
        isFavorite:
          contact.id === id ? !contact.isFavorite : contact.isFavorite,
      };
    });

    if (selectedContact.id === id) {
      setSelectedContact({
        id: selectedContact.id,
        name: selectedContact.name,
        phone: selectedContact.phone,
        isFavorite: !selectedContact.isFavorite,
      });
    }
    setContacts(updatedContacts);
    console.log(updatedContacts);
  };

  //los estados estan siempre antes de la funcion return

  // const valorQueNoCambia = "Enter Tech School";

  // <p>{JSON.stringify(selectedContact)}</p>

  return (
    <div>
      <Header />
      <main>
        <section style={estiloMostrarFav}>
          <label htmlFor="">
          <h3>Filtros</h3>
          <input type="checkbox"  onClick={handleChangeFavorite} />  Mostrar Favoritos
          </label>
        </section>

        <section style={estiloSection}>
          {contactsToShow.map((contact) => (
            <div key={contact.id}>
              {/*  <h3>{contact.name}</h3> }
          {    <p>{contact.phone}</p> */}
              <button
                style={estiloBoton}
                onClick={() => handleSelectContact(contact)}
              >
                Contact {contact.id}
              </button>
            </div>
          ))}
        </section>
        <section style={estiloSection}>
          {selectedContact ? (
            <ContactList
              contact={selectedContact}
              toggleFavorite={toggleFavorite}
            />
          ) : null}
        </section>
      </main>
      <section style={estiloSection}>
        <Footer />
      </section>
    </div>
  );
}
