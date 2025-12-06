import React, { useState, useRef } from 'react';

function App() {
    return (
    <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        minHeight: '100vh',
        padding: '2rem'
    }}>
        <style>{`
        .input-field {
          background: rgba(255, 255, 255, 0.9);
          border: 2px solid transparent;
          border-radius: 12px;
          padding: 14px 18px;
          font-size: 16px;
          font-family: 'Space Grotesk', sans-serif;
          width: 100%;
          transition: all 0.3s ease;
          font-weight: 500;
        }
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
        {/* <div style={{ maxWidth: '1200px', margin: '0 auto' }}> */}
            <div style={{ textAlign: 'center', marginBottom: '3rem'  }}>
                <h1 className="title">Math Kangaroo</h1>
                <div className="subtitle">Mock Practice Answer Sheet Generator</div>
            </div>

            <div>
                <div style={{ marginBottom: '24px' }}>
                    <label>Student Name</label>
                    <input
                        type="text"
                        required
                        placeholder="Enter Student's full Name"
                        className='input-field'
                    />
                </div>
                <div style={{ marginBottom: '24px' }}>
                    <label>Grade</label>
                    <select
                        required
                        placeholder="Enter Student's full Name"
                        className='input-field'
                    />
                </div>
                <div style={{ marginBottom: '24px' }}>
                    <label>Test</label>
                    <input
                        type="text"
                        required
                        className='input-field'
                    />
                </div>
                <div style={{ marginBottom: '32px' }}>
                    <label className="label">Test Date (Optional)</label>
                    <input
                        type="date"
                        className="input-field"
                    />
                </div>
                <div>
                    <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.6' }}>
                        <strong>📝 Note:</strong> This generator creates mock practice sheets with randomly generated Test IDs and barcodes for practice purposes only.
                    </p>
                </div>
                <button
                    className="btn btn-primary"
                >
                    Generate Answer Sheet Preview
                </button>
            </div>
        </div>
    // </div>
    );
};

export default App;