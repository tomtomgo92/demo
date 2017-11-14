import React from 'react';
import './App.css';

class App extends React.Component {
   render() {
      return (
         <div>
            <Header/>
            <Intro/>
            <Folio/>
            <Contact/>
         </div>
      );
   }
}
class Header extends React.Component {
   render() {
      return (
      <div className="App-header" id="slid1">
        <div className="box">
          <img src="logo-thomas.png" alt="Is not my logo"></img>
        </div>
      </div>
      );
   }
}
class Intro extends React.Component {
   render() {
      return (
        <div className="App-intro" id="slid2">
          <h2>Qui suis-je ?</h2>
          <div className="contenair">
            <div className="myImg">
              <img src="THOMAS.png" alt="Im not psychopath"></img>
            </div>


            <div className="whoIm">
              <div class="accordion vertical">
                <ul>
                  <li>
                    <input type="radio" id="radio-1" name="radio-accordion" checked="checked" />
                    <label className="styleLbl" for="radio-1">A propos !</label>
                    <div class="content">
                    <p>
                      Grâce à mon parcours scolaire et professionnel, j’ai pu acquérir des expériences dans des 
                      domaines variés me prouvant que je m’adapte très vite aux nouveaux environnements de travail.  
                    </p>
                    <p> 
                    Je suis également passionné de nouvelles technologies, de design, d'art.
                    Je m'intéresse aussi bien au front qu'au Back, je ne suis pas fermé à l'utilisation de nouveaux langages.
                    Tout simplement, j'aime apprendre ! Je participe régulièrement aussi à des meetups comme par exemple sur l'utilisation de react dans les                    
                    entreprises dans les locaux de Facebook ou dernièrement au meetup sur l'utilisation de google cloud plateforme.
                    </p>
                    </div>
                  </li>
                  <li>
                    <input type="radio" id="radio-2" name="radio-accordion" />
                    <label className="styleLbl" for="radio-2">Je suis plus...</label>
                    <div class="content">
                      <h2>Star Trek que Star Wars</h2>
                      <h2>Pokemon que Digimon</h2>
                      <h2>Apple que Windows</h2>
                      <h2>IOS qu' Android</h2>
                      <h2>Google Assistant que Siri</h2>
                      <h2>Mojito que Biere</h2>
                    </div>
                  </li>
                  <li>
                    <input type="radio" id="radio-3" name="radio-accordion" />
                    <label className="styleLbl" for="radio-3">Sinon...</label>
                    <div class="content">
                      <h2>Participation à des Hackathons</h2>
                      <a href="http://e-tonomy.fr"><img className= "imgWhoIm" src="https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/22490118_10212377800353802_7225687150861899925_n.jpg?oh=ca8dc7bf31790b17bc2984e35dc341f5&oe=5A9481DE" alt="ETonomy Hackathon"></img></a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
   }
}

class Folio extends React.Component {
   render() {
      return (
        <div className="App-folio" id="slid3">
          <h2>J'ai fais quoi ?</h2>
          <div id="conteneur">
            <div className="element"><a href="http://polbaril.ca"><img className= "item-overlay top" src="http://t-millet.com/wp-content/uploads/2017/08/pol.jpg" alt="logo PolBaril"></img></a></div>
            <div className="element"><a href="https://www.aupetitmarche-alsace.fr"><img className= "item-overlay top" src="http://t-millet.com/wp-content/uploads/2017/08/alsa.jpg" alt="logo Marché alsace"></img></a></div>
            <div className="element"><a href="http://pfdmedia.fr/fr/"><img className= "item-overlay top" src="http://t-millet.com/wp-content/uploads/2017/08/pfdm.jpg" alt="logo PFDM"></img></a></div>
            <div className="element"><a href="http://vuedailleurs.fr"><img className= "item-overlay top" src="http://t-millet.com/wp-content/uploads/2017/08/vue.jpg" alt="logo VueDAilleur"></img></a></div>
            <div className="element"><a href="http://thesouledition.florian-breton.fr"><img className= "item-overlay top" src="http://t-millet.com/wp-content/uploads/2017/08/tse.jpg" alt="logo TSE"></img></a></div>
            <div className="element"><a href="http://baubybar.fr"><img className= "item-overlay top" src="http://baubybar.fr/wp-content/uploads/2017/01/cropped-Capture-d’écran-2017-01-31-à-14.38.42.png" alt="logo BaubyBar"></img></a></div>
            <div className="element"><a href="http://masterdai.fr"><img className= "item-overlay top" src="http://t-millet.com/wp-content/uploads/2017/08/dai-1.jpg" alt="logo MDAI"></img></a></div>
          </div>
        </div>
      );
   }
}

class Contact extends React.Component {
   render() {
      return (
        <div className="App-contact" id="slid4">
        <div id ="bloc_page">
      <div className="flipcard">
		    <input type="checkbox" id ="cbx" value="ok"/>
		    <label className="front" for="cbx">
          <div className="avatar"><img src="logo-tm.png" alt="logo TM"></img></div>
            <div className="details">
              <div class="info">
                <div className="name">Thomas <span>Millet</span></div>
                <div className="role">Recherche Alternance</div>
                <div className="contact">thomas.millet92@gmail.com</div>
                <div className="contact">07 86 39 31 39 </div>
              </div>
            </div>
        </label>
		    <label className="back" for="cbx">
          <div className="social">
          <table>
            <tr><td>
                <img src="https://assets-cdn.github.com/images/modules/logos_page/Octocat.png" class="socialico" alt="logo GitHub"/>
                <div className="sociallink"><a href="https://github.com/tomtomgo92" >Github</a></div>
            </td></tr>
            <tr><td>
              <img src="http://www.freepnglogos.com/uploads/linkedin-shiny-icon-logo-5.png" class="socialico" alt="logo Linkedin"/>
              <div class="sociallink"><a href="https://www.linkedin.com/in/thomas-millet-28609434/">LinkedIn</a></div>
            </td></tr>
          </table>
         </div> 

      <a href="https://codingfactory.fr"><img src="https://i2.wp.com/codingfactory.fr/wp-content/uploads/2014/10/logo-coding-factory-carroussel.png" class="coding" alt="logo CodingFactory"/></a>
        </label>
    	</div>
    </div>


        </div>
      );
   }
}

export default App;
