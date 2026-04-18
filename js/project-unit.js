class ProjectUnit extends HTMLElement {
    constructor() {
        super();

        const url = this.getAttribute("url");
        const title = this.getAttribute("title");
        const shortDesc = this.getAttribute("short");
        const longDesc = this.getAttribute("long") || "";
        const stack = this.getAttribute("stack") || "";

        const SVGIcons = stack.split(",")
            .map(t => t.trim())
            .filter(Boolean)
            .map(tool => `<svg-icon name="${tool}"></svg-icon>`)
            .join("\n");

        this.innerHTML = `
            <div id="project-title">
                <div id="short-desc">
                    <p>${shortDesc}</p>
                    <svg-icon id="arrow-down" name="arrow-down" color="var(--contrast-color)" class="collapsed"></svg-icon>
                    <svg-icon id="arrow-up" name="arrow-up" color="var(--contrast-color)"></svg-icon>
                </div>
            </div>
            <p id="long-desc">${longDesc}</p>
            <div id="stack">
                ${SVGIcons}
            </div>
        `;

        const header = document.createElement(url ? "a" : "h3");
        if (url) {
            header.href = url;
            header.innerHTML = `<svg-icon name="repo" color="var(--accent-color)"></svg-icon><h3>${title}</h3>`;
        } else {
            header.textContent = title;
        }
        this.querySelector("#project-title").prepend(header);
    }

    async connectedCallback() {
        this.addEventListener("click", this);
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