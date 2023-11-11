import { useState, useEffect } from "react"


const Formulario = () => {
    let [materiaA, setMateriaA] = useState(0)
    let [materiaB, setMateriaB] = useState(0)
    let [materiaC, setMateriaC] = useState(0)
    let [nome, steNome] = useState('')

    useEffect(() => {
        
    }, [nome])

        
    useEffect(() => {
        console.log("Inciou")
        return () => {
            console.log('Finalizou')
        }
    }, [])

    const alteraNome = (e) => {
        steNome(estadoAnterior => {
            console.log(estadoAnterior)
            return e.target.value
        })
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC
        const media = soma / 3

        if(media >= 7){
            return <p>Olá {nome}, voce foi aprovado</p>
        } else {
            return <p>Olá {nome},voce não foi aprovado</p>
        }
    }

    return (
        <form action="">
            <ul>
                {[1,2,3,4,5].map(item => (<li key={item}>{item}</li>))}
            </ul>

            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota Materia A" onChange={({target}) => setMateriaA(parseInt(target.value))} />
            <input type="number" placeholder="Nota Materia B" onChange={evento => setMateriaB(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota Materia C" onChange={evento => setMateriaC(parseInt(evento.target.value))} />
            {renderizaResultado()}

        </form>
    )
}

export default Formulario 