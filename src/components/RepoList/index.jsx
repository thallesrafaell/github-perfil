import { useEffect, useState } from "react"
import styles from './Repolist.module.css'

const Repositorios = ({nomeUsuario}) => {
    const [repos, setRepos] = useState([])
    const [carregando, setCarregando] = useState(true)
    useEffect(()=>{
        setCarregando(true)
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => res.json())
        .then(resjson => {
            setTimeout(()=>{
                setCarregando(false)
                setRepos(resjson)
            }, 3000)
        })
        
    }, [nomeUsuario])
    return (
        <div className="container">
            {carregando ? (<h1>Carregando...</h1>) :  <ul className={styles.list}>
            {repos.map(({id, name, language, html_url}) => (
                <li className={styles.listItem} key={id}>
                    <div className={styles.itemName}>
                        <b>Nome:</b>{name}
                    </div>
                    <div className={styles.itemLanguage}>
                    <b>Linguagem:</b>{language} 
                    </div>
                    <a className={styles.itemLink} target="_blank" href={html_url}>Visitar no GitHub</a>
                </li>
            ))}
        </ul>}
            
           
        </div>
    )
}

export default Repositorios