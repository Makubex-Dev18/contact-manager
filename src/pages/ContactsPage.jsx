import ContactList from "../components/ContactList";
import Navbar from "../components/Navbar";

export default function ContactsPage() {
    return (
        <>
        <Navbar />
        <main className="flex flex-col justify-center items-center w-[70vw] pt-[150px] mx-auto">
            <h1>Contactos</h1>
            <ContactList />
        </main>
        </>
    )
}