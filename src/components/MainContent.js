import React, { useState } from 'react';
import styled from 'styled-components';
import { FaArrowCircleRight, FaClipboardList, FaPlus } from 'react-icons/fa'; 
import { Progress } from 'antd';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const MainContentContainer = styled.div`
  flex-grow: 1;
  padding: 20px;
  background-color: #f0f0f0;
`;

// Top Bar Components
const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Greeting = styled.h2`
  font-weight: bold;
  color: #2c3e50;
  font-family: 'Lato', sans-serif;
`;

const SearchBar = styled.input`
  padding: 8px 15px;
  border-radius: 25px;
  border: 1px solid #ddd;
  font-size: 0.9rem;
  width: 250px;
  background-color: #f8f9fa;
`;

// Project Summary Components
const ProjectSummaryContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  margin-bottom: 15px;
`;

const Tabs = styled.div`
  display: flex;
`;

const Tab = styled.div`
  margin-right: 20px;
  padding-bottom: 5px;
  cursor: pointer;
  font-size: 1rem;
  color: ${(props) => (props.active ? "#333" : "#aaa")};
  border-bottom: ${(props) => (props.active ? "2px solid #333" : "none")};
`;

const ViewAllButton = styled.button`
  background-color: #52c41a;
  color: white;
  padding: 8px 20px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
  margin-top: -18px;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #42a115;
    transform: scale(1.05);
  }

  &:active {
    background-color: #36910e;
    transform: scale(0.98);
  }
`;


const ProjectTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  text-align: left;
`;

const ProjectTableHeader = styled.th`
  padding: 10px 0;
  font-size: 0.9rem;
  color: #555;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:nth-child(1) {
    width: 30%;
  }
  
  &:nth-child(2) {
    padding-left: 20px;
    width: 20%;
  }

  &:nth-child(3), &:nth-child(4) {
    width: 15%;
  }

  &:nth-child(5) {
    width: 20%;
  }
`;

const ProjectTableRow = styled.tr`
  border-top: 1px solid #eee;
`;

const ProjectTableCell = styled.td`
  padding: 10px 0;
  font-size: 0.9rem;
  color: #333;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:nth-child(2) {
    padding-left: 30px;
  }
`;

const ProjectIcon = styled.div`
  margin-right: 10px;
  color: #a855f7;
  display: inline-block;
`;

// Time Spent and Notes Components
const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const ChartContainer = styled.div`
  background-color: #f7f8fa;
  border-radius: 15px;
  padding: 15px;
  width: 55%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  height:255px;
`;

const NotesContainer = styled.div`
  background-color: #f7f8fa;
  border-radius: 15px;
  padding: 20px;
  width: 35%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height:250px;
  position: relative;
`;

// AddNoteButton for the plus icon
const AddNoteButton = styled.div`
  position: absolute;
  top: 25px;
  right: 25px;
  background-color: #34495e;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 0.6rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;

  &:hover {
    background-color: #283747;
  }

  &:active {
    background-color: #1b2631;
  }
`;

const Note = styled.div`
  background-color: white;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 43px;
  cursor: pointer; /* Add cursor pointer for clickability */

  @media (max-width: 768px) {
    padding: 8px;
    height: 30px;
  }

  &:hover {
    background-color: #f0f0f0; /* Change background color on hover */
  }
`;

const NoteTitle = styled.h5`
  padding: 2px 0;
  margin: 0;
  font-size: 0.8rem;
  color: #333;
  display: flex;
  align-items: center;

  @media (max-width: 968px) {
    font-size: 0.7rem;
  }

  @media (max-width: 1200px) {
    font-size: 0.6rem;
  }
`;

const NoteText = styled.p`
  margin: 5px 0 0 0;
  color: #555;
  font-size: 0.7rem;

  @media (max-width: 968px) {
    display: none;
  }

  @media (max-width: 1200px) {
    font-size: 0.6rem;
  }
`;

// Section Headings
const SectionHeading = styled.h3`
  margin: 0 0 15px 0;
  color: #333;
  font-size: 1.2rem;
  font-weight: 500;
`;


// Time Spent Data
const timeSpentData = [
  { name: 'Mon', hours: 9 },
  { name: 'Tue', hours: 8 },
  { name: 'Wed', hours: 6 },
  { name: 'Thu', hours: 7 },
  { name: 'Fri', hours: 7.5 },
];

// Sample project data for each tab
const projectData = {
  ongoing: [
    {
      name: 'Training Management System',
      type: 'Web App',
      startDate: 'Aug 01, 2024',
      endDate: 'Nov 31, 2024',
      progress: 10,
    },
    {
      name: 'Computer Shop Stock Management System',
      type: 'Web App',
      startDate: 'Jun 01, 2024',
      endDate: 'Sep 21, 2024',
      progress: 60,
    },
    {
      name: 'Blog Website',
      type: 'Web App',
      startDate: 'June 01, 2024',
      endDate: 'Aug 11, 2024',
      progress: 95,
    },
  ],
  completed: [
    {
      name: 'Project A',
      type: 'Web App',
      startDate: 'May 01, 2024',
      endDate: 'Aug 03, 2024',
      progress: 100,
    },
    {
      name: 'Project B',
      type: 'Mobile App',
      startDate: 'Feb 01, 2024',
      endDate: 'Jul 20, 2024',
      progress: 100,
    },
    {
      name: 'Project C',
      type: 'Website',
      startDate: 'Mar 01, 2024',
      endDate: 'Aug 15, 2024',
      progress: 100,
    },
  ],
  proposed: [
    {
      name: 'Project D',
      type: 'Web App',
      startDate: 'Not Decided Yet',
      endDate: 'Not Decided Yet',
      progress: 0,
    },
    {
      name: 'Project E',
      type: 'Mobile App',
      startDate: 'Not Decided Yet',
      endDate: 'Not Decided Yet',
      progress: 0,
    },
    {
      name: 'Project F',
      type: 'Website',
      startDate: 'Not Decided Yet',
      endDate: 'Not Decided Yet',
      progress: 0,
    },
  ],
};

const getGreeting = () => {
  const currentHour = new Date().getHours();
  if (currentHour < 12) {
    return "Good Morning";
  } else if (currentHour < 18) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
};

const MainContent = () => {
  const [activeTab, setActiveTab] = useState('ongoing');

  const handleNoteClick = (noteTitle) => {
    console.log(`Note clicked: ${noteTitle}`);
    // Add your navigation or other logic here
  };

  return (
    <MainContentContainer>
      <TopBar>
        <Greeting>{getGreeting()}, Vihanga!</Greeting>
        <SearchBar placeholder="Search for Options" />
      </TopBar>

      <ProjectSummaryContainer>
        <SectionHeading>Project Summary</SectionHeading>
        <TabContainer>
          <Tabs>
            <Tab active={activeTab === 'ongoing'} onClick={() => setActiveTab('ongoing')}>On Going</Tab>
            <Tab active={activeTab === 'completed'} onClick={() => setActiveTab('completed')}>Completed</Tab>
            <Tab active={activeTab === 'proposed'} onClick={() => setActiveTab('proposed')}>Proposed</Tab>
          </Tabs>
          <ViewAllButton>View All</ViewAllButton>
        </TabContainer>
        <ProjectTable>
          <thead>
            <tr>
              <ProjectTableHeader>Project Name</ProjectTableHeader>
              <ProjectTableHeader>Project Type</ProjectTableHeader>
              <ProjectTableHeader>Start Date</ProjectTableHeader>
              <ProjectTableHeader>End Date</ProjectTableHeader>
              <ProjectTableHeader>Progress</ProjectTableHeader>
            </tr>
          </thead>
          <tbody>
            {projectData[activeTab].map((project, index) => (
              <ProjectTableRow key={index}>
                <ProjectTableCell>
                  <ProjectIcon>
                    <FaClipboardList />
                  </ProjectIcon>
                  {project.name}
                </ProjectTableCell>
                <ProjectTableCell>{project.type}</ProjectTableCell>
                <ProjectTableCell>{project.startDate}</ProjectTableCell>
                <ProjectTableCell>{project.endDate}</ProjectTableCell>
                <ProjectTableCell>
                  <Progress percent={project.progress} strokeColor="#52c41a" />
                </ProjectTableCell>
              </ProjectTableRow>
            ))}
          </tbody>
        </ProjectTable>
      </ProjectSummaryContainer>

      <BottomContainer>
        <ChartContainer>
          <SectionHeading>Time Spent</SectionHeading>
          <ResponsiveContainer width="90%" height={200}>
            <BarChart data={timeSpentData} barCategoryGap="25%">
              <XAxis dataKey="name" tickLine={false} axisLine={false} />
              <YAxis axisLine={false} tickLine={false} ticks={[0, 3, 6, 9, 12]} />
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <Tooltip />
              <Bar dataKey="hours" fill="#475be8" background={{ fill: '#E8EAF6', radius: [10, 10, 10, 10] }} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>

        <NotesContainer>
        <AddNoteButton>
            <FaPlus />
          </AddNoteButton>
          <SectionHeading>Notes</SectionHeading>
          <Note onClick={() => handleNoteClick('Design Meeting')}>
            <div>
              <NoteTitle>Design Meeting</NoteTitle>
              <NoteText>Discuss the new dashboard design</NoteText>
            </div>
            <FaArrowCircleRight />
          </Note>
          <Note onClick={() => handleNoteClick('Client Call')}>
            <div>
              <NoteTitle>Client Call</NoteTitle>
              <NoteText>Follow up with the client on the project status</NoteText>
            </div>
            <FaArrowCircleRight />
          </Note>
          <Note onClick={() => handleNoteClick('Team Sync')}>
            <div>
              <NoteTitle>Team Sync</NoteTitle>
              <NoteText>Weekly team sync-up to review progress</NoteText>
            </div>
            <FaArrowCircleRight />
          </Note>
        </NotesContainer>
      </BottomContainer>
    </MainContentContainer>
  );
};

export default MainContent;
