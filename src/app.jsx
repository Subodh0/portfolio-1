import React from "react";
import Header from './components/header/header';
import Nav from './components/nav/nav';
import About from './components/about/about';
import Experience from './components/experience/experience';
import Services from './components/services/services';
import Portfolio from './components/portfolio/portfolio';
import Testimonials from './components/testimonials/testimonials';
import Contact from './components/contacts/contact';
import Footer from './components/footer/footer';
import Blogs from "./components/blogs/blogs";
import Achievements from "./components/achievements/achievements";

const App = () =>{
    return (
        <>
            <Header />
            <Nav />
            <About />
            <Services />
            <Achievements />
            <Experience />
            <Portfolio />
            <Testimonials />
            <Blogs />
            <Contact />
            <Footer />
        </>
    )
}

export default App;