const products = [
    {
        "name": "Basic Tee"
    },
    {
        "name": "Basic Tee"
    },
    {
        "name": "Basic Tee"
    },
    {
        "name": "Basic Tee"
    },
    {
        "name": "Basic Tee"
    }
]

const Products = () => {
    return (
        <>
            <div className="flex flex-col">

                <div className="relative bg-white flex flex-col">

                    <div className="text-center text-2xl mt-4">
                        <p>Free Products</p>
                    </div>

                    <div className="mx-auto max-w-2xl px-4 mb-10 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8 flex flex-row flex-wrap justify-between gap-x-3 gap-y-3">

                        {products.map((product, index) => (
                            <div className="border-1 border-black shadow-2xl gap-x-6 gap-y-10 lg:grid-cols-4 xl:gap-x-8">
                                <div className="group relative">

                                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                        <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                                    </div>

                                    <div className="mt-4 flex justify-between">
                                        <div className="px-4 py-2 font-bold">
                                            <h3 className="text-sm text-gray-700">
                                                <a href="#">
                                                    <span aria-hidden="true" class="absolute inset-0"></span>
                                                    Basic Tee
                                                </a>
                                            </h3>
                                            <p className="mt-1 text-sm text-gray-700 font-bold">Black</p>
                                        </div>
                                        <p className="text-sm font-medium text-gray-900 px-4 font-bold">$35</p>
                                    </div>
                                </div>
                            </div>
                        ))}


                    </div>
                </div>

                <div className="relative bg-white flex flex-col">

                    <div className="text-center text-2xl mt-4">
                        <p>Paid Products</p>
                    </div>

                    <div className="mx-auto max-w-2xl px-4 mb-10 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8 flex flex-row flex-wrap justify-between gap-x-3 gap-y-3">

                        {products.map((product, index) => (
                            <div className="border-1 border-black shadow-2xl gap-x-6 gap-y-10 lg:grid-cols-4 xl:gap-x-8">
                                <div className="group relative">

                                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                        <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                                    </div>

                                    <div className="mt-4 flex justify-between">
                                        <div className="px-4 py-2 font-bold">
                                            <h3 className="text-sm text-gray-700">
                                                <a href="#">
                                                    <span aria-hidden="true" class="absolute inset-0"></span>
                                                    Basic Tee
                                                </a>
                                            </h3>
                                            <p className="mt-1 text-sm text-gray-700 font-bold">Black</p>
                                        </div>
                                        <p className="text-sm font-medium text-gray-900 px-4 font-bold">$35</p>
                                    </div>
                                </div>
                            </div>
                        ))}


                    </div>
                </div>

            </div>
        </>
    );
}

export default Products;

