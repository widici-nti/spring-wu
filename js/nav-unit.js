class NavUnit extends HTMLElement {
    constructor() {
        super();

        const text = this.getAttribute("text");
        const img = this.getAttribute("img");
        const url = this.getAttribute("url");
        const color = this.getAttribute("color");

        this.innerHTML = `
            <div id="github" style="--nav-unit-color: ${color}">
                ${img ? `<img src="${img}" alt="the GitHub icon">` : ``}
                <h3>${text}</h3>
            </div>
        `

        if (url !== "") {
            this.innerHTML = `
                <a href="https://github.com/widici">
                    ${this.innerHTML}
                </a>
            `
        }
    }
}

customElements.define("nav-unit", NavUnit);