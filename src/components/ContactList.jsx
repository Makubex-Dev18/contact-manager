import { useState, useEffect } from "react";
import { fetchContacts } from "../services/contactService";
import { Link } from "react-router-dom";
import Button from "../components/Button"

export default function ContactList() {

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
            console.log(error);
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    const saveToLocalStorage = () => {
        if (contacts.length > 0) {
            localStorage.setItem("contacts", JSON.stringify(contacts.slice(0,10)));
        }
    }

    useEffect(() => { loadContacts(); }, []);

    return (
        <>
            <div className="mt-4 mb-12">
                <div className="flex gap-4">
                    <Button onClickFunction={loadContacts} text={isLoading ? 'Cargando...' : '🔄 Cargar'} disabled={isLoading} />
                    <Button onClickFunction={saveToLocalStorage} text={"Guarda en LS"} />
                </div>
            </div>

            {isLoading && <p>🔄 Cargando contactos...</p>}

            {
                error && (
                    <div>
                        ❌ Error: {error} <button onClick={loadContacts}>🔄 Reintentar</button>
                    </div >
                )
            }

            {!isLoading &&
                (<section className="w-full flex flex-col gap-2">
                    {contacts.map(contact => (
                        <Link key={contact.id} to={'/contact/' + contact.id} >
                            <div className="flex items-center gap-8 p-4 border-2 rounded-lg">
                                <div>
                                    <h2 className="text-5xl">{contact.id}</h2>
                                </div>
                                <div>
                                    <h4>👤 {contact.fullname}</h4>
                                    <p>📞 {contact.phonenumber}</p>
                                    {contact.email && <p>✉️ {contact.email}</p>}
                                </div>
                            </div>
                        </Link>
                    ))}
                </section>
                )
            }
        </>
    );
}