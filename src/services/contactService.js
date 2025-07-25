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
    // lógica para hacer el POST con los datos
    
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
    
  } catch (error) {
    console.error('❌ Error al actualizar contacto:', error);
    throw error;
  }
}