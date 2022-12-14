import { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Skeleton,{SkeletonTheme} from "react-loading-skeleton";

import {fetchRepos} from "../services/fetchTeamDetails"
import "./repoComponent.css"

const RepoComponent=({repoUrl,loginId})=> {
    
   const [repoDetails, setRepoDetails] = useState([]);
   const [loading, setLoading] = useState(true);

    useEffect(()=>{
        repoUrl && fetchRepos(repoUrl,loginId).then((repo)=>{
            setRepoDetails(repo);
            setLoading(true);
        }).catch((err)=>{
          console.log(err);
        }).finally(()=>{
          setLoading(false);
        }) 
    },[repoUrl]);
    
    if(loading){
        return(
            <SkeletonTheme className="skele-color">
                <Skeleton className="repo-skele-header"></Skeleton>
                <Skeleton className="repo-skele-body"></Skeleton>
            </SkeletonTheme>
        )
    } else {
        return (
         repoDetails?.map((repo,index)=>
            <Accordion defaultActiveKey={0} key={index}>
                <Accordion.Item eventKey={index}>
                    <Accordion.Header><h5>Repo : {repo.name}</h5></Accordion.Header>
                    <Accordion.Body>
                    <Container>
                        
                        {repo?.full_name? <Row>
                            <Col>Name:</Col>
                            <Col>{repo.full_name}</Col>
                        </Row> : null}
                        {repo?.description? <Row>
                            <Col>Description:</Col>
                            <Col>{repo.description}</Col>
                        </Row> : null}
                        {repo?.clone_url? <Row>
                            <Col>Clone Url:</Col>
                            <Col>{repo.clone_url}</Col>
                        </Row> : null}
                        {repo?.language? <Row>
                            <Col>Language:</Col>
                            <Col>{repo.language}</Col>
                        </Row> : null}
                        {repo?.created_at? <Row>
                            <Col>Created At:</Col>
                            <Col>{repo.created_at}</Col>
                        </Row> : null}
                        {repo?.pushed_at? <Row>
                            <Col>Pushed At:</Col>
                            <Col>{repo.pushed_at}</Col>
                        </Row> : null}
                    </Container>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
         )
        )
    }
}

export default RepoComponent;