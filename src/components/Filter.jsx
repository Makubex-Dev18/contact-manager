export default function Filter({ handleChangeFavorite }) {
  const estiloMostrarFav = {
    display: "flex",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
    margin: 1,
    gap: 1,
    border: "1px solid green",
    borderRadius: "10px",
    padding: "10px",
    maxWidth: "200px",
    margin: "20px auto",
    backgroundColor: "default",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  };

  return (
    <section style={estiloMostrarFav}>
      <label htmlFor="">
        <h3>Filtros</h3>
        <input type="checkbox" onClick={handleChangeFavorite} /> Mostrar
        Favoritos
      </label>
    </section>
  );
}
