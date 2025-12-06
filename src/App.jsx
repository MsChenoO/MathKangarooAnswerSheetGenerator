import React, { useState, useRef } from 'react';

function App() {
    return (
    <div style={{backgroundColor: "#764ba2"}}>
        <style>{`
        .title {
          font-family: 'DM Serif Display', serif;
          font-size: 3rem;
          color: white;
          margin-bottom: 0.5rem;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        .subtitle {
          color: rgba(255, 255, 255, 0.9);
          font-size: 1.1rem;
          font-weight: 500;
        }
        `}</style>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h1 className="title">Math Kangaroo</h1>
            <div className="subtitle">Mock Practice Answer Sheet Generator</div>
        </div>

        <div>
            <div>STUDENT NAME</div>
            <div>GRADE</div>
            <div>TEST</div>
            <div>TEST DATE(Optional)</div>
            <div>Note: This generator creates mock practice sheets with randomly generated Test IDs and barcodes for practice purposes only.</div>
            <div>GENERATET</div>
        </div>
    </div>
    );
};

export default App;