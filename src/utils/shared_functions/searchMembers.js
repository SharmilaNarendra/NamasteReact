

/** search functionality to search memeber by thier fields */
const searchMembers = (searchText,listOfTeamMembers) =>{
    return listOfTeamMembers?.filter(
        (mem)=>(mem.name?.toLowerCase().includes(searchText.toLowerCase())) ||
               (mem.company?.toLowerCase().includes(searchText.toLowerCase())) ||
               (mem.location?.toLowerCase().includes(searchText.toLowerCase()))
    )
}

export default searchMembers;