export default function OrderButtons({ contactsToShow = [], setContactsToShow }) {
  const ordenarAscendente = () => {
    const ordenados = [...contactsToShow].sort((a, b) => a.id - b.id);
    setContactsToShow(ordenados);
  };

  const ordenarDescendente = () => {
    const ordenados = [...contactsToShow].sort((a, b) => b.id - a.id);
    setContactsToShow(ordenados);
  };

  return (
    <div className="flex justify-center gap-4 my-4">
      <button
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        onClick={ordenarAscendente}
      >
        Ordenar ID ↑
      </button>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={ordenarDescendente}
      >
        Ordenar ID ↓
      </button>
    </div>
  );
}
