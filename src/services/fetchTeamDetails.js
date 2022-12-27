import data from "../utils/constants/data.json";

export async function fetchTeamdata() {
  let teamDetails = [];
  if (sessionStorage.getItem('membersInfo')) {
     teamDetails = JSON.parse(sessionStorage.getItem('membersInfo'));
  } else {
    for (let i = 0; i < data.length; i++) {
      const teamData = await fetch("https://api.github.com/users/" + data[i].id);
      const jsonTeamData = await teamData.json();
      teamDetails.push(jsonTeamData);
      sessionStorage.setItem('membersInfo',JSON.stringify(teamDetails));
    }
  }
  return teamDetails;
}

export async function fetchRepos(repoUrl) {
  let repoData = [];
  if (sessionStorage.getItem('repoData')) {
    repoData = JSON.parse(sessionStorage.getItem('repoData'));
  }else{
    const repoData = await fetch(repoUrl);
    const jsonRepoData = await repoData?.json();
    sessionStorage.setItem('repoData',JSON.stringify(jsonRepoData));
  }
  return repoData;
}