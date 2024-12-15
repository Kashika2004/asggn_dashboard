// import React, { useState } from 'react';
// import styles from './AssessmentTable.module.css';

// const assessments = [
//   { title: 'JavaScript Basics', status: 'Completed', score: 85, date: '2024-12-01' },
//   { title: 'React Advanced', status: 'In Progress', score: null, date: '2024-12-05' },
//   { title: 'CSS Fundamentals', status: 'Not Started', score: null, date: '2024-12-10' },
// ];

// const AssessmentTable = () => {
//   const [sortField, setSortField] = useState('date');

//   const sortedData = [...assessments].sort((a, b) =>
//     sortField === 'date' ? new Date(a.date).getTime() - new Date(b.date).getTime() : a.status.localeCompare(b.status)
//   );

//   return (
//     <table className={styles.table}>
//       <thead>
//         <tr>
//           <th className={styles.th} onClick={() => setSortField('date')}>Date Assigned</th>
//           <th className={styles.th} onClick={() => setSortField('status')}>Status</th>
//           <th className={styles.th}>Title</th>
//           <th className={styles.th}>Score</th>
//         </tr>
//       </thead>
//       <tbody>
//         {sortedData.map((row, index) => (
//           <tr key={index} className={styles.tr}>
//             <td className={styles.td}>{row.date}</td>
//             <td className={styles.td}>{row.status}</td>
//             <td className={styles.td}>{row.title}</td>
//             <td className={styles.td}>{row.score || 'N/A'}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default AssessmentTable;


import React, { useState } from 'react';
import styles from './AssessmentTable.module.css';

const assessments = [
  { title: 'JavaScript Basics', status: 'Completed', score: 85, date: '2024-12-01' },
  { title: 'React Advanced', status: 'In Progress', score: null, date: '2024-12-05' },
  { title: 'CSS Fundamentals', status: 'Not Started', score: null, date: '2024-12-10' },
];

const AssessmentTable = () => {
  const [searchQuery, setSearchQuery] = useState(''); // State for search query
  const [sortField, setSortField] = useState('date'); // State for sorting

  // Filter assessments based on search query
  const filteredAssessments = assessments.filter((assessment) =>
    assessment.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort the filtered data
  const sortedData = [...filteredAssessments].sort((a, b) =>
    sortField === 'date' ? new Date(a.date).getTime() - new Date(b.date).getTime() : a.status.localeCompare(b.status)
  );

  return (
    <div>
      {/* Search Bar */}
      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Search assessments..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.searchBar} // Use a class for consistent styling
        />
      </div>

      {/* Assessment Table */}
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th} onClick={() => setSortField('date')}>Date Assigned</th>
            <th className={styles.th} onClick={() => setSortField('status')}>Status</th>
            <th className={styles.th}>Title</th>
            <th className={styles.th}>Score</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.length > 0 ? (
            sortedData.map((row, index) => (
              <tr key={index} className={styles.tr}>
                <td className={styles.td}>{row.date}</td>
                <td className={styles.td}>{row.status}</td>
                <td className={styles.td}>{row.title}</td>
                <td className={styles.td}>{row.score || 'N/A'}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className={styles.noData}>
                No assessments found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AssessmentTable;