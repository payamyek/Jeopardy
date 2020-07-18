export function searchList(query) {
    return {type: "SEARCH", payload: {query: query}}
}
