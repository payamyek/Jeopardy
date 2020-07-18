import React from "react";
import {compareTwoStrings} from "string-similarity";

const data = [
    {
        id: 1,
        name: 'Physics',
        category: 'Math',
        plays: 10,
        hearts: 123
    },
    {
        id: 2,
        name: 'Calculus Me',
        category: 'Science',
        plays: 13123,
        hearts: 141
    },
    {
        id: 3,
        name: 'Sports',
        category: 'General',
        plays: 10,
        hearts: 1
    },
    {
        id: 4,
        name: 'Music',
        category: 'Sports',
        plays: 14,
        hearts: 1231
    },
    {
        id: 5,
        name: 'Physics',
        category: 'Math',
        plays: 10123,
        hearts: 1
    },
    {
        id: 6,
        name: 'Calculus',
        category: 'Science',
        plays: 13,
        hearts: 14
    },
    {
        id: 7,
        name: 'Calculus',
        category: 'General',
        plays: 10,
        hearts: 10
    },
    {
        id: 8,
        name: 'Calculus',
        category: 'Sports',
        plays: 14,
        hearts: 0
    },
    {
        id: 9,
        name: 'Calculus',
        category: 'Math',
        plays: 10123,
        hearts: 25
    },
    {
        id: 10,
        name: 'Calculus',
        category: 'Science',
        plays: 13123,
        hearts: 56
    },
    {
        id: 11,
        name: 'Calculus',
        category: 'General',
        plays: 10123,
        hearts: 90
    },
    {
        id: 12,
        name: 'Calculus',
        category: 'Sports',
        plays: 14,
        hearts: 93
    },
    {
        id: 13,
        name: 'Calculus',
        category: 'Math',
        plays: 10,
        hearts: 103
    },
    {
        id: 14,
        name: 'Calculus',
        category: 'Science',
        plays: 13,
        hearts: 15
    },
    {
        id: 15,
        name: 'Calculus',
        category: 'General',
        plays: 10,
        hearts: 18

    },
    {
        id: 16,
        name: 'Calculus',
        category: 'Sports',
        plays: 14,
        hearts: 23
    },
    {
        id: 17,
        name: 'Calculus',
        category: 'Sports',
        plays: 14,
        hearts: 26
    },
    {
        id: 18,
        name: 'Calculus',
        category: 'Math',
        plays: 10,
        hearts: 30

    },
    {
        id: 19,
        name: 'Calculus',
        category: 'Science',
        plays: 13,
        hearts: 45
    },
    {
        id: 20,
        name: 'Calculus',
        category: 'General',
        plays: 10,
        hearts: 45
    },
    {
        id: 21,
        name: 'Calculus',
        category: 'Sports',
        plays: 14,
        hearts: 66
    },
    {
        id: 22,
        name: 'Calculus',
        category: 'Math',
        plays: 10,
        hearts: 102
    },
    {
        id: 23,
        name: 'Calculus',
        category: 'Science',
        plays: 13,
        hearts: 454
    },
    {
        id: 24,
        name: 'Calculus',
        category: 'General',
        plays: 10,
        hearts: 45
    },
    {
        id: 25,
        name: 'Calculus',
        category: 'Sports',
        plays: 14,
        hearts: 154
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

export default function gameList(state = defaultData, action) {
    switch (action.type) {
        case "SEARCH":
            return search(state, action)
        default:
            return state
    }
}
