import React, { useState } from 'react';

function Pagination({ total, pageSize, current, onChange }) {
  const totalPages = Math.ceil(total / pageSize);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  if (totalPages <= 1) return null;

  return (
    <div className="pagination-container">
      <button 
        className="nav-btn"
        onClick={() => onChange(current - 1)} 
        disabled={current === 1}
      >
        Prev
      </button>

      <div className="page-numbers">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => onChange(number)}
            className="page-btn"
          >
            {number}
          </button>
        ))}
      </div>

      <button 
        className="nav-btn"
        onClick={() => onChange(current + 1)} 
        disabled={current === totalPages || totalPages === 0}
      >
        Next
      </button>
    </div>
  );
}

function StudentTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const pageSize = 5;

  const students = [
    { id: 1, name: 'Vikranth', branch: 'CSE' },
    { id: 2, name: 'Raja', branch: 'ECE' },
    { id: 3, name: 'Balraju', branch: 'IT' },
    { id: 4, name: 'Manoj', branch: 'ME' },
    { id: 5, name: 'Anudeep', branch: 'CSE' },
    { id: 6, name: 'Vignesh', branch: 'IT' },
    { id: 7, name: 'Adithya', branch: 'CSE' },
    { id: 8, name: 'Sreeman', branch: 'ECE' },
    { id: 9, name: 'Sai Kiran', branch: 'IT' },
    { id: 10, name: 'Jayanth', branch: 'ME' },
    { id: 11, name: 'Nikhil', branch: 'CSE' },
  ];

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const lastIndex = currentPage * pageSize;
  const firstIndex = lastIndex - pageSize;
  const currentStudents = filteredStudents.slice(firstIndex, lastIndex);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); 
  };

  return (
    <div className="app-container">
      <style>{`
        .app-container {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          max-width: 800px;
          margin: 40px auto;
          padding: 20px;
          color: #333;
        }

        h2 {
          color: #2c3e50;
          padding-bottom: 10px;
          margin-bottom: 10px;
        }

        .search-container {
          margin-bottom: 25px;
        }

        .search-input {
          width: 100%;
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 8px;
          font-size: 16px;
          box-sizing: border-box;
          outline: none;
        }

        .search-input:focus {
          border-color: #3498db;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          box-shadow: 0 2px 15px rgba(0,0,0,0.1);
          border-radius: 8px;
          overflow: hidden;
          margin-bottom: 20px;
        }

        th {
          background-color: #3498db;
          color: white;
          text-align: left;
          padding: 15px;
          text-transform: uppercase;
          font-size: 14px;
        }

        td {
          padding: 12px 15px;
          border-bottom: 1px solid #ddd;
        }

        .no-results {
          text-align: center;
          padding: 20px;
          color: #7f8c8d;
        }

        .pagination-container {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 15px;
          margin-top: 30px;
        }

        .page-numbers {
          display: flex;
          gap: 8px;
        }

        .nav-btn, .page-btn {
          padding: 8px 16px;
          border: 1px solid #ddd;
          background: white;
          cursor: pointer;
          border-radius: 4px;
        }

        .nav-btn:disabled {
          color: #ccc;
          cursor: not-allowed;
          background: #fafafa;
        }
      `}</style>

      <h2>Student Database</h2>

      <div className="search-container">
        <input 
          type="text"
          className="search-input"
          placeholder="Search by name only..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Branch</th>
          </tr>
        </thead>
        <tbody>
          {currentStudents.length > 0 ? (
            currentStudents.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.branch}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="no-results">No students match that name</td>
            </tr>
          )}
        </tbody>
      </table>

      <Pagination 
        total={filteredStudents.length}
        pageSize={pageSize}
        current={currentPage}
        onChange={(pageNumber) => setCurrentPage(pageNumber)}
      />
    </div>
  );
}

export default function App() {
  return (
    <div>
      <StudentTable />
    </div>
  );
}