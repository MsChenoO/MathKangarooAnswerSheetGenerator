import React, { useState, useRef } from 'react';

const MathKangarooGenerator = () => {
    // Survey form state
    const [studentName, setStudentName] = useState('');
    const [grade, setGrade] = useState('');
    const [testType, setTestType] = useState('');
    const [testDate, setTestDate] = useState('');
    const [showPreview, setShowPreview] = useState(false);
    const previewRef = useRef(null);

    // Answer Sheet consts
    const generateTestId = () => {
        return Math.floor(10000 + Math.random() * 90000);
  };
    const testId = generateTestId();
    const questionCount = parseInt(grade) <= 4 ? 24 : 30;

    const grades = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'
  ];
    const handleGradeChange = (e) => {
        const selectedGrade = e.target.value;
        setGrade(selectedGrade);
        setTestType(`Math Kangaroo - Grade ${selectedGrade}`);
    };

    const handleGeneratePreview = () => {
    if (studentName && grade) {
      setShowPreview(true);
    }
  };

    return (
    <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        minHeight: '100vh',
        padding: '2rem',
        fontFamily: "'Space Grotesk', -apple-system, sans-serif",
    }}>
        <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Serif+Display&display=swap');
        
        .glass-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        }
        
        .label {
          color: white;
          font-weight: 600;
          margin-bottom: 8px;
          font-size: 14px;
          letter-spacing: 1px;
        }

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

        .input-field:focus {
          outline: none;
          border-color: #667eea;
          background: white;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.2);
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
        
        .btn {
          padding: 14px 28px;
          border-radius: 12px;
          border: none;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: 'Space Grotesk', sans-serif;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .btn-primary {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          color: white;
          box-shadow: 0 4px 15px rgba(245, 87, 108, 0.4);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(245, 87, 108, 0.6);
        }

        .btn-secondary {
          background: white;
          color: #667eea;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .btn-secondary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
        }
        `}</style>

        {/* Main survey starts here*/}
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem'  }}>
                <h1 className="title">Math Kangaroo</h1>
                <div className="subtitle">Mock Practice Answer Sheet Generator</div>
            </div>

            {!showPreview ? (
                <div className="glass-card" style={{ padding: '3rem', maxWidth: '600px', margin: '0 auto' }}>
                <div style={{ marginBottom: '24px' }}>
                    <label>Student Name *</label>
                    <input
                        type="text"
                        required
                        placeholder="Enter Student's full Name"
                        className='input-field'
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                    />
                </div>

                <div style={{ marginBottom: '24px' }}>
                    <label className="label">Grade *</label>
                    <select
                        required
                        placeholder="Enter Student's full Name"
                        className='input-field'
                        value={grade}
                        onChange={handleGradeChange}
                        style={{ cursor: 'pointer' }}
                    >
                        {grades.map(g => (
                  <option key={g} value={g}>Grade {g}</option>
                ))}
                    </select>
                </div>

                <div style={{ marginBottom: '24px' }}>
                    <label className="label">Test</label>
                    <input
                        type="text"
                        className='input-field'
                        value={testType}
                    />
                </div>

                <div style={{ marginBottom: '32px' }}>
                    <label className="label">Test Date (Optional)</label>
                    <input
                        type="date"
                        className="input-field"
                        value={testDate}
                        onChange={(e) => setTestDate(e.target.value)}
                    />
                </div>

                <div style={{ 
                    background: 'rgba(255, 255, 255, 0.2)', 
                    padding: '16px', 
                    borderRadius: '12px',
                    marginBottom: '24px',
                    color: 'white'
                 }}>
                    <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.6' }}>
                        <strong>📝 Note:</strong> This generator creates mock practice sheets with randomly generated Test IDs and barcodes for practice purposes only.
                    </p>
                </div>

                <button
                    className="btn btn-primary"
                    OnClick={handleGeneratePreview}
                    disabled={!studentName || !grade}
                    style={{
                        width: '100%',
                        opacity: (!studentName || !grade) ? 0.5 : 1,
                        cursor: (!studentName || !grade) ? 'not-allowed' : 'pointer'
                    }}
                >
                    Generate Answer Sheet Preview
                </button>
            </div>
            ) : (
                <div>
                <div style={{ 
                    display: 'flex', 
                    gap: '12px', 
                    justifyContent: 'center',
                    marginBottom: '2rem',
                    flexWrap: 'wrap'
                    }}>
                        <button className="btn btn-secondary" onClick={downloadAsPDF}>
                        <Download size={20} />
                        Download PDF
                        </button>
                        <button className="btn btn-secondary" onClick={downloadAsPNG}>
                          <FileImage size={20} />
                         Download PNG
                        </button>
                        <button className="btn btn-secondary" onClick={handlePrint}>
                            <Printer size={20} />
                            Print
                        </button>
                        <button 
                            className="btn btn-secondary" 
                            onClick={() => setShowPreview(false)}
                            style={{ background: '#f5576c', color: 'white' }}
                        >
                            ← Back to Form
                        </button>
                        </div>

                        <div style={{ 
                            background: 'white', 
                            borderRadius: '12px', 
                            padding: '2rem',
                            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)'
                        }}>
                            <div ref={previewRef} id="answer-sheet">
                                <AnswerSheet
                                    studentName={studentName}
                                    grade={grade}
                                    testId={testId}
                                    testDate={testDate}
                                    questionCount={questionCount}
                                />
                            </div>
                        </div>
                    </div>
            )}
        </div>
    </div>
    );
};

export default MathKangarooGenerator;