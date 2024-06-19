

import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  const search = e => {
    e.preventDefault();
    navigate("/projects/" + e.target.search.value);
  };

  return (
    <div className="homePage">
      <form className="searchBar" onSubmit={search}>
        <input
          type="search"
          id="search"
          placeholder="Enter clubID..."
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}