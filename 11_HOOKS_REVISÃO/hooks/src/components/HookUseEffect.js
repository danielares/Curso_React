import { useEffect, useState } from 'react';

const HookUseEffect = () => {
    // 1 - useEffect, dem dependências
    // é executado sempre que o componente muda
    useEffect(() => {
        console.log("Estou sendo executado");
    });

    const [number, setNumber] = useState(1);

    const changeSomething = () => {
        setNumber(number + 1);
    }


    // 2 - array de dependencias vazio
    // é executado somente uma vez... quando a página é carregada
    useEffect(() => {
        console.log("Serei executado apenas uma vez!")
    }, [])


    // 3 - item no array de dependencias
    // é executado sempre que um state muda... no exemplo o "anotherNumber"
    const [anotherNumber, setAnotherNumber] = useState(0);

    useEffect(() => {
        if (anotherNumber > 0) {
            console.log("Sou executado apenas quando o anotherNumber muda");
        }
    }, [anotherNumber]);


    // 4 - cleanup do useEffect
    // para não vazer memoria de um componente para outro... devemos utilizar o exemplo do return
    useEffect(() => {
        //const timer =  setTimeout(() => {
        //    console.log("Hello World")
        //    //setAnotherNumber(anotherNumber + 1)
        //}, 2000)
        //return () => clearTimeout(timer)
    }, [anotherNumber]);

    return (
        <div>
            <h2>useEffect</h2>
            <p>Number: {number}</p>
            <button onClick={changeSomething}>Executar!</button>
            <p>Another Number: {anotherNumber}</p>
            <button onClick={() => setAnotherNumber(anotherNumber + 1)}>Mudar anotherNumber</button>
            <hr />
        </div>
    )
}

export default HookUseEffect