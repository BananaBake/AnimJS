function displayPackage(icon, name, version, description, id) {
  const div = document.createElement('div');
  div.classList.add('pkg', 'goner');
  div.id = "pkg" + id;
  const html = `
    <img src="${icon}" class="icon">
    <div class="content">
      <h1 class="name">${name} ${version}</h1>
      <p class="desc">${description}</p>
    </div>
  `;
  div.innerHTML = html;
  document.getElementById('pkgs').appendChild(div);
  animateOnVis(div.id, "fade-in", 1000, "", "forwards")
}

function displayPackages(packages) {
  let id = 0;
  packages.forEach(pkg => {
    id ++;
    displayPackage(pkg.icon, pkg.name, pkg.version, pkg.description, id);
  });
}

function searchPackage(packages, query) {
  query = query.toLowerCase();
  let results = [];
  const nameResults = [];
  const descriptionResults = [];
  packages.forEach(pkg => {
    if (pkg.name.toLowerCase().includes(query)) {
      nameResults.push(pkg);
    } else if (pkg.description.toLowerCase().includes(query)) {
      descriptionResults.push(pkg);
    }
  });
  results = [...nameResults, ...descriptionResults];
  return results;
}

function searchAndDisplay(packages, query) {
  const results = searchPackage(packages, query);
  document.getElementById('pkgs').innerHTML = "";
  displayPackages(results);
}