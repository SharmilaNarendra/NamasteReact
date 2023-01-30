import data from "../utils/constants/data.json";

export async function fetchTeamdata() {
  let teamDetails = [];
  try {
    if (sessionStorage.getItem("membersInfo")) {
      teamDetails = JSON.parse(sessionStorage.getItem("membersInfo"));
    } else {
      for (let i = 0; i < data.length; i++) {
        const teamData = await fetch(
          "https://api.github.com/users/" + data[i].id
        );
        const jsonTeamData = await teamData.json();
        teamDetails.push(jsonTeamData);
      }
      sessionStorage.setItem("membersInfo", JSON.stringify(teamDetails));
    }
  } catch (error) {
    console.error("Error : " + error);
  }
  return teamDetails;
}

export async function fetchRepos(repoUrl, loginId) {
  let jsonRepoData = [];
  try {
    if (sessionStorage.getItem(loginId)) {
      jsonRepoData = JSON.parse(sessionStorage.getItem(loginId));
    } else {
      const repoData = await fetch(repoUrl);
      jsonRepoData = await repoData?.json();
      sessionStorage.setItem(
        jsonRepoData[0].owner.login,
        JSON.stringify(jsonRepoData)
      );
    }
  } catch (error) {
    console.error("Error : " + error);
  }
  return jsonRepoData;
}
