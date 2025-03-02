import { Link } from "react-router-dom"

function Navbar() {

    return (
        <>
            <div className="w-full bg-[#e8eaed] flex justify-between px-4 py-2">
                <h1>Unspoken</h1>
                <div className="flex gap-4">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/submit">Submit</Link>
                </div>
            </div>
        </>
    )
}

export default Navbar