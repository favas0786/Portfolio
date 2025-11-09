// src/components/ProjectCard.tsx

import Link from 'next/link';
import { HiLink } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';

// This new 'type' matches the data we will get from the GitHub API
export type GithubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string; // Link to the repo
  homepage: string | null; // Link to the live site
  topics: string[]; // Tech stack
};

// The component now accepts a 'repo' object
export default function ProjectCard({ repo }: { repo: GithubRepo }) {
  // Use the repo name and capitalize it
  const title = repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden h-full flex flex-col">
      <div className="p-6 grow">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
        
        {/* Show description if it exists */}
        {repo.description && (
          <p className="text-gray-700 mb-4">{repo.description}</p>
        )}

        <h4 className="font-semibold text-gray-800 mb-2">Tech Stack:</h4>
        <div className="flex flex-wrap gap-2 mb-6">
          {repo.topics.length > 0 ? (
            repo.topics.map((tech) => (
              <span
                key={tech}
                className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-medium"
              >
                {tech}
              </span>
            ))
          ) : (
            <span className="text-gray-500 text-sm">No topics listed</span>
          )}
        </div>
      </div>
      
      {/* Links at the bottom */}
      <div className="p-6 bg-gray-50 border-t border-gray-200 flex items-center gap-4">
        
        {/* Show Live Demo button ONLY if 'homepage' link exists in repo settings */}
        {repo.homepage && (
          <Link href={repo.homepage} target="_blank">
            <span className="flex items-center gap-2 px-4 py-2 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-500 transition-colors cursor-pointer text-sm">
              <HiLink className="w-4 h-4" />
              Live Demo
            </span>
          </Link>
        )}
        
        {/* Link to the code on GitHub */}
        <Link href={repo.html_url} target="_blank">
          <span className="flex items-center gap-2 text-gray-700 font-semibold hover:text-gray-900 transition-colors cursor-pointer text-sm">
            <FaGithub className="w-4 h-4" />
            View Code
          </span>
        </Link>
      </div>
    </div>
  );
}