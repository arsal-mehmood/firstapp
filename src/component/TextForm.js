import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function TextForm(props) {
    const [text, setText] = useState('');
    const [loading, setLoading] = useState(false);
    const [buttonText, setButtonText] = useState('Upper Case');

    const handleClickUp = () => {
        setButtonText('Converting...');
        setLoading(true);
        
        setTimeout(() => {
            let newText = text.toUpperCase();
            setText(newText);
            setButtonText('Upper Case'); // Reset button text after conversion
            setLoading(false);
            props.showAlert('Converted to upper case','light');
        }, 3000);
    }

    const handleClickLo = () => {
        setText(text.toLowerCase());
        props.showAlert('Converted to Lower case','light');
    }

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const handleClear = () => {
        setText('');
        props.showAlert('Area is cleared','light');
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text).then(() => {
            props.showAlert('Text Copied','light');
        }).catch((err) => {
            console.error('Failed to copy text: ', err);
        });
       
    }

    const handleRemoveSpaces = () => {
        let newText = text.split(/\s+/).filter(Boolean).join(' ');
        setText(newText);
        props.showAlert('Remove Extra Space','light');
    }

    const wordCount = text.trim().split(/\s+/).length;
    const charCount = text.length;
    const readTime = (0.008 * wordCount).toFixed(2);

    return (
        <>
            <div className='container'>
                <h1 className={`text-${props.textColor} mt-5`}>{props.title}</h1>
                <div className="mb-3 mt-4">
                    <textarea
                        className={`form-control shadow-lg bg-${props.mode} text-${props.textColor} outline-dark rounded`}
                        value={text}
                        onChange={handleChange}
                        id="my-text"
                        rows="10"
                    />
                    <button
                        className={`btn btn-outline-${props.textColor} mt-5 mx-1`}
                        onClick={handleClickUp}
                    >
                        {buttonText}
                    </button>
                    <button
                        className={`btn btn-outline-${props.textColor} mt-5 mx-1`}
                        onClick={handleClickLo}
                    >
                        Lower Case
                    </button>
                    <button
                        className={`btn btn-outline-${props.textColor} mt-5 mx-1`}
                        onClick={handleClear}
                    >
                        Clear Text
                    </button>
                    <button
                        className={`btn btn-outline-${props.textColor} mt-5 mx-1`}
                        onClick={handleCopy}
                    >
                        Copy Text
                    </button>
                    <button
                        className={`btn btn-outline-${props.textColor} mt-5 mx-1`}
                        onClick={handleRemoveSpaces}
                    >
                        Remove Extra Spaces
                    </button>
                </div>
            </div>
            {loading && (
                <div className="container my-3 text-center">
                    <div className="spinner-border text-danger" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}

            {text && !loading && (
                <div className={`container text-${props.textColor} my-3`}>
                    <h2 >Your Text Summary</h2>
                    <p>{wordCount} - words {charCount} - characters</p>
                    <p>{readTime} - minutes to read</p>
                    <h2>Preview</h2>
                    <p>{text.length>0?text:"Enter some text to preview it"}</p>
                </div>
            )}
        </>
    );
}

TextForm.propTypes = {
    title: PropTypes.string.isRequired
}

TextForm.defaultProps = {
    title: 'Hello, this is a default value'
}
