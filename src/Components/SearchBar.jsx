const SearchBar = () => (
  <form className="w-full max-w-sm">
    <label htmlFor="search" className="sr-only">Search</label>
    <input
      id="search"
      type="text"
      placeholder="Search…"
      className="
        block
        w-full
        px-4 py-2
        border border-gray-300
        rounded-md
        shadow-sm
        placeholder-gray-400
        focus:outline-none
        focus:ring-2 focus:ring-indigo-500
        focus:border-indigo-500
      "
    />
  </form>
);


export default SearchBar;