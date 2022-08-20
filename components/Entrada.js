import Link from 'next/link';
import {formatingDate} from '../helper'
import Image from 'next/image';
import styles from '../styles/Entrada.module.css'

const Entrada = ({entrada}) => {
    const {titulo, resumen,imagen,published_at,id}=entrada;
  return (
    <article>
        <Image width={800} height={600} layout='responsive' alt={`imagen blog ${titulo}`} src={imagen.url}/>
        <div className={styles.contenido}>  
            <h3>{titulo}</h3>
            <p className={styles.fecha}>{formatingDate(published_at)}</p>
            <p>{resumen}</p>
            <Link href={`/blog/${id}`}>Leer Entrada</Link> 
        </div>
    </article>
  )
}

export default Entrada