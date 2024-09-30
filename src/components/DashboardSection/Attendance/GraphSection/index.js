// import React, { useEffect, useState } from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// const graphSection = () => {
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTime(new Date());
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   const data = [
//     { name: '01 Sep', Daily: 80 },
//     { name: '02 Sep', Daily: 91 },
//     { name: '03 Sep', Daily: 75 },
//     { name: '04 Sep', Daily: 85 },
//     { name: '05 Sep', Daily: 60 },
//     { name: '06 Sep', Daily: 70 },
//     { name: '07 Sep', Daily: 90 }
//   ];

//   return (
//     <div className="clock-graph-container">
//       {/* Clock Section */}
//       <div className="clock-container">
        
// <div className="small-clock">
//           <div className="hour-hand" style={{ transform: `rotate(${(time.getHours() % 12) * 30}deg)` }} />
//           <div className="minute-hand" style={{ transform: `rotate(${time.getMinutes() * 6}deg)` }} />
//           <div className="second-hand" style={{ transform: `rotate(${time.getSeconds() * 6}deg)` }} />
//           <div className="center-circle" />
//         </div>
//         <div className="time-details">
//           <div className="in-time">
//             <span>In Time -</span>
//             <span>{time.getHours()}:{time.getMinutes().toString().padStart(2, '0')}</span>
//           </div>
//           <div className="out-time">
//             <span>Out Time -</span>
//             <span>6:30</span>
//           </div>
//         </div>
//       </div>

//       {/* Graph Section */}
//       <div className="graph-section">
//         <div className='upperContainer'> 
//         <h3>Attendance Chart</h3>
//         <ResponsiveContainer width="100%" height={250}>
//           <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 0 }}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Line type="monotone" dataKey="Daily" stroke="#00bfae" strokeWidth={2} />
//           </LineChart>
//         </ResponsiveContainer>
//         </div>
//         <div className='bottomContainer'>
//             <div className='icon'>ICON</div>
//             <button className='ctaBtn'>Punch</button>
//         </div>
        
//       </div>
//     </div>

//   );
// };

// export default graphSection;




// const Dashboard = () => {
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTime(new Date());
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   const data = [
//     { name: '01 Sep', Daily: 80 },
//     { name: '02 Sep', Daily: 91 },
//     { name: '03 Sep', Daily: 75 },
//     { name: '04 Sep', Daily: 85 },
//     { name: '05 Sep', Daily: 60 },
//     { name: '06 Sep', Daily: 70 },
//     { name: '07 Sep', Daily: 90 }
//   ];

//   return (
//     <div className="small-clock-graph-container">
//       {/* Clock Section */}
//       <div className="small-clock-container">
//         <div className="small-clock">
//           <div className="hour-hand" style={{ transform: `rotate(${(time.getHours() % 12) * 30}deg)` }} />
//           <div className="minute-hand" style={{ transform: `rotate(${time.getMinutes() * 6}deg)` }} />
//           <div className="second-hand" style={{ transform: `rotate(${time.getSeconds() * 6}deg)` }} />
//           <div className="center-circle" />
//         </div>
//         <div className="time-details">
//           <div className="in-time">
//             <span>In Time</span>
//             <span>{time.getHours()}:{time.getMinutes().toString().padStart(2, '0')}</span>
//           </div>
//           <div className="out-time">
//             <span>Out Time</span>
//             <span>6:30</span>
//           </div>
//         </div>
//       </div>

//       {/* Graph Section */}
//       <div className="small-graph-section">
//         <h3>Attendance Chart</h3>
//         <ResponsiveContainer width="100%" height={150}>
//           <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 0 }}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Line type="monotone" dataKey="Daily" stroke="#00bfae" strokeWidth={2} />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import Punchin from "../../../../image/Punch in.png";

const GraphSection = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const data = [
    { name: '01 Sep', Daily: 80 },
    { name: '02 Sep', Daily: 91 },
    { name: '03 Sep', Daily: 75 },
    { name: '04 Sep', Daily: 85 },
    { name: '05 Sep', Daily: 60 },
    { name: '06 Sep', Daily: 70 },
    { name: '07 Sep', Daily: 90 }
  ];

  return (
    <div className="clock-graph-container">
      {/* Clock Section */}
      <div className="clock-container">
        <div className="small-clock">
          <div className="hour-hand" style={{ transform: `rotate(${(time.getHours() % 12) * 30}deg)` }} />
          <div className="minute-hand" style={{ transform: `rotate(${time.getMinutes() * 6}deg)` }} />
          <div className="second-hand" style={{ transform: `rotate(${time.getSeconds() * 6}deg)` }} />
          <div className="center-circle" />
        </div>
        <div className="time-details">
          <div className="in-time">
            <span>In Time -</span>
            <span>{time.getHours()}:{time.getMinutes().toString().padStart(2, '0')}</span>
          </div>
          <div className="out-time">
            <span>Out Time -</span>
            <span>6:30</span>
          </div>
        </div>
      </div>

      {/* Graph Section */}
      <div className="graph-section">
        <div className="upperContainer">
          <h3>Attendance Chart</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="Daily" stroke="#00bfae" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="bottomContainer">
          <div className="icon-container">
          <img src={Punchin} alt="Late" />
    </div>
          <button className="ctaBtn">Punch</button>
        </div>
      </div>
    </div>
  );
};

export default GraphSection;
