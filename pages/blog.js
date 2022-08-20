import Entrada from "../components/Entrada";
import Layout from "../components/Layout"
import styles from '../styles/Blog.module.css'

const blog = ({entradas}) => {

  console.log(entradas);

  return (
    <Layout title={'blog'}>


      <main className="contenedor">
        <h2 className="heading">Blog</h2>
        <div className={styles.blog}>
            {entradas.map(entrada=>(
              <Entrada
              key={entrada.id}
              entrada={entrada}/>
            ))}
          

        </div>
      </main>

    </Layout>
  )
}
//debo exportar estas dos funciones, así next va a saber que estás utilizando alguna función para obtener datos de alguna API.

//esta función está corriendo en el servidor, aparece en la consola
//tengo acceso a mis datos en este script.
export async function getStaticProps(){
  const url=`${process.env.API_URL}/blogs`;
  const respuesta= await fetch(url);
  const entradas = await respuesta.json();
  
  
  return {
    props:{
      entradas

    }
  }
}

export default blog