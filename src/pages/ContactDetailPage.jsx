import { useState, useEffect } from "react";
import { fetchContactById } from "../services/contactService";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar"

export default function ContactDetailPage() {

    const { id } = useParams(); // /contact/123 → id = "123"

    const [contact, setContact] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    async function loadContacts() {
        setIsLoading(true);
        setError(null);

        try {

            if (isNaN(id)) {
                throw new Error("ID debe ser numérico")
            }

            const findedContact = await fetchContactById(id);

            if (!findedContact) {
                throw new Error("Contacto no existe")
            }
            setContact(findedContact);

        } catch (error) {
            console.log(error);
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => { loadContacts(); }, []);

    if (error) {
        return (
            <main className="w-full h-[100vh] flex flex-col justify-center items-center">
                <p className="text-red-500">{error}</p>
            </main>
        )
    }


    return (
        <>
            <Navbar />
            <main className="w-full h-[100vh] flex flex-col justify-center items-center">
                {isLoading ? (
                    <p>Cargando...</p>
                ) : (
                    <section>
                        <h3 className="text-5xl">Contacto {id}</h3>
                        <div key={contact.id} className="p-4 border-2 rounded-lg mt-12">
                            <h4>👤 {contact.fullname}</h4>
                            <p>📞 {contact.phonenumber}</p>
                            {contact.email && <p>✉️ {contact.email}</p>}
                        </div>
                    </section>
                )}

            </main>
        </>
    )
}