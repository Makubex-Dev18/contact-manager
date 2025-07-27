import { useEffect, useState } from "react"

export default function DemoPage() {
    // Al montar el componente, siempre iniciaré con la A
    const [letter, setLetter] = useState("A");
    const [counter, setCounter] = useState(1);

    const handleChange = () => {
        const randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
        console.log("New Letter: " + randomLetter);
        setLetter(randomLetter);
    }

    const initCounter = () => {
        return setInterval(() => {
            
            setCounter(prev => {
                console.log(prev + 1);
                return prev + 1;
            });
        }, 1000);
    }

    useEffect(() => {
        const interval = initCounter();
        return () => clearInterval(interval);
    }, []); // se llama 1 sola vez, porque su arreglo de dependencias es vacio "[]"

    useEffect(() => {
        if (counter % 5 === 0 && counter > 0) {
            handleChange();
        }
        if (counter % 3 === 0 && counter > 0) {
            handleChange();
        }
    }, [counter]); // se llama cada vez que "counter" cambie (1000 ms)


    return (
        <main className="w-full flex justify-center items-center pt-24">
            <section>
                <h2 className="text-6xl">Demo Page</h2>
                <h3 className="text-8xl text-center">{letter}</h3>



                <button onClick={handleChange} className="relative inline-flex items-center justify-center inline-block p-4 px-12 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg cursor-pointer shadow-2xl group">
                    <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                    <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                        <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                        <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                    </span>
                    <span className="relative text-white text-lg font-bold">Cambiar</span>
                </button>
            </section>
        </main>
    )
}