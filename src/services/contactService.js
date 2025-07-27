const API_URL = import.meta.env.VITE_API_URL;

// GET - Obtener todos los contactos
export async function fetchContacts() {
    try {
        console.log('🌐 Cargando contactos...');
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
            const text = await response.text();
            throw new Error("La respuesta no es JSON. Recibido: " + text.slice(0, 100));
        }

        const contacts = await response.json();
        console.log('✅ Contactos cargados:', contacts.length);
        return contacts;

    } catch (error) {
        console.error('❌ Error al cargar contactos:', error);
        throw error;
    }
}

// GET - Obtener todos los contactos
export async function fetchContactById(id) {
    try {
        console.log('🌐 Cargando contacto ' + id);
        const response = await fetch(API_URL + '/' + id);

        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const contact = await response.json();
        return contact;

    } catch (error) {
        console.error('❌ Error al cargar contacto:', error);
        throw error;
    }
}

// POST - Crear nuevo contacto
export async function createContact(contactData) {
    try {
        console.log('🌐 Creando contacto...');
        // lógica para hacer el POST con los datos
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(contactData),
        });

        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        console.log("Conctacto creado!!! ");

        return await response.json();

    } catch (error) {
        console.error('❌ Error al crear contacto:', error);
        throw error;
    }
}

export async function updateContact(id, contactData) {
    
}
