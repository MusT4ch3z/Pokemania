import './AboutPage.css'
import PikachuIMG from '../../image/PikachuSmol.png'

const AboutPage = () => {

   return (
      <div className="about_page column">
         <img className='about_page__pikachu' src={PikachuIMG} />
         <div className='about_page__body'>
            <h1>I choose you, Pikachu!</h1>

            <h2>Greetings, this is my studying project. You can find any pokemon you want and learn something new about him.
            <br />
            The second page contains information about various items.
            Pokemon's and items data is fetched from API.
            Filtering by the type is going on server-side.
            Searching and sorting by the name is going on client-side.
            If you are meet any bugs feel free to report it to e-mail.
            <br />
            Enjoy yours exploring!
            </h2>

            <h2>
               Used stack: React/Redux.<br />
               Used API: <a href="https://pokeapi.co/" target="_blank">PokeAPI</a>
            </h2>
            <h2>
               GitHub: <a href="https://github.com/MusT4ch3z" target="_blank">https://github.com/MusT4ch3z</a><br />
               Contact: true-akk@yandex.ru
            </h2>
         </div>
      </div>
   )
}

export default AboutPage