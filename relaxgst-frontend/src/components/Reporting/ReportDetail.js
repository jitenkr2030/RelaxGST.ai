import React, { useContext, useEffect } from 'react';
import { ReportingContext } from '../../context/ReportingContext';

const ReportDetail = ({ match }) => {
  const { report, fetchReport } = useContext(ReportingContext);

  useEffect(() => {
    fetchReport(match.params.id);
  }, [match.params.id]);

  return (
    <div>
      <h1>Report Detail</h1>
      <p>Title: {report.title}</p>
      <p>Content: {report.content}</p>
    </div>
  );
};

export default ReportDetail;
