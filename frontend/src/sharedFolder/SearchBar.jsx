import React, { useRef, useState } from 'react';
import './SearchBar.css';
import { Form, FormGroup } from 'reactstrap';

const SearchBar = () => {
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const LocationRef = useRef('');
  const distanceRef = useRef(0);
  const maxGroupSizeRef = useRef(0);

  const searchHandler = () => {
    const location = LocationRef.current.value;
    const distance = distanceRef.current.value;
    const maxGroupSize = maxGroupSizeRef.current.value;

    if (location === '' || distance === '' || maxGroupSize === '') {
      setAlertMessage('All fields are required!');
      setShowAlert(true);

      // Automatically hide alert after 7 seconds
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
      return;
    }
    setAlertMessage(''); // Clear alert if all fields are filled
  };

  return (
    <div className="Search__bar">
      {showAlert && (
        <div className={`custom-alert ${showAlert ? 'show' : 'hide'}`}>
          <span>{alertMessage}</span>
          <button onClick={() => setShowAlert(false)}>X</button>
        </div>
      )}
      <Form className="d-flex align-items-center gap-4 search">
        <FormGroup className="d-flex gap-3 from__group from__group-fast">
          <span><i className="ri-map-pin-line"></i></span>
          <div>
            <h6>Location</h6>
            <input type="text" placeholder="Where are you going?" ref={LocationRef}></input>
          </div>
        </FormGroup>
        <FormGroup className="d-flex gap-3 from__group from__group-fast">
          <span><i className="ri-map-pin-time-line"></i></span>
          <div>
            <h6>Distance</h6>
            <input type="number" placeholder="Distance K/m" ref={distanceRef}></input>
          </div>
        </FormGroup>
        <FormGroup className="d-flex gap-3 from__group">
          <span><i className="ri-group-line"></i></span>
          <div>
            <h6>Max People</h6>
            <input type="number" placeholder="0" ref={maxGroupSizeRef}></input>
          </div>
        </FormGroup>
        <span className="search__icon" type="submit" onClick={searchHandler}>
          <i className="ri-search-eye-line"></i>
        </span>
      </Form>
    </div>
  );
};

export default SearchBar;
