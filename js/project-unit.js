class ProjectUnit extends HTMLElement {
    constructor() {
        super();

        const url = this.getAttribute("url");
        const title = this.getAttribute("title");
        const shortDesc = this.getAttribute("short");
        const longDesc = this.getAttribute("long") || shortDesc;
        const stack = (this.getAttribute("stack") || "").split(",").map(s => s.trim()).filter(Boolean).map(s => `<img src="img/icons/${s}.svg">`).join("\n");

        const stackIcons = `
            <div id="stack">
                ${stack}
            </div>
        `;

        const header = url == null ? `<h3>${title}</h3>` :
            `<a href=${url}>
                <img src="img/icons/respository-accent.svg" alt="icon for the repository link">
                <h3>${title}</h3>
            </a>`

        this.innerHTML = `
            <div id="project-title">
                ${header}
                <div id="short-desc">
                    <p>${shortDesc}</p>
                    <img src="img/icons/arrow.svg" alt="downwards arrow icon for expanding the project">
                </div>
            </div>
            <p id="long-desc">${longDesc}</p>
            ${stackIcons}
        `;
    }

    connectedCallback() {
        this.addEventListener("click", this);
    }

    disconnectedCallback() {
        this.removeEventListener("click", this);
    }

    handleEvent(_e) {
        this.querySelector("img.banner").classList.toggle("visible");
        this.querySelector("p.long-desc").classList.toggle("visible");
    }
}

customElements.define("project-unit", ProjectUnit);