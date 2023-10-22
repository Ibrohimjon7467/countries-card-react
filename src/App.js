import './App.css';
import { useState } from 'react';
import Angola from './imgs/angola.png'
import Argentina from './imgs/argentina.png'
import Iraq from './imgs/iraq.png'
import Italy from './imgs/italy.png'
import Kyrgyzstan from './imgs/kyrgyzstan.png'
import Russia from './imgs/russia.png'
import SouthKorea from './imgs/south korea.png'
import Australia from './imgs/australia.png'
import China from './imgs/china.png'

function App() {

  const [ countries, setCountries ] = useState([
    {
      image: Angola,
      name: "Angola",
      population: "36,684,202",
      area: 1246700,
    },
    {
      image: Argentina,
      name: "Argentina",
      population: "45,773,884",
      area: 2736690,
    },
    {
      image: Iraq,
      name: "	Iraq",
      population: "45,504,560",
      area: 434320,
    },
    {
      image: Italy,
      name: "	Italy",
      population: "58,870,762",
      area: 294140,
    },
    {
      image: Kyrgyzstan,
      name: "	Kyrgyzstan",
      population: "19,606,633",
      area: 191800,
    },
    {
      image: Russia,
      name: "	Russia",
      population: "144,444,359",
      area: 16376870,
    },
    {
      image: SouthKorea,
      name: "	South Korea",
      population: "51,784,059",
      area: 97230,
    },
    {
      image: Australia,
      name: "Australia",
      population: "26,439,111",
      area: 7682300,
    },
    {
      image: China,
      name: "China",
      population: "1,425,671,352",
      area: 9388211,
    },
  ])

  return (
    <div className="App">
      {countries.map((country) => {
        return (
            <div className="card">
              <img src={country.image} width={500} height={340} />
              <h1>{country.name}</h1>
              <h3>Population: {country.population}</h3>
              <h3>Area: {country.area} km²</h3>
            </div>
        )
      })}
    </div>
  );
}

export default App;