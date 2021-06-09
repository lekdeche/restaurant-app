import ProductCard from './components/ProductCard/ProductCard'
import { db } from './data/db'

const App = () => {
	return (
		<section>
			React App
			<div className='flex'>
				{db.courses.map(course => <ProductCard name={course.name} image={course.image} description={course.description} price={course.price} />)}
			</div>
		</section>
	)
}

export default App
