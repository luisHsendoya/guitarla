import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";


const Layout = ({children, title}) => {
  return (
    <div>
        <Head>
            <title>{title}</title>
            <meta name="description" content="Sitio web de ventas de guitarras" />
            
        </Head>
        <Header/>
        
        {children}

        <Footer/>
    </div>
  )
}

export default Layout