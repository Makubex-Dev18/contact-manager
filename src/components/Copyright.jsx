/*Crea un componente llamado Copyright que muestre tu nombre y año actual, y úsalo en App.jsx
Debes usar una función de Javascript que obtenga el año actual dinámicamente.*/
export default function Copyright() {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <p>Luis Roman {currentYear}</p>
    </div>
  );
}