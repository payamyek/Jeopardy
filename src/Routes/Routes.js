import React from "react";
import {Route} from "react-router"

const flattenRoutes = (routes) => routes.map((route, index) => (<Route key={index} {...route}/>));

const GameBoard = React.lazy(() => import('../Pages/GameBoard'))

const PreGame = React.lazy(() => import('../Pages/PreGame'))

const routes = [
    {
        path: '/game',
        component: GameBoard
    },
    {
        path: '/pregame',
        component: PreGame
    }
]

export default flattenRoutes(routes);