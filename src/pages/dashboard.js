// import React from 'react';
// import Header from '../components/Header';
// import AssessmentTable from '../components/AssessmentTable';
// import SummaryCards from '../components/SummaryCards';

// const Dashboard = () => {
//   return (
//     <div>
//       <Header />
//       <div className="container">
//         <SummaryCards total={3} completed={1} />
//         <AssessmentTable />
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// File: src/pages/dashboard.js
// import React from 'react';
// import Header from '../components/Header'; // Adjust import paths based on your alias or relative structure
// import AssessmentTable from '../components/AssessmentTable';
// import SummaryCards from '../components/SummaryCards';

// const Dashboard = () => {
//   return (
//     <div>
//       <Header />
//       <div className="container">
//         <SummaryCards total={5} completed={3} />
//         <AssessmentTable />
//       </div>
//     </div>
//   );
// };

// export default Dashboard; // Ensure there is a default export


import React from 'react';
import Header from '../components/Header';
import AssessmentTable from '../components/AssessmentTable';
import SummaryCards from '../components/SummaryCards';
import Link from 'next/link';
import '../styles/globals.css';

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <SummaryCards total={3} completed={1} />
        <AssessmentTable />
        <div style={{ marginTop: '2rem' }}>
          <Link href="/new-assessment">
            <button className="start-btn">Start New Assessment</button>
          </Link>
        </div>
      </div>
      <style jsx>{`
        .start-btn {
          padding: 0.75rem 1.5rem;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        .start-btn:hover {
          background-color: #005bb5;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
