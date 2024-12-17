import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
  return (
   
      <div className="bg-gray-100 p-2 rounded-full flex items-center gap-2">
      <SearchIcon className="text-gray-500" />
        <input type = "text" placeholder="Search a post..." className="bg-transparent focus:outline-none  "/>
      </div>
  )
}

export default Search
