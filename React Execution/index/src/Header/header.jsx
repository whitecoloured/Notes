import { useNavigate } from 'react-router-dom';
import './header.css'



function Header()
{
    const navigate=useNavigate();
    return(
        <header>
            <div className='container'>
                <div className='textClass'>
                    <h1>Notes</h1>
                </div>
                <div className='buttonClass'>
                    <button onClick={()=> navigate("/create")}>
                        Create new
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;