import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button"

export default function ContactList() {

    const [contacts, setContacts] = useState([]);
    const [viewGrid, setViewGrid] = useState(false);


    const getFromLocalStorage = () => {
        const localContacts = localStorage.getItem("contacts") || [];
        if (localContacts.length > 0) {
            setContacts(JSON.parse(localContacts))
        }
    }

    // Al montarse el componente, llama 1 sola vez a "getFromLocalStorage".
    useEffect(() => {
        setTimeout(() => getFromLocalStorage(), 2000);
    }, []);

    return (
        <>
            <div className="mt-4 mb-12">
                <div className="flex gap-4">
                    <Button onClickFunction={getFromLocalStorage} text={"Cargar desde LS"} />
                    <Button onClickFunction={() => setContacts([])} text={"Limpiar"} />
                    <Button onClickFunction={() => setViewGrid(!viewGrid)} text={"Alternar vista"} />
                </div>
            </div>

            {contacts.length > 0 ?
                (<section className={`w-full flex ${!viewGrid ? "flex-col" : "flex-wrap"} gap-2`}>
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
                ) : (
                    <h2 className="text-5xl text-slate-100">No hay contactos...</h2>
                )
            }
        </>
    );
}