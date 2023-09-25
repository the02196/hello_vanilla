import {
  faArrowUpRightDots,
  faBriefcase,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

/*
Wrappers
*/

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  padding-top: 300px;
`;

const MyPage_Wrap = styled.div`
  width: 600px;
  height: 800px;
  background-color: whitesmoke;
  margin: 0 auto;
`;

/*
Left Wrappers
*/

const Left_Wrap = styled.div`
  padding: 40px 30px;
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WorkInfo_GlobalWrap = styled.div`
    border-bottom: 1px solid lightgray;
    width: 100%;
    padding-bottom: 20px;
`;

const WorkInfo_Wrap = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  padding: 10px 5px;
  display: flex;
  align-items: center;
`;

const IconWrap_WorkInfo = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  svg {
    margin-right: 20px;
    font-size: 20px;
  }
`;

const TextWrap_WorkInfo = styled.div`
  p:nth-child(1) {
    font-weight: 600;
    font-size: 14px;
  }
  p:nth-child(2) {
    color: darkgray;
    font-size: 13px;
  }
`;

const Contacts_Wrap = styled.div`
    width: 100%;
    padding-top: 20px;
    p{
        margin-bottom: 20px;
    }
    p:nth-child(1){
        font-weight: 600;
    }
    p:nth-child(2){
        font-size: 15px;
        color: slateblue;
    }
    p:nth-child(3){
        font-size: 15px;
        color: slateblue;
    }
`;

const Socials_Wrap = styled.div`

`;

const IconWrap_Socials = styled.div`
  div {
  }
`;

/*
Left Items
*/

const Profile = styled.div`
  width: 100%;
  height: 250px;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: cover;
  border-radius: 10px;
  margin-bottom: 20px;
`;

/*
Right Wrappers
*/

const Right_Wrap = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function MyPage_Test() {
  const WorkInfo_f = ({ workInfo_title, workInfo_desc, workInfo_icon }) => {
    return (
      <WorkInfo_Wrap>
        <IconWrap_WorkInfo>
          <FontAwesomeIcon icon={workInfo_icon} />
        </IconWrap_WorkInfo>
        <TextWrap_WorkInfo>
          <p>{workInfo_title}</p>
          <p>{workInfo_desc}</p>
        </TextWrap_WorkInfo>
        <Socials_Wrap>
            <IconWrap_Socials></IconWrap_Socials>
        </Socials_Wrap>
      </WorkInfo_Wrap>
    );
  };

  const Left_f = ({
    bgImage,
    workInfo_icon_1,
    workInfo_icon_2,
    workInfo_icon_3,
    workInfo_title_1,
    workInfo_title_2,
    workInfo_title_3,
    workInfo_desc_1,
    workInfo_desc_2,
    workInfo_desc_3,
    contact_number,
    contact_email
  }) => {
    return (
      <Left_Wrap>
        <Profile
          style={{ backgroundImage: `url("../images/portraits/${bgImage}")` }}
        />
        <WorkInfo_GlobalWrap>
          <WorkInfo_f
            workInfo_title={workInfo_title_1}
            workInfo_desc={workInfo_desc_1}
            workInfo_icon={workInfo_icon_1}
          />
          <WorkInfo_f
            workInfo_title={workInfo_title_2}
            workInfo_desc={workInfo_desc_2}
            workInfo_icon={workInfo_icon_2}
          />
          <WorkInfo_f
            workInfo_title={workInfo_title_3}
            workInfo_desc={workInfo_desc_3}
            workInfo_icon={workInfo_icon_3}
          />
        </WorkInfo_GlobalWrap>
          <Contacts_Wrap>
            <p>Contacts</p>
            <p>{contact_number}</p>
            <p>{contact_email}</p>
          </Contacts_Wrap>
      </Left_Wrap>
    );
  };

  const Right_f = () => {
    return <Right_Wrap></Right_Wrap>;
  };

  return (
    <>
      <Container>
        <MyPage_Wrap>
          <Left_f
            bgImage={"man_5.png"}
            workInfo_icon_1={faArrowUpRightDots}
            workInfo_icon_2={faClock}
            workInfo_icon_3={faBriefcase}
            workInfo_title_1={"Senior & Lead level"}
            workInfo_desc_1={"Seniority Level"}
            workInfo_title_2={"8 Years"}
            workInfo_desc_2={"Work experience"}
            workInfo_title_3={"Full-Time, Part-type"}
            workInfo_desc_3={"Employment type"}
            contact_number={"+82 10 0000 0000"}
            contact_email={"test@gmail.com"}
          />
          <Right_f />
        </MyPage_Wrap>
      </Container>
    </>
  );
}

export default MyPage_Test;
