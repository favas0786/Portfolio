// src/components/Projects.tsx

import { HiOutlineCode, HiOutlineSearch } from 'react-icons/hi';
// Import the new 'GithubRepo' type and the updated 'ProjectCard'
import ProjectCard, { GithubRepo } from './ProjectCard';

// --- Function to fetch your repos ---
async function getGithubRepos() {
  // TODO: Change 'YOUR_GITHUB_USERNAME' to your actual username
  const username = 'https://github.com/favas0786'.split('github.com/')[1];
  
  // Fetches repos, sorted by most recently pushed, max 6 results
  const res = await fetch(
    `https://api.github.com/users/${username}/repos?sort=pushed&direction=desc&per_page=6`,
    {
      // This revalidates the data every hour (3600 seconds)
      // Your portfolio will automatically update without needing a new build
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    // Handle errors if GitHub API fails
    console.error('Failed to fetch GitHub repos');
    return [];
  }

  const data = await res.json();
  return data as GithubRepo[];
}

// --- Reusable component for the filter pill ---
function FilterPill({ label, isActive = false }: { label: string, isActive?: boolean }) {
  // ... (FilterPill code remains exactly the same as before)
  return (
    <button
      className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors
        ${isActive
          ? 'bg-gray-800 text-white'
          : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
        }
      `}
    >
      {label}
    </button>
  );
}


// --- The Main Component is now 'async' ---
export default async function Projects() {
  
  // 1. Fetch the data when the component renders
  const repos = await getGithubRepos();

  return (
    <section id="projects" className="bg-gray-50 py-24">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="flex items-center gap-3 mb-8">
          <HiOutlineCode className="w-8 h-8 text-cyan-600" />
          <h2 className="text-3xl font-bold text-gray-900">Recent Projects</h2>
        </div>

        {/* Filters and Search Bar (functionality not implemented yet) */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            <FilterPill label="All" isActive={true} />
            <FilterPill label="MERN" />
            <FilterPill label="Frontend" />
            <FilterPill label="Backend" />
          </div>
          <div className="relative w-full md:w-auto">
            <input
              type="text"
              placeholder="Search projects, tags..."
              className="w-full md:w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <HiOutlineSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* 2. Projects Grid now maps over the 'repos' data from the API */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {repos.length > 0 ? (
            repos.map((repo) => (
              <ProjectCard key={repo.id} repo={repo} />
            ))
          ) : (
            <p className="text-gray-600">No projects found. Check your GitHub username.</p>
          )}
        </div>

      </div>
    </section>
  );
}