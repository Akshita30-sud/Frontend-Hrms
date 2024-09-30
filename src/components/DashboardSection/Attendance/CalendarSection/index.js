
import React, { useState} from 'react';


const CalendarClock = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getStartDay = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const renderCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const days = daysInMonth(month, year);
    const startDay = getStartDay(month, year);
    const today = new Date().getDate();

    const calendarDays = [];

    // Fill empty days at the beginning
    for (let i = 0; i < startDay; i++) {
      calendarDays.push(<div key={`empty-${i}`} className="empty-day"></div>);
    }

    // Fill the actual days
    for (let day = 1; day <= days; day++) {
      const isToday = day === today && month === new Date().getMonth() && year === new Date().getFullYear();
      calendarDays.push(
        <div key={day} className={`day ${isToday ? 'active-day' : ''}`}>
          <span>{day}</span>
          <span className="hours">{day % 2 === 0 ? '6 hrs' : '5:10 hrs'}</span>
        </div>
      );
    }

    return calendarDays;
  };

  const handleMonthChange = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  

  return (
    <div className="calendar-clock-container">
      {/* Calendar Section */}
      <div className="calendar">
        <div className="month-year">
          <button className='calanderBtn' onClick={() => handleMonthChange(-1)}>{'<'}</button>
          <h3>{currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}</h3>
          <button className='calanderBtn' onClick={() => handleMonthChange(1)}>{'>'}</button>
        </div>
        <div className="weekdays">
          <span>Mo</span>
          <span>Tu</span>
          <span>We</span>
          <span>Th</span>
          <span>Fr</span>
          <span>Sa</span>
          <span>Su</span>
        </div>
        <div className="days">
          {renderCalendarDays()}
        </div>
      </div>

      
    </div>
  );
};

export default CalendarClock;
