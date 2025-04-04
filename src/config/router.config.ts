import { ComponentType } from "react"
import Home from "../components/Home"
import About from "../components/About"
import Contact from "../components/Contact"

interface Route {
    path: string
    label: string
    Component: ComponentType
}

export const routes: Route[] = [
    {path: '/', label: 'Home', Component: Home},
    {path: '/about', label: 'About', Component: About},
    {path: '/contact', label: 'Contact', Component: Contact}
]