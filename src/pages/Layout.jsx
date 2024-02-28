import { Outlet, Form, Link } from 'react-router-dom';
import  Navigation  from '../components/Navigation';
import Search from '../routes/ApiSearchStuff'

const primaryNav = [
    
    {title: 'Home', url:'/'},
    {title: 'Products', url: '/products'},
    {title: 'Cart', url: '/cart'}
   
]

const Layout =() =>{
    return(

        <>
       
       <div id="sidebar">
        <Navigation navItems = {primaryNav}/>



        <div>
          <Form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
          
          </Form>
         
        
        </div>


        <Form method="post">
            {/* <Search searchValue = {search}/> */}
            {/* <Search/> */}
            <button type="submit">Search</button>
          </Form>
        
    
        
        <nav>
          <ul>
            <li>
              <Link to={`{index}`}>Look up Clothes</Link>
            </li>
            
          </ul>
        </nav>
       
      </div>
      {/* <div id="detail" className ={
        navigation.state === "loading" ? "loading" : ""
      }><Outlet/></div> */}
      <Outlet/>
     
  


       
        </>
    )
}

export default Layout