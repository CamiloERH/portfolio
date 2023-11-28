const titleMap = {
    "/": "Home",
};
/**
 * Returns the title of a page based on its route path.
 * @param {string} path - The path of the page route.
 * @returns {string} The title of the page with the site name appended.
 */
export const getTitleFromRoute = (path) => {

    if (titleMap[path]) {
        return `${titleMap[path]} | Portfolio`;
    }

    return "Portfolio";
};
