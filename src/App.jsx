import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from 'react';
import { Home } from './Component/Home';
import { Shop } from './Component/Shop';
import { About } from './Component/About';
import { Blog } from './Component/Blog';
import { Arobera } from './Component/Arobera';
import { BestProduct } from './Component/BestProduct';
import { LastestNew } from './Component/LastestNew';
function App() {
  const [menu, setMenu] = useState('Navbar');

  const handleMenu = (menuItem) => {
    setMenu(menuItem);
  };

  return (
    <>
      <section className='font-serif pt-2 h-screen bg-[#FFF5EF]'>
        <div className="container">
          <h4 className='text-center m-0'> Hotel Dashboard</h4>
          <div className="row">
            <div className="col-lg-4">
              <div className='bg-white shadow-md rounded-md p-4'>
                
                <li className="nav-item dropdown list-none my-4">
                <a  href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={() => handleMenu("Home")} className=' nav-link dropdown-toggle list-none p-2 m-2 rounded-sm shadow-sm hover:bg-slate-600 hover:text-white text-center cursor-pointer border border-back'>Home</a>

                   <ul className="dropdown-menu">
                              <li><a  onClick={() => handleMenu("Arobera")} className="dropdown-item" href="#">Arobera</a></li>

                              <li><a  onClick={() => handleMenu("BestProduct")} className="dropdown-item" href="#">BestProduct</a></li>

                              <li><a  onClick={() => handleMenu("LatestNew")} className="dropdown-item" href="#">Latest new</a></li>
                    </ul>
  
                </li>

                <li onClick={() => handleMenu("Shop")} className='list-none p-2 m-2 rounded-sm shadow-sm hover:bg-slate-600 hover:text-white text-center cursor-pointer border border-back'>Shop</li>

                <li onClick={() => handleMenu("About")} className='list-none p-2 m-2 rounded-sm shadow-sm hover:bg-slate-600 hover:text-white text-center cursor-pointer border border-back'>About us</li>
                  
                <li onClick={() => handleMenu("Blog")} className='list-none p-2 m-2 rounded-sm shadow-sm hover:bg-slate-600 hover:text-white text-center cursor-pointer border border-back'>Blog</li>
              </div>
            </div>
            <div className="col-lg-8">
              <div className='p-3 m-3'>
                {/* Home  */}
                {menu === "Home" && <Home />}
                {menu === "Arobera" && <Arobera />}
                {menu === "BestProduct" && <BestProduct />}
                {menu === "LatestNew" && <LastestNew />}
                {/* Home-end  */}
                {menu === "Shop" && <Shop />}
                {menu === "About" && <About />}
                {menu === "Blog" && <Blog />}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
