import React from 'react';
import Sidebar from '../components/Sidebar';
import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa'; // Import the plus icon

const ProfilePageContainer = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
  background-color: #f0f0f0;
`;

const SidebarWrapper = styled.div`
  width: 250px;
  flex-shrink: 0;
  background-color: #f8f9fa;
`;

const Content = styled.div`
  flex-grow: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
`;

const ProfileHeader = styled.h1`
  align-self: flex-start;
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
`;

const ProfileBanner = styled.div`
  width: 100%;
  max-width: 1200px;
  min-height: 200px;
  background-image: url('banner.jpg'); /* Replace this with the correct path */
  background-size: cover;
  background-position: center;
  border-radius: 15px;
  position: relative;
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid white;
  position: absolute;
  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);
`;

const ProfileName = styled.h1`
  margin-top: 60px;
  text-align: center;
  font-size: 1.5rem;
  color: #333;
`;

const StatusBadge = styled.span`
  display: inline-block;
  background-color: #28a745;
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 0.9rem;
`;

const InfoSectionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin-top: 40px;
  gap: 20px;
`;

const InfoCard = styled.div`
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 15px;
  width: 30%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const CardTitle = styled.h2`
  font-size: 1.4rem;
  margin-bottom: 20px;
  color: #333;
  margin-top:5px;
  padding-bottom:10px;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const SkillIcon = styled.img`
  width: 35px;
  height: 35px;
  background-color: #e9ecef;
  padding: 10px;
  border-radius: 10px;
`;

const ConversationListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

const AddConversationIcon = styled(FaPlus)`
  cursor: pointer;
  color: #007bff;
  font-size: 1.2rem;
`;

const ConversationItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const ConversationDetails = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

const ConversationImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const ConversationText = styled.div`
  margin-left: 10px;
  color: #666;
  font-size: 12px;
`;

const ConversationName = styled.div`
  font-weight: bold;
  color: #333;
  font-size: 14px;
`;

const ReplyButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
`;

const ProjectsSection = styled.div`
  width: 95%;
  max-width: 1200px;
  margin-top: 40px;
  padding: 20px;
  background-color: #f8f9f9;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const ProjectsHeader = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 30px;
  color: #333;
  margin-top:10px;
`;

const ProjectsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const ProjectCard = styled.div`
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 30%;
  display: flex;
  flex-direction: column;   
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px); /* Slightly lift the card */
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); /* Deepen the shadow */
  }
  `;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  padding: 15px;
`;

const ProjectTitle = styled.h3`
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 10px;
`;

const ProjectSubtitle = styled.p`
  font-size: 0.9rem;
  color: gray;
  margin-bottom: 15px;
`;

const ProjectButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: auto;
  align-self: flex-start;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    background-color: #003f7f;
    transform: scale(0.98); /
`;

const NewProjectCard = styled(ProjectCard)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px dashed #007bff;
`;

const NewProjectText = styled.h3`
  font-size: 1.2rem;
  color: #007bff;
  text-align: center;
`;

const ProfilePage = () => {
  return (
    <ProfilePageContainer>
      <SidebarWrapper>
        <Sidebar />
      </SidebarWrapper>
      <Content>
        <ProfileHeader>Profile</ProfileHeader>
        <ProfileBanner>
          <ProfileImage src="profile-image.jpg" alt="Profile" />
        </ProfileBanner>
        <ProfileName>Vihanga Fernando</ProfileName>
        <StatusBadge>Active</StatusBadge>

        <InfoSectionsContainer>
          <InfoCard>
            <CardTitle>Profile Information</CardTitle>
            <p><strong>Position:</strong> Intern - Software Developer</p>
            <p><strong>E-mail:</strong> nethminavihanga275@gmail.com</p>
            <p><strong>Phone:</strong> +94 70 166 8976</p>
            <p><strong>University:</strong> Informatics Institute of Technology</p>
            <p><strong>Hire Date:</strong> 01.08.2024</p>
            <p><strong>Duration:</strong> 12 Months</p>
          </InfoCard>

          <InfoCard>
            <CardTitle>Skills</CardTitle>
            <SkillsContainer>
              <SkillIcon src="/icons/java.png" alt="Java" />
              <SkillIcon src="/icons/react.png" alt="React" />
              <SkillIcon src="/icons/nodejs.png" alt="Node.js" />
              <SkillIcon src="/icons/html.png" alt="HTML" />
              <SkillIcon src="/icons/css.png" alt="CSS" />
              <SkillIcon src="/icons/javascript.png" alt="JavaScript" />
              <SkillIcon src="/icons/python.png" alt="Python" />
              <SkillIcon src="/icons/mysql.png" alt="MySQL" />
              <SkillIcon src="/icons/postgres.png" alt="PostgreSQL" />
              <SkillIcon src="/icons/firebase.png" alt="Firebase" />
              <SkillIcon src="/icons/sqlite.png" alt="SQLite" />
              <SkillIcon src="/icons/mongodb.png" alt="MongoDB" />
            </SkillsContainer>
          </InfoCard>

          <InfoCard>
            <CardTitle>
              <ConversationListHeader>
                Conversations
                <AddConversationIcon />
              </ConversationListHeader>
            </CardTitle>
            <ConversationItem>
              <ConversationDetails>
                <ConversationImage src="profile-image.jpg" alt="Mahinda Maama" />
                <ConversationText>
                  <ConversationName>Taylor Smith</ConversationName>
                  Hey, Can you send me the...
                </ConversationText>
              </ConversationDetails>
              <ReplyButton>Reply</ReplyButton>
            </ConversationItem>
            <ConversationItem>
              <ConversationDetails>
                <ConversationImage src="profile-image.jpg" alt="Mahinda Maama" />
                <ConversationText>
                  <ConversationName>Casey Taylor</ConversationName>
                  Yeah, its today at 6.30pm
                </ConversationText>
              </ConversationDetails>
              <ReplyButton>Reply</ReplyButton>
            </ConversationItem>
            <ConversationItem>
              <ConversationDetails>
                <ConversationImage src="profile-image.jpg" alt="Mahinda Maama" />
                <ConversationText>
                  <ConversationName>Cameron White</ConversationName>
                  Sure, will do!
                </ConversationText>
              </ConversationDetails>
              <ReplyButton>Reply</ReplyButton>
            </ConversationItem>
            <ConversationItem>
              <ConversationDetails>
                <ConversationImage src="profile-image.jpg" alt="Mahinda Maama" />
                <ConversationText>
                  <ConversationName>Avery Harris</ConversationName>
                  Can you check the repo...
                </ConversationText>
              </ConversationDetails>
              <ReplyButton>Reply</ReplyButton>
            </ConversationItem>
          </InfoCard>
        </InfoSectionsContainer>

        {/* New Section for Personal Projects */}
        <ProjectsSection>
          <ProjectsHeader>Personal Projects</ProjectsHeader>
          <ProjectsContainer>
            <ProjectCard>
              <ProjectImage src="banner.jpg" alt="Project 1" />
              <ProjectContent>
                <ProjectTitle>Project #1</ProjectTitle>
                <ProjectSubtitle>
                  Modern
                </ProjectSubtitle>
                <p>As Uber works through a huge amount of internal management turmoil.</p>
                <ProjectButton>VIEW PROJECT</ProjectButton>
              </ProjectContent>
            </ProjectCard>

            <ProjectCard>
              <ProjectImage src="banner.jpg" alt="Project 2" />
              <ProjectContent>
                <ProjectTitle>Project #2</ProjectTitle>
                <ProjectSubtitle>
                  Modern
                </ProjectSubtitle>
                <p>As Uber works through a huge amount of internal management turmoil.</p>
                <ProjectButton>VIEW PROJECT</ProjectButton>
              </ProjectContent>
            </ProjectCard>

            <ProjectCard>
              <ProjectImage src="banner.jpg" alt="Project 3" />
              <ProjectContent>
                <ProjectTitle>Project #3</ProjectTitle>
                <ProjectSubtitle>
                  Modern
                </ProjectSubtitle>
                <p>As Uber works through a huge amount of internal management turmoil.</p>
                <ProjectButton>VIEW PROJECT</ProjectButton>
              </ProjectContent>
            </ProjectCard>

            <NewProjectCard>
              <NewProjectText>NEW PROJECT <FaPlus /></NewProjectText>
            </NewProjectCard>
          </ProjectsContainer>
        </ProjectsSection>

      </Content>
    </ProfilePageContainer>
  );
};

export default ProfilePage;
