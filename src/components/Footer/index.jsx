const Footer = () => {
  return (
    <footer>
      <div className="pt-8 mb-20 border-t-2 border-gray-200">
        <div className="container mx-auto flex justify-between">
          <div>
            <p>&copy; Padding technologies 2023</p>
          </div>
          <nav className="flex">
            <ul className='flex justify-between gap-12'>
              <li className='text-zinc-700 text-xl'><a href="#">About Us</a></li>
              <li className='text-zinc-700 text-xl'><a href="#">What We Do</a></li>
              <li className='text-zinc-700 text-xl'><a href="#">Contact Us</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
