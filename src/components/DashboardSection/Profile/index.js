/////////////// drop down///////////////////////
// import React, { useState } from 'react';
// import '../../ComponentsCss/Profile/Profile.css';

// const Dropdown = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="dropdown">
//       <button className="dropdown-toggle" onClick={toggleDropdown}>
//         Action <span className={`arrow-icon ${isOpen ? 'open' : ''}`}>&#9662;</span>
//       </button>
//       {/* <span className="arrow-icon">&#9662;</span> */}
//       {isOpen && (
//         <ul className="dropdown-menu">
//           <li className="dropdown-item">
//             <i className="icon view-icon" /> view
//           </li>
//           <li className="dropdown-item">
//             <i className="icon edit-icon" /> edit
//           </li>
//           <li className="dropdown-item">
//             <i className="icon add-icon" /> add
//           </li>
//           <li className="dropdown-item">
//             <i className="icon add-bulk-icon" /> add in bulk
//           </li>
//           <li className="dropdown-item">
//             <i className="icon remove-icon" /> remove
//           </li>
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Dropdown;

////1//////

// import React, { useState } from 'react';
// import '../../ComponentsCss/Profile/Profile.css';

// const ProfilePage = () => {
//   const [activeTab, setActiveTab] = useState('Profile');

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <div className="profile-page">
//       {/* Sidebar */}
//       <div className="sidebar">
//         <div className="user-info">
//           <div className="user-avatar">
//             {/* Add User Image or Placeholder */}
//           </div>
//           <div className="user-details">
//             <p className="user-name">Anonymous</p>
//             <p><strong>Designation:</strong> Production Engineer</p>
//             <p><strong>Phone Number:</strong> 78987656790</p>
//             <p><strong>Email:</strong> anonymous@gmail.com</p>
//             <p><strong>Department:</strong> Production</p>
//             <p><strong>Age:</strong> 24</p>
//             <p><strong>Reporting Manager:</strong> Anonymous</p>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="main-content">
//         {/* Header Navigation */}
//         <div className="header">
//           <ul className="nav">
//             <li className={activeTab === 'Profile' ? 'active' : ''} onClick={() => handleTabClick('Profile')}>Profile</li>
//             <li className={activeTab === 'Timeline' ? 'active' : ''} onClick={() => handleTabClick('Timeline')}>Timeline</li>
//             <li className={activeTab === 'Request' ? 'active' : ''} onClick={() => handleTabClick('Request')}>Request</li>
//             <li className={activeTab === 'Finance' ? 'active' : ''} onClick={() => handleTabClick('Finance')}>Finance</li>
//             <li className={activeTab === 'Benefits' ? 'active' : ''} onClick={() => handleTabClick('Benefits')}>Benefits</li>
//             <li className={activeTab === 'Others' ? 'active' : ''} onClick={() => handleTabClick('Others')}>Others</li>
//           </ul>

//         </div>

//         {/* Content   */}
//         <div className="content">
//           {activeTab === 'Profile' && (
//             <div className="personal-details">
//               <h2>Personal Details</h2>
//               <form className="details-form">
//                 <div className="form-row">
//                   <input type="text" placeholder="Full Name" />
//                   <input type="text" placeholder="City Name" />
//                 </div>
//                 <div className="form-row">
//                   <input type="text" placeholder="Full Name" />
//                   <input type="text" placeholder="City Name" />
//                 </div>
//                 <div className="form-row">
//                   <input type="text" placeholder="Full Name" />
//                   <input type="text" placeholder="City Name" />
//                 </div>
//                 <div className="form-row">
//                   <input type="text" placeholder="Full Name" />
//                   <input type="text" placeholder="City Name" />
//                 </div>
//                 <div className="form-row">
//                   <input type="text" placeholder="Full Name" />
//                   <input type="text" placeholder="City Name" />
//                 </div>
//               </form>

//             </div>
//           )}
//           {/* Add logic for other tabs here */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;

///////2//////
import React, { useState } from "react";
import "../../ComponentsCss/Profile/Profile.css";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("Profile");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="profile-page">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="user-info">
          <div className="user-avatar">
            {/* Add User Image or Placeholder */}
          </div>
          <div className="user-details">
            <p className="user-name">Anonymous</p>
            <p>
              <strong>Designation:</strong> Production Engineer
            </p>
            <p>
              <strong>Phone Number:</strong> 78987656790
            </p>
            <p>
              <strong>Email:</strong> anonymous@gmail.com
            </p>
            <p>
              <strong>Department:</strong> Production
            </p>
            <p>
              <strong>Age:</strong> 24
            </p>
            <p>
              <strong>Reporting Manager:</strong> Anonymous
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Header Navigation */}
        <div className="header">
          <ul className="nav">
            <li
              className={activeTab === "Profile" ? "active" : ""}
              onClick={() => handleTabClick("Profile")}
            >
              Profile
            </li>
            <li
              className={activeTab === "Timeline" ? "active" : ""}
              onClick={() => handleTabClick("Timeline")}
            >
              Timeline
            </li>
            <li
              className={activeTab === "Request" ? "active" : ""}
              onClick={() => handleTabClick("Request")}
            >
              Request
            </li>
            <li
              className={activeTab === "Finance" ? "active" : ""}
              onClick={() => handleTabClick("Finance")}
            >
              Finance
            </li>
            <li
              className={activeTab === "Benefits" ? "active" : ""}
              onClick={() => handleTabClick("Benefits")}
            >
              Benefits
            </li>
            <li
              className={activeTab === "Others" ? "active" : ""}
              onClick={() => handleTabClick("Others")}
            >
              Others
            </li>
          </ul>
        </div>

        {/* Content */}
        <div className="content">
          {activeTab === "Profile" && (
            <div className="personal-details">
              <h2>Personal Details</h2>
              <form className="details-form">
                <div className="form-row">
                  {" "}
                  <input type="text" placeholder="Full Name" />
                  <input type="text" placeholder="City Name" />{" "}
                </div>{" "}
                <div className="form-row">
                  <input type="text" placeholder="Email" />{" "}
                  <input type="text" placeholder="Phone Number" />
                </div>{" "}
                <div className="form-row">
                  {" "}
                  <input type="text" placeholder="Age" />
                  <input type="text" placeholder="Department" />
                </div>
              </form>
              <h2>Qualification Details</h2>
              <div className="form-row">
                {" "}
                <input placeholder="Degree Name" />
                <input placeholder="Institution Name" />{" "}
                <input placeholder="Passing Year" />
                <input placeholder="Percentage" />{" "}
              </div>{" "}
              <h2>Work Experience</h2>
              <div className="form-row">
                {" "}
                <input placeholder="Company Name" />
                <input placeholder="Job Title" />
                <input placeholder="From Date" />{" "}
                <input placeholder="To Date" />
              </div>{" "}
              <h2>Work Details</h2>{" "}
              <div className="form-row">
                {" "}
                <input placeholder="Employee Code" />
                <input placeholder="Department" />{" "}
                <input placeholder="Designation" />
              </div>
              <h2> Address </h2>
              <div className="form-row">
                <input placeholder="Current Address 1" />
                <input placeholder="Current Address 2" />
                <input placeholder="Country" />
              </div>
            </div>
          )}
          {/* Add logic for other tabs here */}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
