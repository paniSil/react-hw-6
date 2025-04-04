import { ComponentType } from "react"
import Home from "../components/Home"
import About from "../components/About"
import Contact from "../components/Contact"

export interface Route {
    path: string
    label: string
    element: ComponentType
}

export const routes: Route[] = [
    {path: '/', label: 'Home', element: Home},
    {path: '/about', label: 'About', element: About},
    {path: '/contact', label: 'Contact', element: Contact}
]