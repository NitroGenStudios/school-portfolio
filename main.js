const url = "https://raw.githubusercontent.com/NitroGenStudios/PortfolioJSON/refs/heads/main/portfolio.json"
// https://console.cloudinary.com/console/c-2049beeb7e2e950effd5dc0a224cbd/media_library/folders/caa5c3de4a89670b9be405a89abcd62200?view_mode=mosaic&sortField=publicId&sortDirection=asc

function CreateProjectCard(data)
{
    var temakorok = ""

    data.topics.forEach(temakor => {
        temakorok += `<li>${temakor}</li>`
    });

    return `<div class="project-container">
                <div class="project-layout">
                    <div class="project-img">
                        <img id="img-${data.id}" src="${data.photo_url}">
                        <img class="img-glow" src="${data.photo_url}">
                    </div>
                    <div class="project-description">
                        <h3>${data.title}</h3>
                        <hr>
                        <p>Témakörök</p>
                        <ul>
                            ${temakorok}
                        </ul>

                        <div class="project-links">
                            <a href="${data.repo_link}" target="_blank" style="text-align: right;">Github link</a>
                            <a href="${data.site_link}" target="_blank" style="text-align: right;">Weboldal</a>
                        </div>
                    </div>
                </div>
            </div>`
}

function Render(json)
{
    const container = document.getElementById("projects")

    json.forEach(data => {
        container.innerHTML += CreateProjectCard(data)
    });
}

GetData(url, Render)
