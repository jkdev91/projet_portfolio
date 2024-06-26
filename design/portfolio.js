// Récupération des données des projets depuis le fichier JSON
fetch('projects.json')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    // Sélection de l'élément container où les projets seront affichés
    const projectcontainer = document.querySelector('.portfolio-container')

    // Création et affichage des projets
    data.forEach(project => {
      // Création des "cartes" de projet
      const projectElement = document.createElement('div');
      projectElement.classList.add('portfolio-box');

      // Création des éléments enfants
      const imageElement = document.createElement('img');
      imageElement.src = project.image
    //   imageElement.classList.add('project-image');
    //   imageElement.style.backgroundImage = `url(${project.image})`;

      const contentElement = document.createElement('div');
      contentElement.classList.add('portfolio-layer');

      const titleElement = document.createElement('h4');
      titleElement.textContent = project.title;

      const descriptionElement = document.createElement('p');
      descriptionElement.textContent = project.description;

      const linksElement = document.createElement('div');
      linksElement.classList.add('link-project');

      const liveElement = document.createElement('a');
      liveElement.href = project.liveUrl;
      // liveElement.textContent = 'Live Demo';
      liveElement.target = '_blank';

      const codeElement = document.createElement('a');
      codeElement.href = project.codeUrl;
      // codeElement.textContent = 'View Code';
      // codeElement.target = '_blank';

      const linkGitHub = document.createElement('i');
      linkGitHub.classList.add('fa-solid');
      linkGitHub.classList.add('fa-up-right-from-square');

      const linkGitHubContent = document.createElement('p');
      linkGitHubContent.textContent = 'lien github'

      const linkDemo = document.createElement('i');
      linkDemo.classList.add('fa-solid');
      linkDemo.classList.add('fa-up-right-from-square');

      const linkDemoContent = document.createElement('p');
      linkDemoContent.textContent = 'lien Demo'


      // Ajout des éléments enfants
      linksElement.appendChild(liveElement);
      linksElement.appendChild(codeElement);
      contentElement.appendChild(titleElement);
      contentElement.appendChild(descriptionElement);
      contentElement.appendChild(linksElement);
      projectElement.appendChild(imageElement);
      projectElement.appendChild(contentElement);
      codeElement.appendChild(linkGitHub);
      codeElement.appendChild(linkGitHubContent);
      codeElement.appendChild(linkDemo);
      codeElement.appendChild(linkDemoContent);

      // Ajout du projet à la section
    //   projectsSection.appendChild(projectElement);
      projectcontainer.appendChild(projectElement);
    });
  })
  .catch(error => {
    console.error('Erreur lors de la récupération des données des projets :', error);
  });