//this is a standalone js file
import React from 'react';
import ReactDOM from 'react-dom/client';

//import store
import { configureStore } from '@reduxjs/toolkit'

//import redux state slice
import { createSlice } from '@reduxjs/toolkit'

//import Provider
import { Provider } from 'react-redux'

//import mapStateToProps and mapDispatchToProps updated alternatives from react-redux
import { useSelector, useDispatch } from 'react-redux'

//import css/scss/js
import "./Styles.scss"
import "animate.css"
import { colorgenerator, keygenerator } from "./style.js"

//import boostrap elements
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

//import react-bootstrap
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

//import jquery
import $ from "jquery"
window.jQuery = $

//database--
const dataBase = [
  {quote: 'Beauty perishes in life, but is immortal in art.', author: 'Leonardo da Vinci'},
  {quote: "The job of the architect today is to create beautiful buildings. That's all.", author: 'Philip Johnson'},
  {quote: 'Sometimes, you have to give up. Sometimes, knowing when to give up, when to try something else, is genius. Giving up doesn’t mean stopping. Don’t ever stop.', author: 'Phil Knight'},
  {quote: 'When I’m working on a problem, I never think about its beauty, I just think about how to solve the problem, but when I finish it, if the solution is not beautiful, I know it’s wrong.', author: 'Richard Buckminster Fuller'},
  {quote: 'If a project is intense, valid, and has a powerful idea, its imperfections will be in the background.', author: 'Alberto Campo Baeza'},
  {quote: "Early in my career...I had to choose between an honest arrogance and a hypercritical humility... I deliberately choose an honest arrogance, and I've never been sorry.", author: 'Frank Lloyd Wright'},
  {quote: 'Sometimes, you have to give up. Sometimes, knowing when to give up, when to try something else, is genius. Giving up doesn’t mean stopping. Don’t ever stop.', author: 'Phil Knight'},
  {quote: 'Any architectural work that does not express serenity is an error.', author: 'Luis Barragán'},
  {quote: 'The difference between good and bad architecture is the time you spend on it.', author: 'David Chipperfield'},
  {quote: "A design isn't finished until someone is using it.", author: 'Brenda Laurel'},
  {quote: 'Everything is designed. Few things are designed well.', author: 'Brian Reed'},
  {quote: 'Sometimes, you have to give up. Sometimes, knowing when to give up, when to try something else, is genius. Giving up doesn’t mean stopping. Don’t ever stop.', author: 'Phil Knight'},
  {quote: 'Logic will get you from A to B. Imagination will take you anywhere.', author: 'Albert Einstein'},
  {quote: 'Hard work beats talent when talent doesn’t work hard.', author: 'Tim Notke'},
  {quote: 'Success is often achieved by those who don’t know that failure is inevitable.', author: 'Coco Chanel'},
  {quote: 'Do the best you can until you know better. Then when you know better, do better.', author: 'Maya Angelou'},
  {quote: 'Sometimes, you have to give up. Sometimes, knowing when to give up, when to try something else, is genius. Giving up doesn’t mean stopping. Don’t ever stop.', author: 'Phil Knight'},
  {quote: 'Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.', author: 'Pele'},
  {quote: 'People who say it cannot be done should not interrupt those who are doing it.', author: 'George Bernard Shaw'},
  {quote: 'I am who I am today because of the choices I made yesterday.', author: 'Eleanor Roosevelt'},
  {quote: 'Whatever we believe about ourselves and our ability comes true for us.', author: 'Susan L. Taylor'},
  {quote: 'Sometimes, you have to give up. Sometimes, knowing when to give up, when to try something else, is genius. Giving up doesn’t mean stopping. Don’t ever stop.', author: 'Phil Knight'}
];

//React App --
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Quoter />
    );
  }
}

function Quoter() {
  //now give react access to redux state and action creator using react-redux hooks
  const mapQuote = useSelector((state) => state.generator.quote);
  const mapAuthor = useSelector((state) => state.generator.author);
  const mapDispatch = useDispatch();

  //twitter href_ whatsapp href
  let twitterhref = `https://twitter.com/intent/tweet?text=quote:"${mapQuote}"by -${mapAuthor}`
  let whatsapphref = `https://api.whatsapp.com//send?text=quote:"_${mapQuote}_"by -*${mapAuthor}*`
  
  //jquery
  let randomcolor = colorgenerator();
  $(document).ready(function(){
    $("#page-background").addClass("d-flex flex-column justify-content-center align-items-center vh-100");
    $("#quote-box").addClass("d-flex flex-column bg-light shadow p-4 rounded-2");
    $("#text").addClass("blockquote fs-4");
    $("#author").addClass("blockquote-footer");
    $("#tweet-quote").addClass("text-middle");
    $("#whatsapp-quote").addClass("text-middle");
    $("#new-quote").addClass("btn btn-primary text-nowrap fw-semibold");
    $("#developer").addClass("fs-6 fw-light text-light mt-3");
    
    $("#page-background, #new-quote").each(function(){
      $(this).css("background-color", randomcolor);
    });
    $("#text, #author, #tweet-quote, #whatsapp-quote").each(function(){
      $(this).css("color", randomcolor);
    });
  });

  return (
    <div id="page-background" key={keygenerator()}>
      <div id="quote-box">
        <div className="row text-center my-3 fs-5 fw-semibold">
          <p id="text"><i className="fa-solid fa-quote-left"></i><span>&#160;&#160;</span>{mapQuote}</p>
        </div>
        <div className="row text-end">
          <p id="author">{mapAuthor}</p>
        </div>
        <div className="row">
          <div className="d-flex justify-content-between align-items-center my-3">
            <div className="fs-2">
              <a id="tweet-quote" href={twitterhref} target="_blank"><i className="fa-brands fa-square-twitter"></i></a>
              <span>&#160;</span>
              <a id="whatsapp-quote" accesskey="w" href={whatsapphref} target="_blank"><i className="fa-brands fa-square-whatsapp"></i></a>
            </div>
            <button id="new-quote" accesskey="n" onClick={() => mapDispatch(changeQuote())}>New-Quote</button>
          </div>
        </div>
      </div>
      <div className="row text-center">
        <p id="developer">by<a href="https://github.com/aniketgunjekar" target="_blank"> Aniket</a></p>
      </div>
    </div>
  );
}

//Redux (toolkit) --
const initialState = {
  quote: dataBase[Math.round(Math.random() * (dataBase.length - 1))].quote,
  author: dataBase[Math.round(Math.random() * (dataBase.length - 1))].author
}

const quoteSlice = createSlice({
  name: 'generator',
  initialState,
  reducers: {
    changeQuote: () => {
      return {
        quote: dataBase[Math.round(Math.random() * (dataBase.length - 1))].quote,
        author: dataBase[Math.round(Math.random() * (dataBase.length - 1))].author
      };
    }
  }
});

//generate actioncreators using destructuring assignment and also get combined reducer
const { changeQuote } = quoteSlice.actions;
const quoteReducer = quoteSlice.reducer;

const store = configureStore({
  reducer: {
    generator: quoteReducer
  }
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// react-redux -- 
const output = ReactDOM.createRoot(document.getElementById('page'));
output.render(
  <Provider store={store}>
    <App />
  </Provider>);
