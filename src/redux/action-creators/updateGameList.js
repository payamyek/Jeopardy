export function searchList(query) {
    return {type: "SEARCH", payload: {query: query}}
}

export function sortList(sortFilter) {
    return {type: "SORT", payload: {sortFilter: sortFilter}}
}

export function tagFilter(tag) {
    return {type: "TAG_FILTER", payload: {tag: tag}}
}

export function resetQueryResults() {
    return {type: "RESET_QUERY_RESULTS"}
}