class ProjectUnit extends HTMLElement {
    constructor() {
        super();

        const url = this.getAttribute("url");
        const title = this.getAttribute("title");
        const shortDesc = this.getAttribute("short");
        const longDesc = this.getAttribute("long") || shortDesc;
        const banner = this.getAttribute("img") ? `<img src="${this.getAttribute("img")}" alt="the ${title} banner">` : ``;
        const stack = (this.getAttribute("stack") || "").split(",").map(s => s.trim()).filter(Boolean).map(s => `<img src="img/icons/${s}.svg">`).join("\n");

        const stackIcons = `
            <div id="stack">
                ${stack}
            </div>
        `;

        this.innerHTML = `
            <div>
                ${banner}
                <a href=${url}>
                    <h2 id="title">${title}</h2>
                </a>
                <p id="short-desc">${shortDesc}</p>
                <p id="long-desc">${longDesc}</p>
                ${stackIcons}
            </div>
        `;
    }
}

customElements.define("project-unit", ProjectUnit);