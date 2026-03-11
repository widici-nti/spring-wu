class PageSection extends HTMLElement {
    connectedCallback() {
        const file = this.getAttribute("src");

        fetch(file)
            .then(res => res.text())
            .then(html => this.innerHTML = html);
    }
}

customElements.define("page-section", PageSection);