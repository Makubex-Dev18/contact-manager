import { useState } from "react";

export default function Counter() {
    const [counter, setCounter] = useState(500);

    const handleCount = () => {
        setCounter(prev => prev + 1);
    }

    return (
        <section className="flex flex-col gap-4 mt-10">
            <h2 className="text-3xl">Contador: {counter}</h2>
            <button onClick={handleCount}>Incrementar</button>
            {counter > 505 && (
                <h3>Máximo logrado!</h3>
            )}
        </section>
    )
}