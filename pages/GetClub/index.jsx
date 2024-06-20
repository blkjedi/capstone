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

  //get matches
  const handleClick = (e) => {
    e.preventDefault();
    const matchingClubs = data.filter((c) =>(parseInt(c.avgBest11) < (project.avgBest11)) );
    console.log(matchingClubs);
    setResult(matchingClubs)};
  const handleEven = (e) => {
    e.preventDefault();
    const evenClubs = data.filter((c) =>(parseInt(c.avgBest11) >= (project.avgBest11)) );
    console.log(evenClubs);
    setResult(evenClubs);

    // if (params.avgBest11 < params.avgBest11) {
    //   <div key={params.avgBest11}>
    //     <h2>{results}</h2>
    //   </div>;
    // }

    //map over data return matching clubs
    //put new arry into results state show each club that matches range
  };

  return (
    <div className="py-4 flex">
      <h1>club Details </h1>
      <Link to="/projects">back</Link>

      <h2 className="text-sm font-medium text-gray-900">{project.clubName}</h2>
      <h4>ClubID:{project.clubId}</h4>
      <h4 className="text-sm text-gray-500">Rating:{project.avgBest11}</h4>
      <button onClick={handleClick}>Easy Match</button>
      <button onClick={handleEven}>Equal Match</button>
      {results && (
       results.map((i) => (
        <div className="ml-3 flex" key={i.clubId}>
            <hr />
            <h3>your opponent</h3>
        <h2 className="text-sm font-medium text-gray-900">{i.clubName}</h2>
        <h4>ClubID:{i.clubId}</h4>
        <h4 className="text-sm text-gray-500">Rating:{i.avgBest11}</h4>
      </div>
       ) )
      )}
    </div>
  );
}
