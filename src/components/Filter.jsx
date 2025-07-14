export default function Filter({ handleChangeFavorite }) {
  const estiloMostrarFav = {
    display: "flex",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
    margin: 1,
    gap: 1,
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
