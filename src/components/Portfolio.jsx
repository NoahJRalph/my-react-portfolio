import React from 'react';

const Portfolio = () => {
    return (
        <section className="portfolio">
            <h1 className="rotate-backforth"><a href="#portfolio-list">My work:</a></h1>
            <section id="portfolio-list">
                <a className="card" id="recent" href="https://bestgroup-brainsync-52f09c273629.herokuapp.com/"><img src={require("../images/brainSync-final.png")} alt="An accessible reaction-based social media site made for Noah's cert camp."/></a>
                <a className="card" id="past" href="https://murmuring-thicket-05712.herokuapp.com/login"><img src={require("../images/brainSync.png")} alt="Project-oriented group chat project made for Noah's cert camp."/></a>
                <a className="card" id="past" href="https://andrewmuhn.github.io/harry-potter-spell-book/"><img src={require("../images/hp-spell-book.png")} alt="A Harry Potter-themed Spell Book project made for Noah's cert camp."/></a>
                <a className="card" id="past" href="https://noahjralph.github.io/my-portfolio/"><img src={require("../images/portfolio.png")} alt="Noah Ralph's portfolio built using HTML!"/></a>
                <a className="card" id="past" href="https://noahjralph.github.io/prework-study-guide/"><img src={require("../images/pre-work study guide.png")} alt="Noah's Study Guide he built for his certification camp."/></a>
                <a className="card" id="past" href="https://noahjralph.github.io/basic-html-landing-page/"><img src={require("../images/basic-landing-page.png")} alt="A basic landing page for a support site."/></a>
                <a className="card" id="past" href="https://noahjralph.github.io/horiseon-code-refactoring/"><img src={require("../images/horiseon.png")} alt="Horiseon landing page: a code refactoring challenge."/></a>
                <a className="card" id="past" href="https://noahjralph.github.io/randomized-password-generator/"><img src={require("../images/password-generator.png")} alt="A fancy password generator (with options)."/></a>
            </section>
        </section>
    )
}
export default Portfolio;