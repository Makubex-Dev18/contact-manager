export default function ContactClear({ handleClearContact }) {
  return (
    <section>
      <div
        style={{ display: "flex", justifyContent: "center", marginBottom: 30 }}
      >
        <button onClick={handleClearContact}>Limpiar Seleccion</button>
      </div>
    </section>
  );
}
