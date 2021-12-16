import { HomePage } from "./cmps/HomePage";
import { HashRouter, Route, Switch } from 'react-router-dom';
import { PokemonDetails } from "./cmps/PokemonDetails";
import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
*{
  background-color: #383838;
  transition: 0.3s; 
  color: white;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
`

function App() {
  return (
    <>
      <HashRouter>
        <GlobalStyle />
        <Switch>
          <Route path="/details" component={PokemonDetails} />
          <Route path="/" component={HomePage} />
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
