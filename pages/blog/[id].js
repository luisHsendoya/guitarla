//routing dinamico, no es necesario importar el hook useRouter.

//import {useRouter} from 'next/router'
// lee los parametros que tengamos en la URL

import Layout from "../../components/Layout";
import Image from "next/image";
import {formatingDate} from '../../helper'
import styles from '../../styles/Entrada.module.css'

const entraBlog = ({entrada}) => {

    //const router= useRouter();
    
    const {titulo,imagen,published_at,contenido}=entrada;

   
  return (
    <Layout>
        <main className="contenedor">
            <h1 className="heading">{titulo}</h1>
            <article className={styles.entrada}>   
                <Image layout="responsive" width={800} height={600} priority="true" src={imagen.url} alt={`Imagen de entrada ${titulo}`}/>
                <div className={styles.contenido}>
                    <p className={styles.fecha}>{formatingDate(published_at)}</p>
                    <p className={styles.texto}>{contenido}</p>

                </div>
            </article>
        </main>

    </Layout>
  )
}

//se pasa automaticamente el query cuando estas accediendo a un routing dinamico de esta forma
// export async function getServerSideProps({query:{id}}){
    
//     const url= `http://localhost:1337/blogs/${id}`;
//     const respuesta= await fetch(url);
//     const entrada = await respuesta.json();
    
//     return {
//         props:{
//             entrada

//         }
//     }
// }


export async function getStaticPaths(){
    //obtiene las rutas estaticas, debe estar presente si utilizamos getStaticProps en routing dinamico
    //identifica que páginas va a construir y construir los enlaces, pero es la otra función que se va a traer la información
    //identifica todas las entradas y la otra identifica cada entrada
    
    const url=`${process.env.API_URL}/blogs`;
    const respuesta= await fetch(url);
    const entradas= await respuesta.json();
    const paths=   entradas.map(entrada=>({
        params:{id:entrada.id.toString(),
        }
    }))

    return{
        paths,
        fallback:false
    }
}


export async function getStaticProps({params:{id}}){
    
    const url= `${process.env.API_URL}/blogs/${id}`;
    const respuesta= await fetch(url);
    const entrada = await respuesta.json();
    
    
    
    return {
        props:{
            entrada

        }
    }
}

export default entraBlog;

