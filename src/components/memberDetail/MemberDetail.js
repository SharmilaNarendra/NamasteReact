import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { fetchTeamdata } from "../../services/fetchTeamDetails";
import MemberRepoComponent from "../gitHubRepo/GitHubRepoComponent";
import "./memberDetail.css";

const MemberDetail = () => {
  const { id } = useParams();
  const [teamMemberData, setTeamMemberData] = useState({});

  useEffect(() => {
    fetchTeamdata().then((members) => {
      const member = members?.find((mem) => mem.login === id);
      member ? setTeamMemberData(member) : "";
    });
  }, []);

  return (
    <div className="flex flex-row">
      <div className="w-64 vert-bar"></div>
      <img
        className="h-80 w-80 translate-x-0 translate-y-48"
        src={teamMemberData.avatar_url}
      />
      <div className="w-[57%] pt-32">
        <span className="font-mono text-6xl">{teamMemberData?.name}</span>
        <Container className="border-2 border-purple-700 purple text-2xl">
          <Row>
            <Col>
              <h4>GitHub details</h4>
            </Col>
          </Row>
          <hr />
          {teamMemberData?.id ? (
            <Row>
              <Col>User ID:</Col>
              <Col>{teamMemberData?.id}</Col>
            </Row>
          ) : null}
          {teamMemberData?.login ? (
            <Row>
              <Col>Login ID:</Col>
              <Col>{teamMemberData?.login}</Col>
            </Row>
          ) : null}
          {teamMemberData?.followers ? (
            <Row>
              <Col>Followers:</Col>
              <Col>{teamMemberData?.followers}</Col>
            </Row>
          ) : null}
          {teamMemberData?.following ? (
            <Row>
              <Col>Following:</Col>
              <Col>{teamMemberData?.following}</Col>
            </Row>
          ) : null}
          {teamMemberData?.created_at ? (
            <Row>
              <Col>Created Date:</Col>
              <Col>{teamMemberData?.created_at}</Col>
            </Row>
          ) : null}
          <Row>
            <Col>
              <h4>Repositories:</h4>
            </Col>
          </Row>
          <hr />
          <MemberRepoComponent
            repoUrl={teamMemberData?.repos_url}
            loginId={teamMemberData?.login}
          />
        </Container>
      </div>
    </div>
  );
};

export default MemberDetail;
