export default function Header({ filterFavorites }) {
  return (
    <header style={{ color: "blue", margin: "20px 0", textAlign: "Center" }}>
      <h1>📞 Contact Manager</h1>
      <p>Mis contactos importantes</p>
      <p>la cantidad de contactos favoritos es: {filterFavorites().length}</p>
    </header>
  );
}
