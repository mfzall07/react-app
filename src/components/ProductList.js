const ProductList = ({product, deleteProduct}) => {
  return (
    <div>
        <ul>
            { product.map((product) => (
                <li key={product.id}>{product.title} - {product.price} 
                    <button onClick={() => deleteProduct(product.id)}>Delete</button>
                </li>
            )) }
        </ul>
    </div>
  )
}

export default ProductList