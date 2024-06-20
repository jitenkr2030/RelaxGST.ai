import React, { useEffect, useContext } from 'react';
import { ReportingContext } from '../../context/ReportingContext';

const ReportList = () => {
  const { reports, fetchReports } = useContext(ReportingContext);

  useEffect(() => {
    fetchReports();
  }, []);

  return (
    <div>
      <h1>Reports</h1>
      <ul>
        {reports.map((report) => (
          <li key={report.id}>{report.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ReportList;
