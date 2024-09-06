import React, { useState } from 'react';
import PropTypes from 'prop-types';


export default function NewTextForm(props) {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [buttonText, setButtonText] = useState('Upper Case');
  const [buttonloText, setButtonloText] = useState('lower Case');
  const [Copytext, setcopytext] = useState('copy Text');
  const [Cleartext, setClearText] = useState('Clear');
  const [RemoveText, setTextSpace] = useState('Remove Spaces');

  //functions//

  const HandelCopy = ()=>{
    setcopytext('loading');
    setLoading(true);
    setTimeout(() => {
      navigator.clipboard.writeText(text).then(()=>{
        alert(`Copied :: ${text}`);
      }).catch((err)=>{
           console.error('error in copy:', err)
      });
      setLoading(false);
      setcopytext('copy Text');

    }, 2000);
  }

  const HandelTextClear = ()=>{
    setClearText('loading');
    setLoading(true);
    setTimeout(() => {
      setText('');
      setLoading(false);
      setClearText('Clear');

    }, 2000);
  }

  
  const HandelTrimSpace = ()=>{
    setTextSpace('loading');
    setLoading(true);
    setTimeout(() => {
      let newText = text.split(/\s+/).filter(Boolean).join(' ');
      setText(newText);
      setLoading(false);
      setTextSpace('Remove Space');

    }, 2000);
  }
  
  
  const handleToLower = ()=>{
    setButtonloText('converting...');
    setLoading(true);
    setTimeout(() => {
      let newText = text.toLowerCase();
      setText(newText);
      setButtonloText('lower Case');
      setLoading(false);
      
    }, 3000);
  }
  const handleToUpper = () => {
    setLoading(true);
    setButtonText('Converting...');

    setTimeout(() => {
      const newText = text.toUpperCase();
      setText(newText);
      setButtonText('Upper Case');
      setLoading(false);
    }, 3000);
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };


  const words = text.trim().split(/\s+/).length;
  const charLength = text.length;
  const minut = (0.008 * words).toFixed(2); 

  return (
    <>
      <h1>{props.title}</h1>
      <div className="mb-3">
        <textarea
          className="form-control shadow-lg bg-body-tertiary"
          value={text}
          onChange={handleChange}
          id="5.o-text"
          rows="8"
        ></textarea>
        <button className="custom-theme-button mt-2 mx-1 " onClick={handleToUpper}>
          {buttonText}
        </button>
        <button className='custom-theme-button mt-2 mx-1' onClick={handleToLower}>{buttonloText}</button>
        <button className='btn btn-primary mt-2 mx-1' onClick={HandelCopy}>{Copytext}</button>
        <button className='btn btn-danger mt-2 mx-1' onClick={HandelTextClear}>{Cleartext}</button>
        <button className='btn btn-success mt-2 mx-1' onClick={HandelTrimSpace}>{RemoveText}</button>



      </div>

      {loading && (
        <div className="container my-3 text-center">
          <div className="spinner-border text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {text && !loading && (
        <div className="container">
          <h2>Text Specs</h2>
          <p>{words} - Words && {charLength} - Characters</p>
          <p>{minut} - Minutes to Read</p>
          <h2>Preview</h2>
          <p>{text}</p>
        </div>
      )}
    </>
  );
}

NewTextForm.propTypes = {
  title: PropTypes.string.isRequired,
};

NewTextForm.defaultProps = {
  title: 'noting.....',
};
