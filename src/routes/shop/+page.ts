export const load = async ({ fetch }: {fetch: any}) => {

    const fetchProducts = async () => {   
        const productRes = await fetch('https://dummyjson.com/products?limit=10')
        const productData = await productRes.json()
        return productData.products
    }

    return {
        //  title: 'The Shop Page',
        // description: 'For all your household needs',
       products: fetchProducts(),
       
    }
}