import React from 'react';
import Button from '@material-ui/core/Button';

function HomePage() {
    return (
      <div>
        <h1 id="welcome">Welcome to the World of Coffee! (basically the same as any other world just with coffee.)</h1>
        <div className="earth"></div>
        <Button variant="contained" color="inherit">
          Enter Coffee World!
        </Button>
      </div>
  )}

export default HomePage;
