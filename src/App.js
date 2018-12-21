import React, { Component } from 'react';
import './App.css';
import TrackVisibility from 'react-on-screen';

const ComponentToTrack = ({ isVisible }) => {
  const style = {
    background: isVisible ? 'red' : 'blue',
    height: '70vh',
    border: '3px solid black',
    padding: '30px',
    margin: '10px'
  };

  return <div style={style}>{isVisible ? 'Visible' : 'Not visible'}</div>;
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <TrackVisibility>
          <ComponentToTrack />
        </TrackVisibility>
        <TrackVisibility offset={500}>
          <ComponentToTrack />
        </TrackVisibility>
        <TrackVisibility offset={700}>
          <ComponentToTrack />
        </TrackVisibility>
      </div>
    );
  }
}

export default App;
