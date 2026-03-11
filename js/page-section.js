class PageSection extends HTMLElement {
    connectedCallback() {
        const file = this.getAttribute("src");

        fetch(file)
            .then(res => res.text())
            .then(html => this.innerHTML = html);

        const id = file.split("/").pop().split(".")[0];
        this.setAttribute("id", id);
    }
}

customElements.define("page-section", PageSection);