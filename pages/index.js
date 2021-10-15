import Navbar from "../components/Navbar";
import {queries, request} from "../services/datocms";
import {createGlobalStyle} from "styled-components";
import Header from "../blocks/Header/header";
import MainPage from "../blocks/Main/mainPage";
import About from "../blocks/About/about";
import Portfolio from "../blocks/Portfolio/portfolio";
import Services from "../blocks/Services/services";
import Certification from "../blocks/Certification/certification";
import Partners from "../blocks/Partners/partners";
import Contacts from "../blocks/Contacts/contacts";
import Footer from "../blocks/Footer/footer";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }`


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
  const  { allMenus } = data;
  return (
      <div>
        <GlobalStyle/>
        <Header menuItems = {allMenus}/>
        <MainPage/>
        <About/>
        <Portfolio/>
        <Services/>
        <Certification/>
        <Partners/>
        <Contacts/>
        <Footer/>
      </div>
  );
}