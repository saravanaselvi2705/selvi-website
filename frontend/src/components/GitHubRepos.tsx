import React, { useState, useEffect } from 'react';
import { GitFork, Star, Calendar, ExternalLink, RefreshCw, Bookmark, Sparkles } from 'lucide-react';
import { Github } from './Icons';

interface Repository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  isHighlighted?: boolean;
}

export default function GitHubRepos() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRepositories = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://api.github.com/users/saravanaselvi2705/repos?sort=updated&per_page=50');
      if (response.ok) {
        const data = await response.json();
        
        // Filter out forks
        const originalRepos: Repository[] = data.filter((repo: any) => !repo.fork);

        // Highlight matching criteria
        const highlighted = originalRepos.map((repo) => {
          const nameLower = repo.name.toLowerCase();
          const descLower = (repo.description || '').toLowerCase();
          
          const matchesStackPilot = nameLower.includes('stackpilot');
          const matchesPortfolio = nameLower.includes('portfolio');
          const matchesExpense = nameLower.includes('expense') || nameLower.includes('tracker');
          const matchesNotes = nameLower.includes('notes') || nameLower.includes('note');
          const matchesMernReact = nameLower.includes('mern') || nameLower.includes('react') || descLower.includes('mern') || descLower.includes('react');

          const isHighlighted = matchesStackPilot || matchesPortfolio || matchesExpense || matchesNotes || matchesMernReact;
          
          return {
            ...repo,
            isHighlighted
          };
        });

        // Sort: highlighted ones first, then by updated timestamp
        const sortedRepos = highlighted.sort((a, b) => {
          if (a.isHighlighted && !b.isHighlighted) return -1;
          if (!a.isHighlighted && b.isHighlighted) return 1;
          return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
        });

        setRepos(sortedRepos.slice(0, 6));
      } else {
        throw new Error('Failed to retrieve repository metrics.');
      }
    } catch (err: any) {
      console.error('GitHub API error:', err);
      setError(err.message || 'Could not connect to GitHub.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  return (
    <section className="py-24 bg-[#0f172a] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-left">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary">Open Source Registry</span>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-dark-gray mt-2 tracking-tight">
              Latest GitHub <span className="text-primary">Repositories</span>
            </h2>
            <p className="text-slate-text text-sm md:text-base mt-2 max-w-xl">
              Dynamically synchronizing public repositories, primary development languages, and repository updates.
            </p>
          </div>
          
          <button
            onClick={fetchRepositories}
            className="p-3 rounded-xl border border-slate-800 hover:border-slate-700 hover:bg-slate-900 text-slate-350 transition-all duration-200 cursor-pointer w-fit self-start md:self-end"
            title="Refresh repositories"
            disabled={loading}
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          </button>
        </div>

        {/* Repos Grid */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 space-y-4">
            <div className="w-9 h-9 border-3 border-primary/20 border-t-primary rounded-full animate-spin"></div>
            <p className="text-slate-400 text-xs font-mono">Synchronizing repositories...</p>
          </div>
        ) : error ? (
          <div className="text-center py-16 border border-slate-800 rounded-2xl bg-slate-900/60 max-w-md mx-auto p-6">
            <p className="text-red-400 font-semibold text-sm mb-3">API Limit or Connection Failure</p>
            <p className="text-slate-text text-xs leading-relaxed mb-5">
              Could not sync repositories from GitHub API. Please check your network connection or review the profile directly.
            </p>
            <a
              href="https://github.com/saravanaselvi2705"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 text-xs font-bold text-primary hover:underline"
            >
              <span>Go to Profile</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        ) : (
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {repos.map((repo) => (
                <div
                  key={repo.id}
                  className={`group border rounded-2xl p-6 hover:shadow-md transition-all duration-200 text-left flex flex-col justify-between ${
                    repo.isHighlighted 
                      ? 'border-primary/45 ring-1 ring-primary/10 bg-[#1e293b]/60 shadow-sm' 
                      : 'bg-[#1e293b]/40 border-slate-800 shadow-sm'
                  }`}
                >
                  <div>
                    {/* Header */}
                    <div className="flex justify-between items-center mb-4">
                      <span className="px-2.5 py-0.5 rounded-md bg-slate-900 border border-slate-850 text-[10px] font-mono text-slate-300">
                        {repo.language || 'JavaScript'}
                      </span>
                      {repo.isHighlighted ? (
                        <span className="flex items-center space-x-1 text-[9px] font-bold text-primary">
                          <Sparkles className="w-3 h-3 fill-primary text-primary" />
                          <span>HIGHLIGHTED</span>
                        </span>
                      ) : (
                        <Bookmark className="w-4 h-4 text-slate-700" />
                      )}
                    </div>
                    
                    {/* Repo Name */}
                    <h3 className="font-display font-bold text-base text-white group-hover:text-primary transition-colors mb-2.5 line-clamp-1">
                      {repo.name.replace(/-/g, ' ').replace(/_/g, ' ')}
                    </h3>
                    
                    {/* Repo Description */}
                    <p className="text-slate-text text-xs leading-relaxed mb-6 line-clamp-2">
                      {repo.description || "Public repository containing source modules, documentation assets, and operational workflows."}
                    </p>
                  </div>

                  {/* Actions & Metrics */}
                  <div className="space-y-4.5 pt-4 border-t border-slate-800">
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <div className="flex items-center space-x-3">
                        <span className="flex items-center space-x-1">
                          <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                          <span>{repo.stargazers_count}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <GitFork className="w-3.5 h-3.5 text-slate-500" />
                          <span>{repo.forks_count}</span>
                        </span>
                      </div>
                      <span className="flex items-center space-x-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-550" />
                        <span>{new Date(repo.updated_at).toLocaleDateString(undefined, {month: 'short', year: 'numeric'})}</span>
                      </span>
                    </div>

                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-1.5 w-full py-2 rounded-lg border border-slate-700 hover:border-primary hover:text-primary text-slate-300 font-semibold text-xs transition-all duration-200"
                    >
                      <span>View Repository</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Profile CTA redirection */}
            <div className="flex justify-center pt-4">
              <a
                href="https://github.com/saravanaselvi2705"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6.5 py-4.5 rounded-xl bg-primary text-slate-950 font-bold text-xs hover:bg-primary-dark transition-all duration-200 shadow-md shadow-primary/10 cursor-pointer"
              >
                <Github className="w-4 h-4 text-slate-950" />
                <span>View All Repositories</span>
              </a>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
