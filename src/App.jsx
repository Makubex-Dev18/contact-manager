import Header from './components/Header.jsx';
import ContactList from './components/ContactList.jsx';
import Footer from './components/Footer.jsx';

/*
const estilos ={
  color : 'blue',
  fontSize : '40px',
  fontFamily : 'roboto',
  textAlign : 'center'
}
*/
export default function App() {
  return (
    <div>
      <Header />  

      <ContactList />
      <Footer />
    </div>
  );
}