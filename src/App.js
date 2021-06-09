import CategoryCard from './components/CategoryCard/CategoryCard'
import ProductCard from './components/ProductCard/ProductCard'
import { db } from './data/db'

const App = () => {
	return (
		<section>
			React App
			<div className='flex'>
				{db.courses.map(course => (
					<ProductCard
						key={course.id}
						name={course.name}
						image={course.image}
						description={course.description}
						price={course.price}
					/>
				))}
			</div>
			<section>
				<ul className='flex flex-wrap justify-around'>
					{db.categories.map(category => <CategoryCard key={category.id} category={category.name} image={category.image} color={category.color} />)}
				</ul>
			</section>
		</section>
	)
}

export default App
