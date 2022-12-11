import data from "../constants/data.json"

/** search functionality to search memeber by thier fields */
const searchMembers = (searchText) =>{
    return data?.filter(
        (mem)=>(mem.name?.toLowerCase().includes(searchText.toLowerCase())) ||
               (mem.designation?.toLowerCase().includes(searchText.toLowerCase())) ||
               (mem.company?.toLowerCase().includes(searchText.toLowerCase())) ||
               (mem.city?.toLowerCase().includes(searchText.toLowerCase()))
    )
}

export default searchMembers;