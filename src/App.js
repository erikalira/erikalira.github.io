import React from 'react';
//import logo from './logo.svg';
import './App.css';

/*function AppDefault() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

/*function ListItem(props){
  return(
    <li>{props.item}</li>
  );
}


class lista extends React.Component {
  constructor(){
    super();
    this.state = {
      list: ['moto', 'carro','bicicleta']
    };
  }

  render(){
    var listItens = []
    this.state.list.forEach((item,i)=>{
      listItens.push(
        <ListItem item={item} />
      )
    });
    
    return(
      <div>
        <h1>Lista de compras de {this.props.name}</h1>
        <ul>
          {listItens}
        </ul>
      </div>
    );
  }
}*/

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      list: ['moto', 'carro','bicicleta']
    };
  }

  render(){
    /*var listItens = []
    this.state.list.forEach((item,i)=>{
      listItens.push(
        <ListItem item={item} />
      )
    });*/
    
    return(
      <div class="wrapper">
        <div class="candles">
          <div class="light__wave"></div>
          <div class="candle1">
            <div class="candle1__body">
              <div class="candle1__eyes">
                <span class="candle1__eyes-one"></span>
                <span class="candle1__eyes-two"></span>
              </div>
              <div class="candle1__mouth"></div>
            </div>
            <div class="candle1__stick"></div>
          </div>
          
          <div class="candle2">
            <div class="candle2__body">
              <div class="candle2__eyes">
                <div class="candle2__eyes-one"></div>
                <div class="candle2__eyes-two"></div>
              </div>
            </div>
            <div class="candle2__stick"></div>
          </div>
          <div class="candle2__fire"></div>
          <div class="sparkles-one"></div>
          <div class="sparkles-two"></div>
          <div class="candle__smoke-one">

          </div>
          <div class="candle__smoke-two">

          </div>
          
        </div>
        <div class="floor">
        </div>
        

      </div>
    );
  }
}

export default App;
