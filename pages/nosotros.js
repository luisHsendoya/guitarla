import Image from "next/image";
import Layout from "../components/Layout";
import styles from '../styles/Nosotros.module.css'


const nosotros = () => {
  return (
    <Layout title='About Us'>
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>
        <div className={styles.contenido}>
          <Image layout="responsive" width={600} height={450} src={'/img/nosotros.jpg'}/>
           <div>
              <p>
              Ut a gravida nunc. Praesent neque dolor, egestas sed turpis vel, varius elementum justo. Donec est felis, congue vel tempor non, venenatis et turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam ligula eros, pulvinar sed sodales id, pretium ut lorem. Sed sed interdum velit. Morbi bibendum nulla imperdiet, laoreet enim non, ultrices erat. Donec ligula urna, sagittis a mi sed, porttitor convallis dui. Proin in eleifend sem. Cras imperdiet venenatis magna, eget posuere velit aliquam ac.
              </p>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at sollicitudin massa. Quisque felis urna, auctor eu tellus auctor, posuere fermentum neque. Duis imperdiet dui facilisis purus vulputate dapibus vitae id felis. In feugiat diam eget ultrices placerat. Nulla molestie feugiat leo. Proin nulla dui, ultrices et placerat vel, mattis facilisis turpis. Vestibulum aliquet nunc vitae elit aliquet porta. Cras mauris sapien, faucibus sit amet euismod id, hendrerit in neque. Aliquam imperdiet consectetur gravida.
              </p>
           </div>
        </div>

      </main>
        
    </Layout>
  )
}

export default nosotros