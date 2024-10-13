export default function SearchFilter({ setSearch }) {
  const handleSearchChange = (e) => {
      setSearch(e.target.value);
  };

  return (
      <input
          type="text"
          onChange={handleSearchChange}
          placeholder="Search properties..."
      />
  );
}
