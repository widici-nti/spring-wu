async function fetchSVG(path, color) {
    const file = await fetch(path);
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

    return svg
}