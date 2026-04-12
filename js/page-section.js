class PageSection extends HTMLElement {
    connectedCallback() {
        const file = this.getAttribute("src");

        const id = file.split("/").pop().split(".")[0];
        this.setAttribute("id", id);

        const shadow = this.attachShadow({ mode: "open" });

        fetch(file)
            .then(res => res.text())
            .then(html => shadow.innerHTML = html);
    }
}

customElements.define("page-section", PageSection);