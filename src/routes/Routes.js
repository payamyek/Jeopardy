import React from "react";
import {Route} from "react-router"

const flattenRoutes = (routes) => routes.map((route, index) => (<Route key={index} {...route}/>));

const GameBoard = React.lazy(() => import('../pages/GameBoard'))

const GameList = React.lazy(() => import('../pages/GameList'))

const routes = [
    {
        path: '/game/:id',
        component: GameBoard
    },
    {
        path: '/list',
        component: GameList
    }
]

export default flattenRoutes(routes);