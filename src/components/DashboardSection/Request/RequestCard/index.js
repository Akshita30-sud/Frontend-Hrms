// import React from "react";
// import "../../../ComponentsCss/Request/RequestCard/RequestCard.css";
// import details from "./RequestCard.json";

// export default function Sample() {
//   const userData = details.data;
//   const { user, labels } = userData;

//   return (
//     <div className="card">
//       <h3 className="card-title">{userData.request_type}</h3>
//       <p>{labels.raisedLabel}</p>
//       <div className="raised-by-box">
//         <div className="user-details">
//           <p className="user-name">
//             {user.name} ({user.employee_id})
//           </p>
//         </div>

//         <div className="status-approved-row">
//           <div className="status-box">
//             <p className="status">{userData.status}</p>
//           </div>
//         </div>
//       </div>
//       <div className="leaves-box">
//         <p className="box-title">Leave Balance</p>
//         <div className="box leaves-container">
//           <div className="leave-row">
//             <p>Sick Leave:</p>
//             <p className="small-text">{userData.SickLeave}</p>
//           </div>
//           <div className="leave-row">
//             <p className="">Earned Leave:</p>
//             <p className="small-text">{userData.EarnedLeave}</p>
//           </div>
//           <div className="leave-row">
//             <p className="">Paid Leave:</p>
//             <p className="small-text">{userData.PaidLeave}</p>
//           </div>
//         </div>
//       </div>
//       <div className="applied-dates-box">
//         <p className="box-title">Applied Dates</p>
//         <div className="box container">
//           <div className="box container">
//             <p className="insideContainer">
//               <span>08-08-2024 - 10-08-2024 </span>
//               <span className="small-text">Sick Leave</span>
//             </p>
//             <p className="insideContainer">
//               <span>12-08-2024</span>{" "}
//               <span className="small-text">Earned Leave</span>
//             </p>

//             <p className="insideContainer">
//               <span>18-09-2024</span>
//               <span className="small-text">Second Half</span>
//             </p>
//             <p className="insideContainer">
//               <span>19-09-2024</span>{" "}
//               <span className="small-text">Full Day</span>
//             </p>
//           </div>

//           <div className="reasons-box">
//             <p className="box-title">Reasons</p>
//             <p className="box box-reason ">Personal work</p>
//           </div>
//         </div>
//       </div>
//       <div className="approvers-box">
//         <p className="box-title">Details</p>
//         <table className="approvers-table">
//           <thead>
//             <tr>
//               <th>Approver's Name</th>
//               <th>Status</th>
//               <th>Date</th>
//               <th>Remarks</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>abc</td>
//               <td>Approved</td>
//               <td>2024-08-05</td>
//               <td>All good</td>
//             </tr>
//             <tr>
//               <td>xyz</td>
//               <td>Pending</td>
//               <td>2024-08-06</td>
//               <td>Under Review</td>
//             </tr>
//             <tr>
//               <td>klm</td>
//               <td>Rejected</td>
//               <td>2024-08-07</td>
//               <td>Insufficient data</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//       <div className="actions">
//         <button className="approve">{labels.approveLabel}</button>
//         <button className="reject">{labels.rejectedLabel}</button>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../../../ComponentsCss/Request/RequestCard/RequestCard.css";

export default function Sample() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const url = 'request/000102030405060708090a0b0c0d0e0f-2e887aac5ecd153fc6e5e688d8168b568096f1479db31ac51459d135190a4ad0';
      console.log(`${process.env.REACT_APP_REQUEST_URL}/${url}`);

      try {

        const response = await axios.get(
          `${process.env.REACT_APP_REQUEST_URL}/${url}`,
          {
            withCredentials: true,
          }
        );

        const responseData = response.data;

        setUserData(responseData);
        setLoading(false);

        console.log(responseData);


      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data: {error.message}</p>;
  if (!userData) return <p>No data available</p>;

  const { user, labels, approversDetails, appliedDates } = userData;
  const requestData = userData.data.request

  return (
    <div className="card">
      <h3 className="card-title">{requestData.request_type}</h3>

      <p>{labels.raisedLabel}</p>
      <div className="raised-by-box">
        <div className="user-details">
          <p className="user-name">
            {user.name} ({userData.data.request._id})
          </p>
        </div>
        <div className="status-approved-row">
          <div className="status-box">
            <p className="status">{userData.status}</p>
          </div>
        </div>
      </div>
      <div className="leaves-box">
        <p className="box-title">Leave Balance</p>
        <div className="box leaves-container">
          <div className="leave-row">
            <p>Sick Leave:</p>
            <p className="small-text">{userData.SickLeave}</p>
          </div>
          <div className="leave-row">
            <p>Earned Leave:</p>
            <p className="small-text">{userData.EarnedLeave}</p>
          </div>
          <div className="leave-row">
            <p>Paid Leave:</p>
            <p className="small-text">{userData.PaidLeave}</p>
          </div>
        </div>
      </div>

      <div className="applied-dates-box">
        <p className="box-title">Applied Dates</p>
        <div className="box container">
          {appliedDates.map((dateInfo, index) => (
            <p className="insideContainer" key={index}>
              <span>{dateInfo.dateRange}</span>
              <span className="small-text">{dateInfo.leaveType}</span>
            </p>
          ))}
        </div>
        <div className="reasons-box">
          <p className="box-title">Reasons</p>
          <p className="box box-reason">Personal work</p>
        </div>
      </div>

      <div className="approvers-box">
        <p className="box-title">Details</p>
        <table className="approvers-table">
          <thead>
            <tr>
              <th>Approver's Name</th>
              <th>Status</th>
              <th>Date</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            {approversDetails.map((approver, index) => (
              <tr key={index}>
                <td>{approver.approverName}</td>
                <td>{approver.status}</td>
                <td>{approver.date}</td>
                <td>{approver.remarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="actions">
        <button className="approve">{labels.approveLabel}</button>
        <button className="reject">{labels.rejectedLabel}</button>
      </div>
    </div>
  );
}

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import "../../../ComponentsCss/Request/RequestCard/RequestCard.css";

// export default function Sample() {
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       const url = 'request/000102030405060708090a0b0c0d0e0f-2e887aac5ecd153fc6e5e688d8168b568096f1479db31ac51459d135190a4ad0';
//       console.log(`${process.env.REACT_APP_REQUEST_URL}/${url}`);

//       try {
//         const response = await axios.get(
//           `${process.env.REACT_APP_REQUEST_URL}/${url}`,
//           {
//             withCredentials: true,
//           }
//         );

//         const responseData = response.data;
//         setUserData(responseData);
//         setLoading(false);

//         console.log(responseData);
//       } catch (error) {
//         setError(error);
//         setLoading(false);
//       }
//     }

//     fetchData();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error fetching data: {error.message}</p>;
//   if (!userData) return <p>No data available</p>;

//   const requestData = userData.data.request;

//   return (
//     <div className="card">
//       <h3 className="card-title">{requestData.request_type} Request</h3>

//       <div className="raised-by-box">
//         <div className="user-details">

//           <p className="user-name">
//             Requestor ID: {requestData.requestor_id}
//           </p>

//           <p className="user-name">
//             Start Date: {new Date(requestData.start_date).toLocaleDateString()}
//           </p>
//           <p className="user-name">
//             End Date: {new Date(requestData.end_date).toLocaleDateString()}
//           </p>
//         </div>
//       </div>

//       <div className="leaves-box">
//         <p className="box-title">Leave Type</p>
//         <div className="box leaves-container">
//           <div className="leave-row">
//             <p>{requestData.leave_type} Leave</p>
//           </div>
//         </div>
//       </div>

//       <div className="reasons-box">
//         <p className="box-title">Reason</p>
//         <p className="box box-reason">{requestData.reason}</p>
//       </div>

//       <div className="approvers-box">
//         <p className="box-title">Approvers</p>
//         <table className="approvers-table">
//           <thead>
//             <tr>
//               <th>Approver's Name</th>
//               <th>Email ID</th>
//               <th>Employee ID</th>
//             </tr>
//           </thead>
//           <tbody>
//             {requestData.list_of_approvers.map((approver, index) => (
//               <tr key={index}>
//                 <td>{approver.name}</td>
//                 <td>{approver.email_id}</td>
//                 <td>{approver.employee_id}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <div className="actions">
//         <button className="approve">

//           Approve</button>
//         <button className="reject">Reject</button>
//       </div>
//     </div>
//   );
// }

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import "../../../ComponentsCss/Request/RequestCard/RequestCard.css";

// export default function Sample() {
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       const url = 'request/000102030405060708090a0b0c0d0e0f-2e887aac5ecd153fc6e5e688d8168b568096f1479db31ac51459d135190a4ad0';
//       console.log(`${process.env.REACT_APP_REQUEST_URL}/${url}`);

//       try {
//         const response = await axios.get(
//           `${process.env.REACT_APP_REQUEST_URL}/${url}`,
//           {
//             withCredentials: true,
//           }
//         );

//         const responseData = response.data;

//         setUserData(responseData);
//         setLoading(false);

//         console.log(responseData);
//       } catch (error) {
//         setError(error);
//         setLoading(false);
//       }
//     }

//     fetchData();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error fetching data: {error.message}</p>;
//   if (!userData) return <p>No data available</p>;

//   const requestData = userData.data.request;

//   // Static data as per the old code
//   const labels = {
//     raisedLabel: 'Raised By:',
//     approveLabel: 'Approve',
//     rejectedLabel: 'Reject',
//   };

//   const user = {
//     name: 'John Doe',
//     SickLeave: 3,
//     EarnedLeave: 5,
//     PaidLeave: 2,
//   };

//   const appliedDates = [
//     {
//       dateRange: '2024-08-07 to 2024-08-07',
//       leaveType: requestData.leave_type,
//     },
//   ];

//   const approversDetails = requestData.list_of_approvers.map((approver, index) => ({
//     approverName: approver.name,
//     status: 'Pending',
//     date: 'N/A',
//     remarks: 'N/A',
//   }));

//   return (
//     <div className="card">
//       <h3 className="card-title">{requestData.request_type}</h3>

//       <p>{labels.raisedLabel}</p>
//       <div className="raised-by-box">
//         <div className="user-details">
//           <p className="user-name">
//             {user.name} ({requestData._id})
//           </p>
//         </div>
//         <div className="status-approved-row">
//           <div className="status-box">
//             <p className="status">{requestData.completed_or_not ? 'Completed' : 'Pending'}</p>
//           </div>
//         </div>
//       </div>

//       <div className="leaves-box">
//         <p className="box-title">Leave Balance</p>
//         <div className="box leaves-container">
//           <div className="leave-row">
//             <p>Sick Leave:</p>
//             <p className="small-text">{user.SickLeave}</p>
//           </div>
//           <div className="leave-row">
//             <p>Earned Leave:</p>
//             <p className="small-text">{user.EarnedLeave}</p>
//           </div>
//           <div className="leave-row">
//             <p>Paid Leave:</p>
//             <p className="small-text">{user.PaidLeave}</p>
//           </div>
//         </div>
//       </div>

//       <div className="applied-dates-box">
//         <p className="box-title">Applied Dates</p>
//         <div className="box container">
//           {appliedDates.map((dateInfo, index) => (
//             <p className="insideContainer" key={index}>
//               <span>{dateInfo.dateRange}</span>
//               <span className="small-text">{dateInfo.leaveType}</span>
//             </p>
//           ))}
//         </div>
//         <div className="reasons-box">
//           <p className="box-title">Reasons</p>
//           <p className="box box-reason">{requestData.reason}</p>
//         </div>
//       </div>

//       <div className="approvers-box">
//         <p className="box-title">Details</p>
//         <table className="approvers-table">
//           <thead>
//             <tr>
//               <th>Approver's Name</th>
//               <th>Status</th>
//               <th>Date</th>
//               <th>Remarks</th>
//             </tr>
//           </thead>
//           <tbody>
//             {approversDetails.map((approver, index) => (
//               <tr key={index}>
//                 <td>{approver.approverName}</td>
//                 <td>{approver.status}</td>
//                 <td>{approver.date}</td>
//                 <td>{approver.remarks}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <div className="actions">
//         <button className="approve">{labels.approveLabel}</button>
//         <button className="reject">{labels.rejectedLabel}</button>
//       </div>
//     </div>
//   );
// }



