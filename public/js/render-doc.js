// Project data - could also be fetched from an API
const projects = [
  {
    title: "Brainstorming Session",
    description: "This project is derived from our last meeting. It's not just for sharing ideas, but also to help us think, plan, and build our next big feature.",
    borderColor: "blue"
  },
  {
    title: "Q3 Marketing Campaign",
    description: "Planning and execution of the marketing campaign for the third quarter. Includes social media strategy, content creation, and performance tracking.",
    borderColor: "purple"
  },
  {
    title: "Website Redesign",
    description: "A complete overhaul of the company website to improve user experience, performance, and visual appeal. Focus on a mobile-first approach.",
    borderColor: "green"
  },
  {
    title: "Mobile App Development",
    description: "Developing the new native mobile application for both iOS and Android platforms. This project covers the entire development lifecycle.",
    borderColor: "blue"
  },
  {
    title: "API Integration",
    description: "Integrating third-party APIs to enhance our product's functionality. This involves research, implementation, and testing of various APIs.",
    borderColor: "purple"
  },
  {
    title: "Product Launch Plan",
    description: "A comprehensive document detailing the strategy and timeline for the upcoming product launch. Includes marketing, sales, and PR activities.",
    borderColor: "green"
  }
];

// Function to create a project card
function createProjectCard(project) {
  const card = document.createElement('div');
  card.className = `project-card p-4 sm:p-6 border-l-[4px] border-[var(--project-card-border-${project.borderColor})]`;
  
  const title = document.createElement('h2');
  title.className = 'project-card-title text-lg sm:text-xl mb-2 sm:mb-3';
  title.textContent = project.title;
  
  const description = document.createElement('p');
  description.className = 'project-card-description text-sm sm:text-base';
  description.textContent = project.description;
  
  card.appendChild(title);
  card.appendChild(description);
  
  return card;
}

// Function to render all projects
function renderProjects() {
  const container = document.getElementById('projects-container');
  
  // Clear existing content (if any)
  container.innerHTML = '';
  
  // Add each project to the container
  projects.forEach(project => {
    const card = createProjectCard(project);
    container.appendChild(card);
  });
}

// Render projects when page loads
document.addEventListener('DOMContentLoaded', renderProjects);
