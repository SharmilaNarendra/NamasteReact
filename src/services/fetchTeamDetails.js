import data from "../utils/constants/data.json";

export async function fetchTeamdata() {
  const teamDetails = [];
  for (let i = 0; i < data.length; i++) {
    const teamData = await fetch("https://api.github.com/users/" + data[i].id);
    const jsonTeamData = await teamData.json();
    teamDetails.push(jsonTeamData);
  }
  return teamDetails;
}

export async function fetchTeamdataById(id) {
  const teamDetails = [];
  const url = "https://api.github.com/users/"+id;
  const teamData = await fetch(url);
  const jsonTeamData = await teamData.json();
  return jsonTeamData;
}

export async function fetchRepos(repoUrl) {
  const repoData = await fetch(repoUrl);
  const jsonRepoData = await repoData?.json();
  return jsonRepoData;
}