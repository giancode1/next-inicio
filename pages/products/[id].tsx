import { useRouter } from 'next/router';


const ProductItem = () => {
    const router = useRouter();
    const {query:{id}} = router;
    return (
        <div>
            Esta es la página del producto: {router.query.id}
            <p>{id}</p>
        </div>
    )
}

export default ProductItem