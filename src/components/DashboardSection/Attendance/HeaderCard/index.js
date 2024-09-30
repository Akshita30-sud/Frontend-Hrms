// import React from 'react';


// const Cards = () => {
//   return (
//     <div className="cards-container">
        
//       <div className="card on-time">
//         <div className="card-content">
//           <h3>On Time Percentage</h3>
//           <p>September</p>
//           <h2>65%</h2>
//         </div>
//       </div>
//       <div className="card late">
//         <div className="card-content">
//           <h3>Late Percentage</h3>
//           <p>September</p>
//           <h2>35%</h2>
//         </div>
//       </div>
//       <div className="card total-days">
//         <div className="card-content">
//           <h3>Total Working Days - September</h3>
//           <p>00 Days</p>
//           <p>40 weeks</p>
//         </div>
//       </div>
//       <div className="card total-hours">
//         <div className="card-content">
//           <h3>Total Working Hours - September</h3>
//           <p>00 Hours 40 Minutes</p>
//           <p>55 Seconds</p>
//         </div>



//       </div> 
//     </div>
//   );
// };

// export default Cards;


// import React from 'react';


// const Attendance = () => {
//   return (
//     <div className="container">
//       {/* Header Section */}
//       <header className="header-section">
//         <h1>Attendance</h1>
//         <div className="profile-container">
//           <div className="profile">
//             <img
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxDPxiQn2RY4Hd-jTWMf7oKXQMrL7nG6yDUg&s"
//               alt="Profile"
//             />
//           </div>
//           <h3>Anonymous</h3>
//         </div>
//       </header>

//       <section className="hero-section">
//         <h2>Insights</h2>
//         <div className="dropdown-container">
//           <select id="year" name="year">
//             <option value="">Year</option>
//             <option value="2020">2020</option>
//             <option value="2021">2021</option>
//             <option value="2022">2022</option>
//             <option value="2023">2023</option>
//             <option value="2024">2024</option>
//           </select>

//           <select id="month" name="month">
//             <option value="">Month</option>
//             <option value="01">January</option>
//             <option value="02">February</option>
//             <option value="03">March</option>
//             <option value="04">April</option>
//             <option value="05">May</option>
//             <option value="06">June</option>
//             <option value="07">July</option>
//             <option value="08">August</option>
//             <option value="09">September</option>
//             <option value="10">October</option>
//             <option value="11">November</option>
//             <option value="12">December</option>
//           </select>
//         </div>
//       </section>

      
//       <section className="card-section">
//         <div className="card">
//           <div>
//             <div>On Time Percentage</div>
//             <div>September</div>
//             <h1>65 %</h1>
//           </div>
//           <div>
//             <img src="./image/one.jpeg" alt="On Time" />
//           </div>
//         </div>

//         <div className="card">
//           <div>
//             <div>Late Percentage</div>
//             <div>September</div>
//             <h1>35 %</h1>
//           </div>
//           <div>
//             <img src="./image/two.jpeg" alt="Late" />
//           </div>
//         </div>

//         <div className="card">
//           <div>
//             <div>Late Percentage</div>
//             <div>September</div>
//             <h1>35 %</h1>
//           </div>
//           <div>
//             <img src="./image/three.jpeg" alt="Late" />
//           </div>
//         </div>

//         <div className="card">
//           <div>
//             <div>Late Percentage</div>
//             <div>September</div>
//             <h1>35 %</h1>
//           </div>
//           <div>
//             <img src="./image/four.jpeg" alt="Late" />
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Attendance;

import React from 'react';
import oneImg from '../../../../image/one.jpeg'; 
import twoImg from '../../../../image/two.jpeg';
import threeImg from '../../../../image/three.jpeg';
import fourImg from '../../../../image/four.jpeg';

const HeaderCard = () => {
  return (
    <div className="container">
      {/* Header Section */}
      <header className="header-section">
        <h1>Attendance</h1>
        <div className="profile-container">
          <div className="profile">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxDPxiQn2RY4Hd-jTWMf7oKXQMrL7nG6yDUg&s"
              alt="Profile"
            />
          </div>
          <h3>Anonymous</h3>
        </div>
      </header>

      <section className="hero-section">
        <h2>Insights</h2>
        <div className="dropdown-container">
          <select id="year" name="year">
            <option value="">Year</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
          </select>

          <select id="month" name="month">
            <option value="">Month</option>
            <option value="01">January</option>
            <option value="02">February</option>
            <option value="03">March</option>
            <option value="04">April</option>
            <option value="05">May</option>
            <option value="06">June</option>
            <option value="07">July</option>
            <option value="08">August</option>
            <option value="09">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </section>

      {/* Card Section */}
      <section className="card-section">
        <div className="card">
          <div>
            <div>On Time Percentage</div>
            <div>September</div>
            <h1>65 %</h1>
          </div>
          <div>
            <img src={oneImg} alt="On Time" />
          </div>
        </div>

        <div className="card">
          <div>
            <div>Late Percentage</div>
            <div>September</div>
            <h1>35 %</h1>
          </div>
          <div>
            <img src={twoImg} alt="Late" />
          </div>
        </div>

        <div className="card">
          <div>
            <div>Late Percentage</div>
            <div>September</div>
            <h1>35 %</h1>
          </div>
          <div>
            <img src={threeImg} alt="Late" />
          </div>
        </div>

        <div className="card">
          <div>
            <div>Late Percentage</div>
            <div>September</div>
            <h1>35 %</h1>
          </div>
          <div>
            <img src={fourImg} alt="Late" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeaderCard;
