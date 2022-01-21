import CardBlog from "../../components/CardBlog";
import CardMenu from "../../components/CardMenu";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Member from "../../components/Member";

import Services from "../../components/Services";

export default function Home() {
    return (
        <>
            <Header/>
            <CardMenu />
            <Services />
            <CardBlog />
            <Member />
            <Footer />
        </>
    )
}

