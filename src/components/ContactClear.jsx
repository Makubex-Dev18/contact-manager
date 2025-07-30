export default function ContactClear({ handleClearContact }) {
  return (
    <section>
      <div
        style={{ display: "flex", justifyContent: "center", marginBottom: 30 }}
      >
        <button className="border border-green-500 rounded-xl p-2 max-w-[200px] mx-auto my-3 bg-white shadow-md" onClick={handleClearContact}>Limpiar Seleccion</button>
      </div>
    </section>
  );
}
