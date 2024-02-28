// import ApiSearchStuff from './ApiSearchStuff'
import {useLoaderData, Link} from 'react-router-dom'



export async function loader () {
    const url = `https://fakestoreapi.com/products`;
    const data = await fetch(url).then(response => response.json());
    console.log("Productsss", data)
    return{data};
    
}


const Products = () => {
    const { data } = useLoaderData();
    return(

    <>
    <div className='header-products'> 
    <h1>Products</h1>
    <p>heres some random products</p>
    </div>


    <br/>
    <div className='product-shiz'>
   
    <ul>
      
        {data.map((data, index) =>{
            console.log(data);
            return (<li key={index}>
                <img className="images" src ={data.image}/>

            </li>

            )
            
        }
        )}
    </ul>
    </div>
    
    
    
    
    </>


    )




}

export default Products