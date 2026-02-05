import React from "react";
import mock001 from '../assets/images/tokaido_title.png';
import mock001_hover from '../assets/images/tokaidovideogame.gif';
import mock002 from '../assets/images/donuts_title.png';
import mock002_hover from '../assets/images/donutsvideogame.gif';
import mock003 from '../assets/images/monumental_title.png';
import mock003_hover from '../assets/images/monumentalapp.gif';
import mock004 from '../assets/images/runemasters_title.png';
import mock004_hover from '../assets/images/runemasters.png';*/
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h2>Projects</h2>
        <div className="projects-grid">
            <div className="project">
                <div className="img-hover">
                        <img src={mock002} className="zoom" alt="thumbnail" width="100%"/>
                        <div className="hover-container">
                            <img src={mock002_hover} className="img-hovered-portrait" alt="thumbnail hover" />
                        </div>
                </div>
                <h3>Donuts</h3>
                <p><a href ='https://boardgamegeek.com/boardgame/341358/donuts' target="_blank" rel="noreferrer">Donuts</a> is an abstract strategy game for two players in which you attempt align five rings of your color to win.</p>
                <p>Starting with a classic adaptation of the board game, it became a game with new ways and features to play an expanded experience.</p>
                <p>Game design created by <a href="https://fr.wikipedia.org/wiki/Bruno_Cathala_(auteur_de_jeux)">Bruno Cathala</a>.</p>
                <p>Art visuals and game assets created by <a href="https://boardgamegeek.com/boardgamedesigner/11265/philippe-nouhra">Philippe Nouhra</a>.</p>
                <p>It was planned to be a F2P game available on Android and iOS.</p>
            </div>
            <div className="project">
                <div className="img-hover">
                        <img src={mock001} className="zoom" alt="thumbnail" width="100%"/>
                        <div className="hover-container">
                            <img src={mock001_hover} className="img-hovered" alt="thumbnail hover" />
                        </div>
                </div>
                <h3>Tokaido</h3>
                <p>In <a href='https://boardgamegeek.com/boardgame/123540/tokaido' target="_blank" rel="noreferrer">Tokaido</a>, you are a traveler, in the heart of ancient Japan, walking the legendary East Sea road from Kyoto to Edo, trying to make the trek as fulfilling as possible.</p>
                <p>I've worked on all aspects of the game such as gameplay, UI, camera, solo mod, pass & play mod, online & crossplatform multiplayer, player account creation...</p>
                <p>Game design created by <a href="https://fr.wikipedia.org/wiki/Antoine_Bauza">Antoine Bauza</a>.</p>
                <p>Art visuals created by <a href="https://www.artstation.com/xaviergueniffeydurin">Naïade</a>.</p>
                <p>UI assets made by <a href="https://boardgamegeek.com/boardgamedesigner/11265/philippe-nouhra">Philippe Nouhra</a>.</p>
                <p>Game assets made by <a href="https://www.artstation.com/artwork/X2ody">Charles-V Kaing</a>.</p>
                <p>Available on <a href="https://apps.apple.com/fr/app/tokaido/id1215230801" target="_blank" rel="noreferrer">AppStore</a>, <a href="https://play.google.com/store/apps/details?id=com.funforgedigital.tokaido&hl=en" target="_blank" rel="noreferrer">Google Play</a> and <a href="https://store.steampowered.com/app/648750/Tokaido/" target="_blank" rel="noreferrer">Steam</a> since February 2017.</p>
            </div>
            <div className="project">
                <div className="img-hover">
                        <img src={mock003} className="zoom" alt="thumbnail" width="100%"/>
                        <div className="hover-container">
                            <img src={mock003_hover} className="img-hovered" alt="thumbnail hover" />
                        </div>
                </div>
                <h3>Monumental App</h3>
                <p>In <a href='https://boardgamegeek.com/boardgame/248125/monumental' target="_blank" rel="noreferrer">Monumental</a>, each player will control a civilization that will evolve through their city deck, which they will have to build over the ages.</p>
                <p>I was in charge of developing a web application where players of the Monumental board game are able to create their own cards and maps.</p>
                <p>Game design created by <a href="https://www.matthewdunstan.com/">Matthew Dunstan</a>.</p>
            </div>
            <div className="project">
                <div className="img-hover">
                        <img src={mock004} className="zoom" alt="thumbnail" width="100%"/>
                        <div className="hover-container">
                            <img src={mock004_hover} className="img-hovered" alt="thumbnail hover" />
                        </div>
                </div>
                <h3>Runemasters</h3>
                <p><a href='https://boardgamegeek.com/boardgame/391766/runemasters' target="_blank" rel="noreferrer">Runemasters</a> is a co-operative tower-defense game in which 1-4 players work together as Runemasters whose sworn duty is to protect the Temple of Mankind against the forces of evil.</p>
                <p>I've developed a prototype to complete an application for video game production funding. Unfortunately, we were rejected and the project's development stopped.</p>
                <p>Game design created by <a href="https://bsky.app/profile/transludis.bsky.social">Antoine Prono</a>.</p>
                <p>Art visuals created by <a href="https://www.artstation.com/djib">Djib</a>.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;