import React, { useState, useEffect } from "react";
import { useFetchNews } from "@/hooks/useFetchNews";
import { Category, Source } from "@/types";
import FilterPanel from "@/components/FilterPanel/FilterPanel";
import NewsCard from "@/components/NewsCard/NewsCard";
import { SearchBar } from "@/components/SearchBar.tsx/SearchBar";
import { FaFilter } from "react-icons/fa";
import SkeletonCard from "./SkeltonCard/SkeltonCard";

const AllNews: React.FC = () => {
  const [filters, setFilters] = useState<{
    date?: string;
    category?: Category;
    source?: Source;
    searchQuery?: string;
  }>({});
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const { data: news, isLoading } = useFetchNews({
    date: filters.date,
    category: filters.category,
    source: filters.source,
    searchQuery: filters.searchQuery,
  });

  const handleFilterApply = (newFilters: {
    date?: string;
    category?: Category;
    source?: Source;
    searchQuery?: string;
  }) => {
    setFilters(newFilters);
  };

  useEffect(() => {
    const queryParams = new URLSearchParams();
    if (filters.date) queryParams.set("date", filters.date);
    if (filters.category) queryParams.set("category", filters.category);
    if (filters.source) queryParams.set("source", filters.source);
    if (filters.searchQuery) queryParams.set("q", filters.searchQuery);
    window.history.replaceState(null, "", `?${queryParams.toString()}`);
  }, [filters]);

  const handleSearch = (search: string) => {
    handleFilterApply({ ...filters, searchQuery: search });
  };

  return (
    <div className="all-news-container">
      <>
        <SearchBar
          searchInput={filters?.searchQuery}
          handleSearchClick={handleSearch}
        />
      </>

      {/* Accordion for Filters */}
      <div className="accordion-container">
        <button
          className="accordion-toggle"
          onClick={() => setIsAccordionOpen(!isAccordionOpen)}
        >
          <FaFilter />
          {isAccordionOpen ? "Hide Filters" : "Show Filters"}
        </button>

        {isAccordionOpen && (
          <div className="accordion-content">
            <FilterPanel onFilterApply={handleFilterApply} />
          </div>
        )}
      </div>

      {/* Main Layout */}
      <div className="content-container">
        {/* Filter Panel */}
        <div className="filter-panel">
          <FilterPanel onFilterApply={handleFilterApply} />
        </div>

        {/* News Articles */}
        <div className="news-container">
        {isLoading
            ? Array.from({ length: 5 }).map((_, index) => (
                <SkeletonCard key={index} />
              )
          ) : (
            news?.map((article) => (
              <NewsCard
                key={article.title}
                title={article.title}
                url={article.url}
                publishedAt={article.publishedAt}
                author={article.author}
                description={article?.description}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AllNews;
