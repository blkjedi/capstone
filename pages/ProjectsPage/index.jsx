import { useState } from "react";
import { data } from "../../data/data";
import { Link } from "react-router-dom";

export default function ProjectsPage() {
    const [projects, setProjects]=  useState(data)
  return (
    <div>
      <h1>clubs Page</h1>

      <section>
        {projects && projects.map((p => (
            <div key={p.clubId}>
                <Link to={`/projects/${p.clubId}`}>
                <h2>{p.clubName}</h2>
                </Link>
            </div>
        )))}
      </section>
    </div>
  );
}