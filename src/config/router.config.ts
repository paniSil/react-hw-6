import { ComponentType } from "react"
import Home from "../components/pages/Home"
import About from "../components/pages/About"
import Contacts from "../components/pages/Contacts"

interface Route {
    path:string
    label:string
    Component: ComponentType
}

export const routes: Route[] = [
    { path: '/', label: 'Home', Component: Home },
    { path: '/about', label: 'About', Component: About },
    { path: '/contacts', label: 'Contacts', Component: Contacts}
]
