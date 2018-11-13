import React, { Component } from 'react';
import './App.css';
import Director from './components/Director.js'
import Welcome from './components/Welcome.js'
import AllQuotes from './components/AllQuotes.js'
import Jerry from './components/Jerry.js'
import George from './components/George.js'
import Elaine from './components/Elaine.js'
import Kramer from './components/Kramer.js'
import axios from 'axios';

const BASE_URL = 'https://seinfeld-quotes.herokuapp.com/quotes';

class App extends Component {
  constructor(props){
      super(props);
      this.state = {
        currentView: '',
        quote: '',
        id: ''
      }
      this.fetchChars = this.fetchChars.bind(this);
      this.setView = this.setView.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
async handleSubmit(e) {
        e.preventDefault();
      }

handleChange(e) {
         const name = e.target.name;
         const value = e.target.value;
         this.setState({
           [name]: value
         });
       }
async componentDidMount() {
  this.fetchChars();
}
async fetchChars() {
             const resp = await axios.get(BASE_URL);
             this.setState({
               quote: resp.data.quotes

             });

  }
async setView(view) {
    this.setState({
     curView: view
    });
  }

getView(){
    const view = this.state.curView
    switch(view){

    case 'George':
    return <George

    holddata = {this.state.quote}
    />

    case 'Jerry':
    return <Jerry
    holddata = {this.state.quote}
    holddata2 = {this.state.id}

      />
    case 'Kramer':
      return <Kramer
      holddata = {this.state.quote}

        />
      case 'Elaine':
        return <Elaine
        holddata = {this.state.quote}

          />
    case 'AllQuotes':
      return <AllQuotes
      holddata = {this.state.quote}

        />
      default:
      return <Welcome

       />
   }
}
render() {
  return (
    <div className="App">
    <Director
    handleViewChange={this.setView}
     />
        {this.getView()}
      </div>

  );
}
}

export default App;
// console.log(resp.data.quotes[0])
