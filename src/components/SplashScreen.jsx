// Componente que muestra pantalla de carga
const SplashScreen = ({ isLoading, error }) => {
  // Si no está cargando, no renderizar nada
  if (!isLoading) return null;

  return (
    <>
      {error ? (
        <div>
          <p>❌ {error}</p>
          <p>Verifica tu conexión e intenta nuevamente</p>
        </div>
      ) : (
        <div>
          <h2>
            📇 Iniciando Contact Manager...
          </h2>
        </div>
      )
      }
    </>
  );
};

export default SplashScreen;