import { Link } from "react-router"

function Navbar() {
    return (
    <>
        <nav>

            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/auth"}>Auth</Link>
                    <Link to={"/shop"}>Shop</Link>
                    <Link to={"/checkout"}>Checkout</Link>
                </li>
            </ul>
        </nav>
    </>
    )
}

export default Navbar;