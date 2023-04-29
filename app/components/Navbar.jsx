import Link from 'next/link';

function Navbar() {

    return (
        <>  
            <div className="navbar shadow-sm">
                <Link href={"/"} className='nav-link'>Homepage</Link>
                <Link href={"/code/repos"} className='nav-link'>Repositories</Link>
                <Link href={"/about"} className='nav-link'>About</Link>
                <Link href={"/about/team"} className='nav-link'>Team</Link>

            </div>
        </>
    )
}

export default Navbar;