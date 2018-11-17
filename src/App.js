import React, { Component } from 'react';
import './App.css';
import Director from './components/Director.js'
import AllQuotes from './components/AllQuotes.js'
import Jerry from './components/Jerry.js'
import George from './components/George.js'
import Elaine from './components/Elaine.js'
import Kramer from './components/Kramer.js'
import Home from './components/Home.js'
import Trivia from './components/Trivia.js'
import CorrectMsg from './components/CorrectMsg.js'
import IncorrectMsg from './components/IncorrectMsg.js'
import Footer from './components/Footer.js'
import axios from 'axios';

const BASE_URL = 'https://seinfeld-quotes.herokuapp.com/quotes';
const RAN_URL = 'https://seinfeld-quotes.herokuapp.com/random';
class App extends Component {
  constructor(props){
      super(props);
      this.state = {
        curView: '',
        quote: '',
        ranQuote: '',
        on:'',
        isSubmitted: false

      }
      this.fetchChars = this.fetchChars.bind(this);
      this.setView = this.setView.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }


async handleSubmit(e) {
  let speaker = ''
    e.preventDefault();
  if (this.state.ranQuote['author'] !== "Elaine" &&
      this.state.ranQuote['author'] !== "Jerry" &&
      this.state.ranQuote['author'] !== "Kramer" &&
      this.state.ranQuote['author'] !== "George"
    ){
      speaker = "Other"
    }else {
      speaker = this.state.ranQuote['author']
    }

        if (this.state.on === speaker) {
           this.setState ( {isCorrect: true});
          // return <CorrectMsg />;
        } else {
          this.setState ( {isCorrect: false});
          // return <IncorrectMsg />;
          // alert(`incorrect it was ${speaker}`)
        }
        const ranResp = await axios.get(RAN_URL);
        this.setState({
          ranQuote: ranResp.data,
          isSubmitted: true
        });
        }


handleChange(e) {
         const id = e.target.id;
         const value = e.target.value;
         this.setState({
           on: id
         });
       }
async componentDidMount() {
  this.fetchChars();
}


async fetchChars() {
             const resp = await axios.get(BASE_URL);
             const ranResp = await axios.get(RAN_URL);

             this.setState({
               quote: resp.data.quotes,
               ranQuote: ranResp.data,
               curView: []

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
      case 'Trivia':
          return <Trivia
          holdrandata = {this.state.ranQuote}
          handleChange= {this.handleChange}
          handleSubmit= {this.handleSubmit}
          handleSubmitTwo = {this.handleSubmitTwo}
          handleViewChange={this.setView}
          isCorrect = {this.state.isCorrect}
          isSubmitted = {this.state.isSubmitted}
            />

      default:
      return <Director
      handleViewChange={this.setView}
       />


   }
}
render() {
  return (
    <div className="App">
        <Home
          handleViewChange={this.setView}

          />

        {this.getView()}
        <Footer />
      </div>

  );
}
}

export default App;
