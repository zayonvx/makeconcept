import {queries, request} from "../services/datocms";

import Header from "../blocks/Header/header";
import MainPage from "../blocks/Main/mainPage";
import About from "../blocks/About/about";
import Portfolio from "../blocks/Portfolio/portfolio";
import Services from "../blocks/Services/services";
import Certification from "../blocks/Certification/certification";
import Partners from "../blocks/Partners/partners";
import Contacts from "../blocks/Contacts/contacts";
import Footer from "../blocks/Footer/footer";
import App from "./App";
import {Container, Global} from "../theme/Global";


export async function getStaticProps() {
  const data = await request({
    query: queries,
    variables: {limit: 10}
  });

  return {
    props: {data}
  };
}

export default function Index({data}) {
  const  { allMenus, makeconceptlogo, contact, mainpage, about, portfolio, gallery} = data;
  return (
      <Container>
        <App/>
        <Global/>
        <Header menuItems = {allMenus} logo = {makeconceptlogo.logo} contacts = {contact}/>
        <MainPage data={mainpage}/>
        <About data={about}/>
        <Portfolio data={portfolio} gallery={gallery}/>
        <Services/>
        <Certification/>
        <Partners/>
        <Contacts/>
        <Footer/>
      </Container>
  );
}