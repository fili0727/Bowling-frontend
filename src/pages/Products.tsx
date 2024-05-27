import ProductList from '../components/product/ProductList'
import { Fade } from '@mui/material'

export default function Products() {
    return (
        <Fade in={true} timeout={1000}>
            <div>
                <h1>Products</h1>
                <ProductList />
            </div>
        </Fade>
    )
}
