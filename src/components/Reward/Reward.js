import React, { useState } from "react";
import DatePicker from "react-datepicker";
import  Avatar from "@material-ui/core/Avatar";
import "react-datepicker/dist/react-datepicker.css";

import "./styles.css";

const Reward = () => {
  const [selectedDateOfDay, setSelectedDateOfDay] = useState(null);
  const [selectedDateOfWeek, setSelectedDateOfWeek] = useState(null);
  const [selectedDateOfMonth, setSelectedDateOfMonth] = useState(null);
  const [employeeOfDay, setEmployeeOfDay] = useState(null);
  const [employeeOfWeek, setEmployeeOfWeek] = useState(null);
  const [employeeOfMonth, setEmployeeOfMonth] = useState(null);
  const [isLoadingOfDay, setIsLoadingOfDay] = useState(false);
  const [isLoadingOfWeek, setIsLoadingOfWeek] = useState(false);
  const [isLoadingOfMonth, setIsLoadingOfMonth] = useState(false);

  const handleDateChangeOfDay = (date) => {
    setSelectedDateOfDay(date);
    setEmployeeOfDay(null);
  };

  const handleDateChangeOfWeek = (date) => {
    setSelectedDateOfWeek(date);
    setEmployeeOfWeek(null);
  };

  const handleDateChangeOfMonth = (date) => {
    setSelectedDateOfMonth(date);
    setEmployeeOfMonth(null);
  };

  const formatDate = (selectedDate) => {
  const timezoneOffset = selectedDate.getTimezoneOffset();
  const year = selectedDate.getFullYear();
  const month = selectedDate.getMonth() + 1;
  const day = selectedDate.getDate();

  return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}T00:00:00.000${timezoneOffset < 0 ? '-' : '+'}${Math.abs(timezoneOffset / 60).toString().padStart(2, '0')}:00`;
}

  const handleFindEmployeeOfDay = () => {
    if (selectedDateOfDay) {
      setIsLoadingOfDay(true);
      // const formattedDate = selectedDateOfDay.toISOString().slice(0, 10);
      const formattedDate = formatDate(selectedDateOfDay).slice(0, 10);
      console.log(formatDate)

      fetch(
        `http://localhost:5000/api/v1.0/rewards/employee-of-the-day?date=${formattedDate}`
      )
        .then((response) => response.json())
        .then((data) => {
          setEmployeeOfDay(data.data);
          setIsLoadingOfDay(false);
        })
        .catch((error) => console.error(error));
    } else {
      alert("Please select a date first");
    }
  };

  const handleFindEmployeeOfWeek = () => {
    if (selectedDateOfWeek) {
      setIsLoadingOfWeek(true);
      const formattedDate = formatDate(selectedDateOfWeek).slice(0, 10);

      fetch(
        `http://localhost:5000/api/v1.0/rewards/employee-of-the-week?date=${formattedDate}`
      )
        .then((response) => response.json())
        .then((data) => {
          setEmployeeOfWeek(data.data);
          setIsLoadingOfWeek(false);
        })
        .catch((error) => console.error(error));
    } else {
      alert("Please select a date first");
    }
  };

  const handleFindEmployeeOfMonth = () => {
    if (selectedDateOfMonth) {
      setIsLoadingOfMonth(true);
      const formattedDate = formatDate(selectedDateOfMonth).slice(0, 10);

      fetch(
        `http://localhost:5000/api/v1.0/rewards/employee-of-the-month?date=${formattedDate}`
      )
        .then((response) => response.json())
        .then((data) => {
          setEmployeeOfMonth(data.data);
          setIsLoadingOfMonth(false);
        })
        .catch((error) => console.error(error));
    } else {
      alert("Please select a date first");
    }
  };

  return (
    <div className="card-container">
      <div className="card">
        <p className="card-title">Employee of Day</p>
        <div className="date-picker-container">
          <DatePicker
            className="date-picker"
            selected={selectedDateOfDay}
            onChange={handleDateChangeOfDay}
            dateFormat="dd/MM/yyyy"
            placeholderText="Select a date"
          />
          <button onClick={handleFindEmployeeOfDay} className="card-button">
            Find
          </button>
        </div>
        <div className="result-container">
          {employeeOfDay && (
            <div className="card-text">
              <Avatar className="avatar" alt={employeeOfDay.name}>
                {employeeOfDay.name[0]}
              </Avatar>
              <p>Name: {employeeOfDay.name}</p>
              <p>Designation: {employeeOfDay.designation}</p>
            </div>
          )}
          {isLoadingOfDay && <p>Loading...</p>}
        </div>
      </div>

      <div className="card">
        <p className="card-title">Employee of Week</p>
        <div className="date-picker-container">
          <DatePicker
            className="date-picker"
            selected={selectedDateOfWeek}
            onChange={handleDateChangeOfWeek}
            dateFormat="dd/MM/yyyy"
            placeholderText="Select a date"
          />
          <button onClick={handleFindEmployeeOfWeek} className="card-button">
            Find
          </button>
        </div>
        {employeeOfWeek && (
          <div className="card-text">
            <p>Name: {employeeOfWeek.name}</p>
            <p>Designation: {employeeOfWeek.designation}</p>
          </div>
        )}
        {isLoadingOfWeek && <p>Loading...</p>}
      </div>

      <div className="card">
        <p className="card-title">Employee of Month</p>
        <div className="date-picker-container">
          <DatePicker
            className="date-picker"
            selected={selectedDateOfMonth}
            onChange={handleDateChangeOfMonth}
            dateFormat="dd/MM/yyyy"
            placeholderText="Select a date"
          />
          <button onClick={handleFindEmployeeOfMonth} className="card-button">
            Find
          </button>
        </div>

        {employeeOfMonth && (
          <div className="card-text">
            <p>Name: {employeeOfMonth.name}</p>
            <p>Designation: {employeeOfMonth.designation}</p>
          </div>
        )}
        {isLoadingOfMonth && <p>Loading...</p>}
      </div>
    </div>
  );
};

export default Reward;
