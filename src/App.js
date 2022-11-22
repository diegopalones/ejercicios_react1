
import './App.css';
import Person from './components/Person/Person';
import PersonClass from './components/PersonClass/PersonClass';


function App() {
  return (
    <div className="App">
     <Person name="Sheila" surname="Caballero" age="36"/>
      <Person name="Diego" surname="Palones" age="44"/>
      <Person name="Gabriela" surname="Palones" age="4"/>
      <br/>

      <PersonClass name="Perico" surname="De los Palotes" age="55"/>
      <PersonClass name="Amparito" surname="La filla del mestre" age="21"/>
      <PersonClass name="Carmeta" surname="La nina" age="99"/>
      <br/>
      
      
    </div>
  );
}


export default App;