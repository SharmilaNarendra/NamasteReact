import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {fetchTeamdataById } from "../services/fetchTeamDetails";
import MemberRepoComponent from "./RepoComponent";
import "./memberDetail.css"


const MemberDetail = ()=>{
const {id} = useParams();
const [teamMemberData,setTeamMemberData] = useState({});

useEffect(()=>{
   fetchTeamdataById(id).then((memeber) => {
       setTeamMemberData(memeber);
    });
},[]);

return(
    <div className="profile">
        <div className="vert-bar"></div>
        <img className="profile-img" src={teamMemberData.avatar_url}/>
        <div className="profile-data">
            <span className="profile-title">{teamMemberData?.name}</span>
            <Container>
            <Row>
                <Col><h4>GitHub details</h4></Col>
            </Row>
            <hr />
            {teamMemberData?.id? <Row>
                <Col>User ID:</Col>
                <Col>{teamMemberData?.id}</Col>
            </Row> : null}
            {teamMemberData?.login? <Row>
                <Col>Login ID:</Col>
                <Col>{teamMemberData?.login}</Col>
            </Row> : null}
           {teamMemberData?.followers? <Row>
               <Col>Followers:</Col>
                <Col>{teamMemberData?.followers}</Col>
            </Row> : null}
            {teamMemberData?.following? <Row>
                <Col>Following:</Col>
                <Col>{teamMemberData?.following}</Col>
            </Row> : null}
            {teamMemberData?.created_at? <Row>
                <Col>Created Date:</Col>
                <Col>{teamMemberData?.created_at}</Col>
            </Row> : null}
            <Row>
                <Col><h4>Repositories:</h4></Col>
            </Row>
            <hr />
            <MemberRepoComponent repoUrl={teamMemberData?.repos_url}/>
            </Container>
        </div>
    </div>
);
};

export default MemberDetail;