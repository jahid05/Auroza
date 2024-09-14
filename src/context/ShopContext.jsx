import { useContext } from "react"




const  latestCollection = () =>{
    const {products} = useContext(ShopContext);
    console.log(products);

    return (
        <div className="">

        </div>
    )
}

export default latestCollection;