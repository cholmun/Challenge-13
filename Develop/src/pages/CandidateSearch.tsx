import { useState, useEffect } from 'react';
import { Candidate } from '../interfaces/Candidate.interface';
import { searchGithub, searchGithubUser } from '../api/API';

const CandidateSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  const handleSearch = async () => {
    const users = await searchGithub();
    const candidateDetails = await Promise.all(
      users.map(async (user: any) => {
        const userData = await searchGithubUser(user.login);
        return {
          name: userData.name,
          email: userData.email,
          location: userData.location,
          company: userData.company,
          avatar_url: userData.avatar_url,
          html_url: userData.html_url,
        };
      })
    );

    setCandidates(candidateDetails);
  };

  const saveCandidate = (candidate: Candidate) => {
    const saved = localStorage.getItem('savedCandidates');
    const savedCandidates = saved ? JSON.parse(saved) : [];
    savedCandidates.push(candidate);
    localStorage.setItem('savedCandidates', JSON.stringify(savedCandidates));
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for candidates"
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {candidates.map((candidate) => (
          <li key={candidate.html_url}>
            <img src={candidate.avatar_url} alt={candidate.name} width="50" />
            <div>
              <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
                {candidate.name}
              </a>
              <p>{candidate.email}</p>
              <p>{candidate.location}</p>
              <p>{candidate.company}</p>
              <button onClick={() => saveCandidate(candidate)}>Save</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CandidateSearch;