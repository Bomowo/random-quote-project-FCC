import {useState, useEffect} from 'react'
import {FaArrowRight, FaTwitter} from 'react-icons/fa'

function App() {

  const [quote, setQuote] = useState({
    text: '',
    author: ''
  })
  
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

  const twitterHref = `https://twitter.com/intent/tweet?text="${quote.text}" -${quote.author}`


  return (
    <div className="quote-box" id="quote-box">

      <div className="quote-container">
        <h1 className="quote" id="text">&quot;{quote && quote.text}&quot;</h1>
        <h2 className="quote-author" id="author">- {quote && quote.author}</h2>
      </div>

      <div className="buttons-container">
        <a className="twitter-send" id="tweet-quote" href={twitterHref}><FaTwitter/></a>
        <button className="get-new-quote" id="new-quote" onClick={fetchNewQuote}><FaArrowRight/></button>
      </div>

    </div>
  )
}

export default App



