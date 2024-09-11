import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar'; // Import the Sidebar component you created earlier
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import the calendar styles

// Main Container to hold both the sidebar and right content
const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
`;

// Sidebar remains fixed on the left side
const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #e5e8e8;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-left: 10px;
  box-sizing: border-box;
`;

// Right Container for the content (calendar and tasks)
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 20px;
  background-color: #f4f6f7;
  overflow-y: scroll;
`;

// Calendar and tasks are aligned in columns
const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  margin-bottom: 30px;
`;

const MyTasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
`;

const TaskItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  color: #333;

  &:last-child {
    border-bottom: none;
  }
`;

const TaskTime = styled.div`
  margin-left: auto;
  color: #777;
`;

const TaskText = styled.div`
  font-size: 1.2rem;
`;

const CalendarHeader = styled.h2`
  margin-bottom: 20px;
  color: #333;
`;

const MyTasksHeader = styled.h2`
  margin-bottom: 20px;
  color: #333;
`;

// Style customization for react-calendar component
const StyledCalendar = styled(Calendar)`
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  .react-calendar__tile--now {
    background: #000; /* Current day */
    color: #fff;
  }

  .react-calendar__tile--active {
    background: #333; /* Active day */
    color: #fff;
  }

  .react-calendar__tile--hover {
    background: #b3b3b3; /* Hover effect */
    color: #fff;
  }
`;

const Meeting = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <MainContainer>
      {/* Sidebar is positioned to the left */}
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>

      {/* Right side content container */}
      <ContentContainer>
        {/* Calendar Section */}
        <CalendarContainer>
          <CalendarHeader>My Calendar</CalendarHeader>
          <StyledCalendar onChange={onChange} value={date} />
        </CalendarContainer>

        {/* Tasks Section */}
        <MyTasksContainer>
          <MyTasksHeader>My Tasks</MyTasksHeader>
          <TaskItem>
            <TaskText>Presentation on the Project</TaskText>
            <TaskTime>12/09 - 20:30</TaskTime>
          </TaskItem>
          <TaskItem>
            <TaskText>Presentation on the Project</TaskText>
            <TaskTime>12/09 - 20:30</TaskTime>
          </TaskItem>
          <TaskItem>
            <TaskText>Presentation on the Project</TaskText>
            <TaskTime>12/09 - 20:30</TaskTime>
          </TaskItem>
          <TaskItem>
            <TaskText>Presentation on the Project</TaskText>
            <TaskTime>12/09 - 20:30</TaskTime>
          </TaskItem>
        </MyTasksContainer>
      </ContentContainer>
    </MainContainer>
  );
};

export default Meeting;
