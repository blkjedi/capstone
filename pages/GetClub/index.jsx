import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { data } from "../../data/data";

export default function GetClub() {
  const [results, setResult] = useState(null);
  const params = useParams();
  console.log(params);

  const project = data.find((p) => p.clubId == params.clubId);
  console.log(project);

  // ============ API Example ===============
  useEffect(() => {
    const fetchProject = (clubId) => {
      console.log(`fetching id ${clubId}...`);
    };
    fetchProject(params.clubId);
    // set the new project in state
  }, [params.clubId]);
  const handleClick= (e) => {
    e.preventDefault();

    if (params.avgBest11 < params.avgBest11 ){
        <div key={params.avgBest11}>
       <h2>{results}</h2>
    </div>
    }

    //map over data return matching clubs 
    //put new arry into results state show each club that matches range
  }

  return (
    <div>
      <h1>club Details </h1>
      <Link to="/projects">back</Link>

      <h2>{project.clubName}</h2>
      <h4>ClubID:{project.clubId}</h4>
      <h4>Rating:{project.avgBest11}</h4>
      <button onClick={handleClick}>easy Match</button>
      {results && (
        <div>
          <h2>result</h2>
        </div>
      )}
    </div>
  );
}
