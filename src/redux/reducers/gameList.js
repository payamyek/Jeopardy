import {compareTwoStrings} from "string-similarity";

const data = [
    {
        id: 1,
        name: 'Physics',
        category: 'Math',
        creationDate: 1595122633,
        plays: 10,
        hearts: 123,
        tags: ['#school', '#science', '#fun']
    }, {
        id: 2,
        name: 'Calculus Me',
        category: 'Science',
        creationDate: 1595142633,
        plays: 13123,
        hearts: 141,
        tags: ['#school', 'science', '#fun']
    }, {
        id: 3,
        name: 'Sports',
        category: 'General',
        creationDate: 1595125633,
        plays: 10,
        hearts: 1,
        tags: ['#school', '#science', '#fun']
    }, {
        id: 4,
        name: 'Music',
        category: 'Sports',
        creationDate: 1595122433,
        plays: 14,
        hearts: 1231,
        tags: ['#school', '#science', '#fun']
    }, {
        id: 5,
        name: 'Physics',
        category: 'Math',
        creationDate: 1595124633,
        plays: 10123,
        hearts: 1,
        tags: ['#school', '#science', '#fun']
    }, {
        id: 6,
        name: 'Calculus',
        category: 'Science',
        creationDate: 1595132633,
        plays: 13,
        hearts: 14,
        tags: ['#school', '#science', '#fun']
    }, {
        id: 7,
        name: 'Calculus',
        category: 'General',
        creationDate: 1595120633,
        plays: 10,
        hearts: 10,
        tags: ['#school', '#science', '#fun']
    }, {
        id: 8,
        name: 'Calculus',
        category: 'Sports',
        creationDate: 1595102633,
        plays: 14,
        hearts: 0,
        tags: ['#school', '#science', '#fun']
    }, {
        id: 9,
        name: 'Calculus',
        category: 'Math',
        creationDate: 1595123633,
        plays: 10123,
        hearts: 25,
        tags: ['#school', '#science', '#fun']
    }, {
        id: 10,
        name: 'Calculus',
        category: 'Science',
        creationDate: 1595162633,
        plays: 13123,
        hearts: 56,
        tags: ['#school', '#science', '#fun']
    }, {
        id: 11,
        name: 'Calculus',
        category: 'General',
        creationDate: 1595122633,
        plays: 10123,
        hearts: 90,
        tags: ['#school', '#science', '#fun']
    }, {
        id: 12,
        name: 'Calculus',
        category: 'Sports',
        creationDate: 1595122533,
        plays: 14,
        hearts: 93,
        tags: ['#school', '#science', '#fun']
    }, {
        id: 13,
        name: 'Calculus',
        category: 'Math',
        creationDate: 1593122633,
        plays: 10,
        hearts: 103,
        tags: ['#school', '#science', '#fun']
    }, {
        id: 14,
        name: 'Calculus',
        category: 'Science',
        creationDate: 1599922633,
        plays: 13,
        hearts: 15,
        tags: ['#school', '#science', '#fun']
    }, {
        id: 15,
        name: 'Calculus',
        category: 'General',
        creationDate: 1595432633,
        plays: 10,
        hearts: 18,
        tags: ['#school', '#science', '#fun']

    }, {
        id: 16,
        name: 'Calculus',
        category: 'Sports',
        creationDate: 1595325663,
        plays: 14,
        hearts: 23,
        tags: ['#school', '#science', '#fun']
    }, {
        id: 17,
        name: 'Calculus',
        category: 'Sports',
        creationDate: 1595525633,
        plays: 14,
        hearts: 26,
        tags: ['#school', '#science', '#fun']
    }, {
        id: 18,
        name: 'Calculus',
        category: 'Math',
        creationDate: 1395122633,
        plays: 10,
        hearts: 30,
        tags: ['#school', '#science', '#fun']
    }, {
        id: 19,
        name: 'Calculus',
        category: 'Science',
        creationDate: 1445122633,
        plays: 13,
        hearts: 45,
        tags: ['#school', '#science', '#fun']
    }, {
        id: 20,
        name: 'Calculus',
        category: 'General',
        creationDate: 1295122633,
        plays: 10,
        hearts: 45,
        tags: ['#school', '#science', '#fun']
    }, {
        id: 21,
        name: 'Calculus',
        category: 'Sports',
        creationDate: 1495142633,
        plays: 14,
        hearts: 66,
        tags: ['#school', '#science', '#fun']
    }, {
        id: 22,
        name: 'Calculus',
        category: 'Math',
        creationDate: 1544122633,
        plays: 10,
        hearts: 102,
        tags: ['#school', '#science', '#fun']
    }, {
        id: 23,
        name: 'Calculus',
        category: 'Science',
        creationDate: 1595522633,
        plays: 13,
        hearts: 454,
        tags: ['#school', '#science', '#fun']
    }, {
        id: 24,
        name: 'Calculus',
        category: 'General',
        creationDate: 1594522633,
        plays: 10,
        hearts: 45,
        tags: ['#school', '#science', '#fun']
    }, {
        id: 25,
        name: 'Calculus',
        category: 'Sports',
        creationDate: 1595125433,
        plays: 14,
        hearts: 154,
        tags: ['#school', '#science', '#fun']
    }
]

const defaultData = {
    data: data,
    queryResults: data
}

const search = (state, action) => {
    const newState = {...state}
    const {query} = action.payload

    if (!query.length) {
        newState.queryResults = newState.data
        return newState
    }

    newState.queryResults = newState.data.filter(({name}) => {
            const cleanQuery = query.toLowerCase().trim()
            const cleanName = name.toLowerCase().trim();
            return compareTwoStrings(cleanQuery, cleanName) >= 0.6 || cleanName.includes(cleanQuery)
        }
    )
    return newState;
}

const sort = (state, action) => {
    const newState = {...state}
    const {sortFilter} = action.payload

    const numComparison = sortFilter.includes('lowest') ? (x, y) => x - y : (x, y) => y - x
    const switchValue = sortFilter.split(":")[0].trim();

    switch (switchValue) {
        case "Plays":
            newState.queryResults.sort(({plays: x}, {plays: y}) => numComparison(x, y))
            break
        case "Hearts":
            newState.queryResults.sort(({hearts: x}, {hearts: y}) => numComparison(x, y))
            break
        case "Creation Date":
            newState.queryResults.sort(({creationDate: x}, {creationDate: y}) => numComparison(x, y))
            break
        default:
            break
    }
    return newState
}

const tagFilter = (state, action) => {
    const newState = {...state}
    const {tag} = action.payload
    newState.queryResults = newState.data.filter(item => item.tags.includes(tag.toLowerCase()))
    return newState
}

const resetQueryResults = (state) => {
    const newState = {...state}
    newState.queryResults = [...newState.data]
    return newState
}

export default function gameList(state = defaultData, action) {
    switch (action.type) {
        case "SEARCH":
            return search(state, action)
        case "SORT":
            return sort(state, action)
        case "TAG_FILTER":
            return tagFilter(state, action)
        case "RESET_QUERY_RESULTS":
            return resetQueryResults(state)
        default:
            return state
    }
}
