import React from 'react';
import Form from 'react-bootstrap/Form';

function Weather() {
  return (
    <div
      style={{ 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        maxWidth: '100%',
        margin: '0 auto',
        padding: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
      }}
    >
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            placeholder="Enter country"
            style={{
              borderRadius: '18px',
              padding: '10px',
              width: '400px',
              marginTop: '30px',
            }}
          />
        </Form.Group>
      </Form>
    </div>
  );
}

export default Weather;