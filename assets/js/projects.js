fetch('./projects.json')
 .then(response => response.json())
 .then(data => {
    const projectList = document.querySelector('.project-list');
    const filterList = document.querySelector('.filter-list');

    // Create filter buttons
    Object.keys(data).forEach(category => {
      const filterButton = document.createElement('button');
      filterButton.textContent = category;
      filterButton.dataset.filterBtn = category;
      filterList.appendChild(filterButton);
    });

    // Create project items
    Object.entries(data).forEach(([category, projects]) => {
      projects.forEach(project => {
        const projectItem = document.createElement('li');
        projectItem.className = 'project-item';
        projectItem.dataset.filterItem = category;
        projectItem.innerHTML = `
          <a href="#">
            <figure class="project-img">
              <div class="project-item-icon-box">
                <ion-icon name="eye-outline"></ion-icon>
              </div>
              <img src="./assets/images/${project.image}" alt="${project.title}" loading="lazy">
            </figure>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-category">${category}</p>
          </a>
        `;
        projectList.appendChild(projectItem);
      });
    });
  })
 .catch(error => console.error('Error:', error));
