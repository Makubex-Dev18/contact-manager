// Componente que muestra pantalla de carga
const SplashScreen = ({ isLoading, error }) => {
  // Si no está cargando, no renderizar nada
  if (!isLoading) return null;

  return (
    <main className="flex flex-col justify-center items-center w-full h-[100vh]">
      {error ? (
        <div style={{ textAlign: 'center' }}>
          <p style={{ color: '#ff6b6b' }}>❌ {error}</p>
          <p style={{ color: '#ccc' }}>Verifica tu conexión e intenta nuevamente</p>
        </div>
      ) : (
        <div>
          <h2 className="text-6xl text-blue-200">
            📇 Iniciando Contact Manager...
          </h2>
        </div>
      )
      }
    </main>
  );
};

export default SplashScreen;