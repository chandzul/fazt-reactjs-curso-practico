import { Component } from 'react';
import './App.css';

// function Helloworld({mytext, subtitle}) {
//   return (
//     <div id="hello">
//       <h3>{subtitle}</h3>
//       {mytext}
//     </div>
//   );
// }

class Helloworld extends Component {

  state = {
    show: true,
  }

  toggleShow = () => {
    this.setState({show: !this.state.show})
  }

  render(){
    if (this.state.show){
      return (
        <div id="hello">
          <h3>{this.props.subtitle}</h3>
          {this.props.mytext}
          <button onClick={this.toggleShow}>Cambiar Estado</button>
        </div>
      )
    } else {
      return <h1>
        There are not elements
        <button onClick={this.toggleShow}>Cambiar Estado</button>
      </h1>
    }
  }
}

function App() {
  return (
    <div>
      this is my component:
      <Helloworld mytext="Hello David" subtitle="Subititulo"/>
      <Helloworld mytext="hola mundo" subtitle="Componente 2"/>
      <Helloworld mytext="hello!!!"/>
    </div>
  );
}

// class App extends Component{
//   render() {
//     return <div> This is my component <Helloworld/> </div>
//   }
// }

// const App = () => <div>This is my componet: <Helloworld/> </div>;

export default App;
