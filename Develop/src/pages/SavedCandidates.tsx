import React, { useEffect, useState } from 'react';
import { Candidate } from '../interfaces/Candidate.interface';

const SavedCandidates: React.FC = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('savedCandidates');
    if (saved) {
      setSavedCandidates(JSON.parse(saved));
    }
  }, []);

  return (
    <div>
      <h2>Potential Candidates</h2>
      <ul>
        {savedCandidates.map((candidate) => (
          <li key={candidate.html_url}>
            <img src={candidate.avatar_url} alt={candidate.name} width="50" />
            <div>
              <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
                {candidate.name}
              </a>
              <p>{candidate.email}</p>
              <p>{candidate.location}</p>
              <p>{candidate.company}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SavedCandidates;