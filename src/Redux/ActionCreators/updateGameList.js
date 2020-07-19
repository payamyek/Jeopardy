export function searchList(query) {
    return {type: "SEARCH", payload: {query: query}}
}

export function sortList(sortFilter) {
    return {type: "SORT", payload: {sortFilter: sortFilter}}
}