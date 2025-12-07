export async function renderCards(extensions) {
    const container = document.querySelector(".extensions-list");

  container.innerHTML = extensions
    .map(
      (extension) => `
        <div class="card">
            <div class="card-header">
                <img src="${extension.logo}" alt="${extension.name} Logo" class="card-logo">

                <div class="card-info">
                    <h2 class="title extension">${extension.name}</h2>
                    <p class="description">${extension.description}</p>
                </div>
            </div>

            <div class="card-actions">
                <button class="btn-remove" data-name="${extension.name}">Remove</button>
                <label class="switch">
                    <input type="checkbox" class="toggle" data-name="${extension.name}" />
                    <span class="slider"></span>
                </label>
            </div>
        </div>
    `
    )
    .join("");
}
