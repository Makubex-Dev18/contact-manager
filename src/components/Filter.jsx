export default function Filter({ handleChangeFavorite }) {
  const estiloMostrarFav = {
    marginTop: 40,
    marginBottom: 40,
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
