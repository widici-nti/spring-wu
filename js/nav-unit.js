class NavUnit extends HTMLElement {
    constructor() {
        super();

        const text = this.getAttribute("text");
        const svg = this.getAttribute("svg");
        const url = this.getAttribute("url");
        const color = this.getAttribute("color");

        const backgroundColor = color ? color : "var(--accent-color)";
        const contrastColor = "var(--contrast-color)";
        const svgIcon = svg ? `<svg-icon name="${svg}" color="${contrastColor}"></svg-icon>` : "";

        const inner = `
            <div style="--nav-background-color: ${backgroundColor}; --nav-contrast-color: ${contrastColor}">
                ${svgIcon}
                <h3>${text}</h3>
            </div>
        `;

        this.innerHTML = url ? `<a href="${url}">${inner}</a>` : inner;
    }
}

customElements.define("nav-unit", NavUnit);