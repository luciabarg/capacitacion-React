import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HolaMundo from "./HolaMundo";
import NavLink from "./components/NavLink";
import Divider from "./components/Divider";
import Sidebar from "./components/Sidebar";
import InputText from "./components/InputText";
import ContentBox from "./components/ContentBox";

const routes = [
  { label: "Notas" },
  { label: "Recordatorios" },
  { label: "Editar Etiquetas" },
  { label: "Archivar" }
];

class App extends React.Component {
  constructor(props) {
    super(props); //tiene q estar siempre!

    this.state = {
      notas: ""
    };
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.notas ? "Hay notas" : "no hay notas"} </h1>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hola <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <NavLink
            label={"Notas"}
            icon={"http://placehold.it/25"}
            active={true}
          />
          <NavLink label={"Recordatorios"} icon={"http://placehold.it/25"} />
          <Divider />
          <h1>{this.state.notas}</h1>

          <InputText
            label={"Nota"}
            name={"nota"}
            value={this.state.notas}
            placeholder={"Crear una nota..."}
            onInputChange={this.onNotaInputChange}
          />
          {this.state.notas ? (
            <ContentBox
              contentboxTitle={this.state.notas}
              contentboxText={" ..."}
            />
          ) : null}
          <Sidebar routes={routes} />
          {/* < NavLink label={"Editar etiquetas"} icon={"http://placehold.it/25"}/>
        < NavLink label={"Archivar"} icon={"http://placehold.it/25"}/>
        < NavLink label={"Papelera"} icon={"http://placehold.it/25"}/> */}
          {/* < HolaMundo saludo={"Hello Kitty"} showSaludo={true}/> */}
        </header>
      </div>
    );
  }

  onNotaInputChange = value => {
    this.setState({
      notas: value
    });
  };
}
export default App;
