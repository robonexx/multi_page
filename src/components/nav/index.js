import { Link } from 'react-router-dom'
import './nav.css'

export default function index() {
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </div>
    )
}
