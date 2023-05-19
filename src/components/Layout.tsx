import Head from "next/head";
import Navbar from "./Header";
import { ReactNode } from "react";


type LayoutProps = {
    children: ReactNode;
    pagina: string;
};

const Layout = ({ children, pagina }: LayoutProps) => {
    return (
        <div>
            <Head>
                <title>InteGym - {pagina}</title>
                <meta name="description" content="Sitio Adm Gym" />
            </Head>
            <Navbar />
            <main>
                {children}
            </main>
                
        </div>
    );
};

export default Layout;