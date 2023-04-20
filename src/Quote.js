import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import "./Quotestyle.css";


function Quote() {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");

    useEffect(() => {
        fetch("http://api.quotable.io/random")
            .then(res => res.json())
            .then(
                (quote) => {
                    setQuote(quote.content);
                    setAuthor(quote.author);
                }
            )
    }, []);

    const fetchNewQuote = () => {
        fetch("http://api.quotable.io/random")
            .then(res => res.json())
            .then(
                (quote) => {
                    setQuote(quote.content);
                    setAuthor(quote.author);
                }
            )
    }

    const handleDownload = () => {
        const element = document.createElement('a');
        const file = new Blob([quote + ' - ' + author], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = 'quote.txt';
        document.body.appendChild(element);
        element.click();
    }

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: 'Quote',
                text: `${quote} - ${author}`,
            })
                .then(() => console.log('Shared successfully'))
                .catch(error => console.error('Error sharing:', error));
        } else {
            console.log('Web Share API not supported');
        }
    }

const s1 = {width:'250px'};
const s2 ={borderRadius : '15px'};

    return (
        <div className='App'>
            <div className="quote">
                <h2>{quote}</h2>
                <small>-<h3>{author}</h3>-</small>
            </div><br />
            <center >
                <Button className="btn"  style={{...s1, ...s2}}  onClick={fetchNewQuote}>Hit Me</Button>
                <br></br>
                <br></br>
                <Button className="btn" style={{...s1, ...s2}} onClick={handleDownload}>Download Quote</Button>
                <br></br>
                <br></br>
                <Button className="btn" style={{...s1, ...s2}}  onClick={handleShare}>Share Quote</Button>
            </center>
        </div>
    )
}

export default Quote;
