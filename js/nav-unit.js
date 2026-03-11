class NavUnit extends HTMLElement {
    constructor() {
        super();

        const text = this.getAttribute("text");
        const img = this.getAttribute("img") ? `<img src="${this.getAttribute("img")}" alt="the ${text} icon">` : ``;
        const url = this.getAttribute("url");
        const color = this.getAttribute("color") || "var(--accent-color)";

        this.innerHTML = `
            <div id="github" style="--nav-unit-color: ${color}">
                ${img}
                <h3>${text}</h3>
            </div>
        `

        if (url !== "") {
            this.innerHTML = `
                <a href="${url}">
                    ${this.innerHTML}
                </a>
            `
        }
    }
}

customElements.define("nav-unit", NavUnit);