

function App() {


  return (
    <div className="quote-box" id="quote-box">

      <div className="quote-container">
        <h1 className="quote" id="text">Some random quote from famous person</h1>
        <h2 className="quote-author" id="author">Name of said person</h2>
      </div>

      <div className="buttons-container">
        <button className="twitter-send" id="tweet-quote">Send that quote to twitter</button>
        <button className="get-new-quote" id="new-quote">I want another fire quote</button>
      </div>

    </div>
  )
}

export default App
