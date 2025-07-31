export default function ContactSorter({ onSortAsc, onSortDesc }) {
  return (
    <div className="flex justify-center gap-4 my-4">
      <button
        onClick={onSortAsc}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Ordenar ID ↑
      </button>
      <button
        onClick={onSortDesc}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Ordenar ID ↓
      </button>
    </div>
  );
}
