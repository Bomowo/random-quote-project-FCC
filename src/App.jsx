import {useState, useEffect} from 'react'

function App() {

  const [quote, setQuote] = useState({})
  
  useEffect(() => {
    fetchNewQuote()
  }, [])

  function fetchNewQuote () {
    fetch('https://api.quotable.io/quotes/random')
    .then(response => response.json())
    .then(json => {
      setQuote({
        text: json[0].content,
        author: json[0].author
      })
    })
    .catch(error => console.log(error))
  }


  return (
    <div className="quote-box" id="quote-box">

      <div className="quote-container">
        <h1 className="quote" id="text">{quote && quote.text}</h1>
        <h2 className="quote-author" id="author">{quote && quote.author}</h2>
      </div>

      <div className="buttons-container">
        <button className="twitter-send" id="tweet-quote">Send that quote to twitter</button>
        <button className="get-new-quote" id="new-quote" onClick={fetchNewQuote}>I want another fire quote</button>
      </div>

    </div>
  )
}

export default App
