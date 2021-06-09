const Navbar = () => {
	return (
		<nav className='w-80 flex-shrink-0 p-8 h-screen'>
			<h1 className='text-2xl uppercase tracking-wider mb-12'>Le couteau</h1>
			<ul className='font-bold'>
				<li className='mb-6'>Menu</li>
				<li className='mb-6'>Commandes</li>
				<li className='mb-6'>À propos</li>
			</ul>
		</nav>
	)
}

export default Navbar
