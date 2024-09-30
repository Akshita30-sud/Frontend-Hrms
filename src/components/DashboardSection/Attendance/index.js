import React from 'react';
import HeaderCard from './HeaderCard';
import GraphSection from './GraphSection';
import CalendarSection from './CalendarSection';
import '../../ComponentsCss/Attendance/Attendance.css';


const Attendance = () => {
  return (
    <div className="container">
      <HeaderCard />
      <div className="clock-graph-section">
        <CalendarSection />
        <GraphSection />
      </div>
    </div>
  );
};

export default Attendance;


