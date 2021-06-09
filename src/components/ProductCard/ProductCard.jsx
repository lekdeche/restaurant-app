const ProductCard = (props) => {
	const { image, name, description, price } = props
	return (
		<article className='my-4 w-64 bg-white rounded-lg overflow-hidden shadow-lg flex-shrink-0'>
			<div className='h-40 overflow-hidden relative'>
				<img className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2" src={image} alt="breakfast sandwich" />
			</div>
			<div className="p-2">
				<h3 className='uppercase text-center tracking-wider text-xl border-b-2 border-yellow-300 pb-1 mb-3'>{name}</h3>
				<p className='text-sm text-gray-600 h-20'>{description}</p>
				<div className='flex pt-3'>
					<span className='font-bold text-gray-700'>{price}</span>
					<button className='ml-auto bg-yellow-300 rounded'>Ajouter</button>
				</div>
			</div>
		</article>
	)
}

export default ProductCard