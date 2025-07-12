async function loadProjects() {
  try {
    const response = await fetch('projects.json');
    const projects = await response.json();
    const container = document.getElementById('projects');

    projects.forEach(project => {
      const div = document.createElement('div');
      div.className = 'space-y-1 mb-4';

      const title = document.createElement('h3');
      title.className = 'text-lg font-bold';
      title.textContent = project.title;
      div.appendChild(title);

      const desc = document.createElement('p');
      desc.className = 'text-gray-300';
      desc.textContent = project.description;
      div.appendChild(desc);

      const link = document.createElement('a');
      link.href = project.link;
      link.textContent = 'View Project';
      link.className = 'text-blue-400 hover:underline';
      div.appendChild(link);

      container.appendChild(div);
    });
  } catch (err) {
    console.error('Failed to load projects:', err);
  }
}

document.addEventListener('DOMContentLoaded', loadProjects);

