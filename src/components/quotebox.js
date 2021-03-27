import React from 'react'


function Quotebox({ quote, author, handleQuote, style, styleBtn, tweet, fbShare }) {
    return (
        <div id="quote-box" className="quote-box" style={style} >
            <p id="text" className="text-quote" >"{quote}"</p><p id="author" className="text-author" >-{author}</p>
            <div className="icons-btn">
                <div className="icons">
                    <a href={`https://twitter.com/intent/tweet?text=${tweet}`} target="_blank" id="tweet-quote" ><i class="fab fa-twitter-square fa-2x" aria-hidden="true"></i></a>
                    <a href="https://www.facebook.com/sharer/sharer.php?u=https://codepen.io/BasKuBerlin/full/ExZPzGe" target="_blank" rel="noreferrer"><i class="fab fa-facebook-square fa-2x"></i></a>
                </div>
                <button id="new-quote" className="quote-btn" style={styleBtn} onClick={handleQuote}>Inspire Me</button>
            </div>
        </div>
    )
};

export default Quotebox;
