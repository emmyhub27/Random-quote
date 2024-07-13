import  {useState, useEffect} from "react";
import { FaTwitter } from "react-icons/fa";
import { ImQuotesLeft } from "react-icons/im";



function Machine() {

    const [quote, setQuote] = useState("Be yourself; everyone else is already taken.");
    const [author, setAuthor] = useState("Oscar Wilde");

    useEffect (() => {
        fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then(
        (quote) => {
             setQuote(quote.content);
             setAuthor(quote.author);
    }
  )
}, []);

let handleClick = () => {
    fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then(
        (quote) => {
            setQuote(quote.content);
             setAuthor(quote.author);
            
    })
}

    return(
        <div id="quote-box">
            <div className="quote">
                <ImQuotesLeft className="mark"/>
              <h2 id="text">{quote}</h2>
              <small id="author">-{author}-</small><br/>
              <button className="btn" onClick={handleClick} id="new-quote">New quote</button><br/>
              <button><a href="twitter.com/intent/tweet" id="tweet-quote"><FaTwitter /></a></button>
            </div>
            
        </div>
    );
  }
  
  export default Machine