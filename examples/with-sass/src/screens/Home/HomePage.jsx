import React from 'react';

import LogoPokemon from "../../assets/images/pokemonLogo.png";

const HomePage = () => (
    <div class="home">
        <div class="home__wrapper">
            <img class="home__logo" alt="Logo Pokemon" src={LogoPokemon} />
            <a class="home__start" href="/map">Start</a>
        </div>
    </div>
);

export default HomePage;
