class SVGIcon extends HTMLElement {
    async connectedCallback() {
        const name = this.getAttribute("name");
        const color = this.getAttribute("color");
        if (!name) return;

        const file = await fetch(`/img/icons/${name}.svg`);
        const text = await file.text();

        const parser = new DOMParser();
        const svg = parser.parseFromString(text, "image/svg+xml").querySelector("svg");

        if (color) {
            [svg, ...svg.querySelectorAll("[fill]")].forEach(el => {
                if (el.getAttribute("fill") !== "none") {
                    el.setAttribute("fill", color);
                }
            });
        }

        this.replaceChildren(svg)
    }
}

customElements.define("svg-icon", SVGIcon);