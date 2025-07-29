const API_URL = import.meta.env.VITE_API_URL;

// GET - Obtener todos los contactos
export async function fetchContacts() {
  try {
    console.log('🌐 Cargando contactos...');
    const response = await fetch(API_URL);
    
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
    
    const contacts = await response.json();
    console.log('✅ Contactos cargados:', contacts.length);
    return contacts;
    
  } catch (error) {
    console.error('❌ Error al cargar contactos:', error);
    throw error;
  }
}

// POST - Crear nuevo contacto
export async function createContact(contactData) {
  try {
    console.log('🌐 Creando contacto...');
     // Transformar los datos al formato esperado por el backend
    const payload = {
        fullname: contactData.name,
        phonenumber: contactData.phone,
        email: contactData.email,
        type: contactData.type,//contactData.type ?? null,
        company: contactData.company ?? null,
        birthday: contactData.birthday ?? null,
     // isFavorite: contactData.isFavorite ?? false,
    };
console.log('Payload enviado al backend:', payload); // <-- Aquí el log

    //logica para hacer el POST con los datos
  const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const newContact = await response.json();
    console.log('✅ Contacto creado:', newContact);
    return newContact;
  } catch (error) {
    console.error('❌ Error al crear contacto:', error);
    throw error;
  }
}

// PUT - Actualizar contacto
export async function updateContact(id, contactData) {
  try {
    console.log('🌐 Actualizando contacto...');
    // lógica para hacer el PUT con los datos
    const payload = {
      fullname: contactData.name,
      phonenumber: contactData.phone,
      email: contactData.email,
      type: contactData.type, //contactData.type ?? null,
      company: contactData.company ?? null,
      birthday: contactData.birthday ?? null,
      // isFavorite: contactData.isFavorite ?? false,
    };

    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const updatedContact = await response.json();
    console.log('✅ Contacto actualizado:', updatedContact);
    return updatedContact;
    
  } catch (error) {
    console.error('❌ Error al actualizar contacto:', error);
    throw error;
  }
}