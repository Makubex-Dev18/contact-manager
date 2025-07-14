export default function Header({ filterFavorites, contactsCount }) {
  return (
    <header style={{ color: "blue", margin: "20, 10", textAlign: "Center" }}>
      <h1>📞 Contact Manager</h1>
      <p>Mis contactos importantes</p>
      <p>
        la cantidad de contactos es de {contactsCount()} y la de favoritos es{" "}
        {filterFavorites().length}
      </p>
    </header>
  );
}
