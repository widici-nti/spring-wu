class ProjectUnit extends HTMLElement {
    constructor() {
        super();

        const url = this.getAttribute("url");
        const title = this.getAttribute("title");
        const shortDesc = this.getAttribute("short");
        const longDesc = this.getAttribute("long") || "";
        const stack = this.getAttribute("stack") || "";

        this.stackTools = stack.split(",").map(t => t.trim()).filter(Boolean);

        this.innerHTML = `
            <div id="project-title">
                <div id="short-desc">
                    <p>${shortDesc}</p>
                </div>
            </div>
            <p id="long-desc">${longDesc}</p>
            <div id="stack"></div>
        `;

        fetchSVG("img/icons/arrow-down.svg", "var(--contrast-color)").then(svg => {
            svg.setAttribute("id", "arrow-down");
            svg.classList.toggle("collapsed");
            this.querySelector("#short-desc").appendChild(svg);
        });

        fetchSVG("img/icons/arrow-up.svg", "var(--contrast-color)").then(svg => {
            svg.setAttribute("id", "arrow-up");
            this.querySelector("#short-desc").appendChild(svg);
        });

        const header = document.createElement(url ? "a" : "h3");
        if (url) {
            header.href = url;
            fetchSVG("img/icons/repo.svg", "var(--accent-color)").then(svg => header.prepend(svg));
            header.appendChild(document.createElement("h3")).textContent = title;
        } else {
            header.textContent = title;
        }
        this.querySelector("#project-title").prepend(header);
    }

    async connectedCallback() {
        this.addEventListener("click", this);

        for (const tool of this.stackTools) {
            const svg = await fetchSVG(`img/icons/${tool}.svg`);
            this.querySelector("#stack").appendChild(svg);
        }
    }

    disconnectedCallback() {
        this.removeEventListener("click", this);
    }

    handleEvent(_e) {
        for (const element of ["#stack", "#long-desc", "#arrow-up", "#arrow-down"]) {
            this.querySelector(element).classList.toggle("collapsed")
        }
    }
}

customElements.define("project-unit", ProjectUnit);