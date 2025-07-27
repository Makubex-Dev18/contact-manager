import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <header className="h-[10vh] py-10 border-b-1">
            <nav className="flex w-[70%] mx-auto justify-between">
                <Link to="/" className="text-orange-500 text-2xl">Home Link</Link>
                <a href="/" className="text-orange-500 text-2xl">Home Anchor</a>
                <Link to="/contacts" className="text-orange-500 text-2xl">Contactos</Link>
                <Link to="/local-contacts" className="text-orange-500 text-2xl">Local Contactos</Link>
            </nav>
        </header>
    )
}