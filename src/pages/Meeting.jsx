import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar'; // Import the Sidebar component you created earlier
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import the calendar styles

// Main Container to hold the sidebar and the content
const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
`;

// Sidebar remains fixed on the left side
const SidebarContainer = styled.div`
  display: flex;
  background-color: #e5e8e8;
  box-sizing: border-box; 
`;

// Right Container for the content (middle content, calendar, and tasks)
const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  padding: 20px;
  background-color: #f4f6f7;
  overflow-y: scroll;
`;

// Middle content (Upcoming and Previous Meetings)
const MiddleContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  padding-right: 20px;
`;

// Section Headers
const SectionHeader = styled.h2`
  margin-bottom: 20px;
  color: #333;
`;

// Meetings Containers
const MeetingsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 30px;
`;

// Individual Meeting Cards (updated for image style)
const MeetingCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ color }) => color || 'white'};
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 250px;
  position: relative;
`;

// Meeting Title
const MeetingTitle = styled.div`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 10px;
`;

// Join Button (styled to match the image)
const JoinButton = styled.button`
  background-color: ${({ color }) => color || '#5f5fff'};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  cursor: pointer;
  margin-top: 10px;
  align-self: flex-end;
  &:hover {
    background-color: darken(${({ color }) => color || '#5f5fff'}, 10%);
  }
`;

// Meeting Info Section (Date, Time)
const MeetingInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: #777;
  margin-bottom: 15px;
`;

// Attendee Icons Container
const AttendeesContainer = styled.div`
  display: flex;
  align-items: center;
`;

// Attendee Avatar
const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 5px;
`;

// Join Button Container
const JoinButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

// Right-side calendar and tasks
const RightContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.8;
  max-width: 300px;
`;

// Calendar Container
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

// Tasks Section
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
      {/* Sidebar */}
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>

      {/* Right-side content */}
      <ContentContainer>
        {/* Middle content section (Upcoming and Previous Meetings) */}
        <MiddleContentContainer>
          <SectionHeader>Upcoming Meetings</SectionHeader>
          <MeetingsSection>
            <MeetingCard color="#fddddd">
              <MeetingTitle>Progress Meeting</MeetingTitle>
              <MeetingInfo>
                <span>13:00 - 24/06</span>
              </MeetingInfo>
              <AttendeesContainer>
                <Avatar src="profile-image.jpg" alt="Avatar 1" />
                <Avatar src="profile-image.jpg" alt="Avatar 2" />
                <Avatar src="profile-image.jpg" alt="Avatar 3" />
                <span>+1</span>
              </AttendeesContainer>
              <JoinButtonContainer>
                <JoinButton color="#ff5b5b">Join</JoinButton>
              </JoinButtonContainer>
            </MeetingCard>

            <MeetingCard color="#ddf7dd">
              <MeetingTitle>Progress Meeting</MeetingTitle>
              <MeetingInfo>
                <span>13:00 - 24/06</span>
              </MeetingInfo>
              <AttendeesContainer>
                <Avatar src="profile-image.jpg" alt="Avatar 1" />
                <Avatar src="profile-image.jpg" alt="Avatar 2" />
                <Avatar src="profile-image.jpg" alt="Avatar 3" />
                <span>+1</span>
              </AttendeesContainer>
              <JoinButtonContainer>
                <JoinButton color="#4caf50">Join</JoinButton>
              </JoinButtonContainer>
            </MeetingCard>

            <MeetingCard color="#dde5fd">
              <MeetingTitle>Progress Meeting</MeetingTitle>
              <MeetingInfo>
                <span>13:00 - 24/06</span>
              </MeetingInfo>
              <AttendeesContainer>
                <Avatar src="profile-image.jpg" alt="Avatar 1" />
                <Avatar src="profile-image.jpg" alt="Avatar 2" />
                <Avatar src="profile-image.jpg" alt="Avatar 3" />
                <span>+1</span>
              </AttendeesContainer>
              <JoinButtonContainer>
                <JoinButton color="#5f5fff">Join</JoinButton>
              </JoinButtonContainer>
            </MeetingCard>
          </MeetingsSection>

          <SectionHeader>Previous Meetings</SectionHeader>
          <MeetingsSection>
            <MeetingCard>
              <MeetingTitle>Progress Meeting</MeetingTitle>
              <MeetingInfo>
                <span>13:00 - 24/06</span>
                <span>62 Minutes</span>
              </MeetingInfo>
              <p>
                The game features an anime-style open world environment and an
                action-based battle system using elemental magic...
              </p>
            </MeetingCard>
            <MeetingCard>
              <MeetingTitle>Progress Meeting</MeetingTitle>
              <MeetingInfo>
                <span>13:00 - 24/06</span>
                <span>62 Minutes</span>
              </MeetingInfo>
              <p>
                The game features an anime-style open world environment and an
                action-based battle system using elemental magic...
              </p>
            </MeetingCard>
          </MeetingsSection>
        </MiddleContentContainer>

        {/* Right-side content (Calendar and Tasks) */}
        <RightContentContainer>
          {/* Calendar Section */}
          <CalendarContainer>
            <SectionHeader>My Calendar</SectionHeader>
            <StyledCalendar onChange={onChange} value={date} />
          </CalendarContainer>

          {/* Tasks Section */}
          <MyTasksContainer>
            <SectionHeader>My Tasks</SectionHeader>
            <TaskItem>
              <TaskText>Presentation on the Project</TaskText>
              <TaskTime>12/09 - 20:30</TaskTime>
            </TaskItem>
            <TaskItem>
              <TaskText>Meeting with Clients</TaskText>
              <TaskTime>13/09 - 10:00</TaskTime>
            </TaskItem>
            <TaskItem>
              <TaskText>Team Sync-up</TaskText>
              <TaskTime>14/09 - 09:00</TaskTime>
            </TaskItem>
            <TaskItem>
              <TaskText>Final Report Review</TaskText>
              <TaskTime>15/09 - 15:00</TaskTime>
            </TaskItem>
          </MyTasksContainer>
        </RightContentContainer>
      </ContentContainer>
    </MainContainer>
  );
};

export default Meeting;
