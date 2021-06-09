import CategoryCard from './components/CategoryCard/CategoryCard'
import Navbar from './components/Navbar/Navbar'
import ProductCard from './components/ProductCard/ProductCard'
import { db } from './data/db'

const App = () => {
	return (
		<div className='flex'>
			<Navbar />
			<main>
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
						{db.categories.map(category => (
							<CategoryCard
								key={category.id}
								category={category.name}
								image={category.image}
								color={category.color}
							/>
						))}
					</ul>
				</section>
			</main>
		</div>
	)
}

export default App
