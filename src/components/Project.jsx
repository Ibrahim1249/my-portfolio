import {projects} from "../../data.js"
import { useState } from "react";

function Project() {
  const categories = ["All", "ReactJs", "JavaScript", "HTML-CSS"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const handleFilterClick = (category) => {
    setSelectedCategory(category);
    setIsSelectOpen(false); 
  };

  const handleSelectClick = () => {
    setIsSelectOpen(!isSelectOpen); 
  };
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <>
         <article className="portfolio" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>
      <section className="projects">
        <ul className="filter-list">
          {categories.map((category) => (
            <li className="filter-item" key={category}>
              <button 
                className={category === selectedCategory ? "active" : ""} 
                onClick={() => handleFilterClick(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
        <div className="filter-select-box">
          <button className="filter-select" data-select="" onClick={handleSelectClick}>
            <div className="select-value" data-select-value="">
              {selectedCategory}
            </div>
            <div className="select-icon">
              <ion-icon name="chevron-down" />
            </div>
          </button>
          {isSelectOpen && (
            <ul className="select-list">
              {categories.map((category) => (
                <li className="select-item" key={category}>
                  <button data-select-item="" onClick={() => handleFilterClick(category)}>
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <ul className="project-list">
          {filteredProjects.map(({ category, url, imgSrc, imgAlt, title }) => (
            <li className="project-item active" data-filter-item="" data-category={category} key={title}>
              <a target="_blank" rel="noopener noreferrer" href={url}>
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline" />
                  </div>
                  <img src={imgSrc} alt={imgAlt} loading="lazy" />
                </figure>
                <h3 className="project-title">{title}</h3>
                <p className="project-category">{category}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
    </>
  )
}

export default Project