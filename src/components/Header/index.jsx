import paddingLogo from '../../assets/images/padding-logo.png'

const Header = () => {
  return (
    <header>
      <div className="xl:pt-20 xl:pb-8 xl:flex xl:justify-between">
        <div>
          <img src={paddingLogo} alt="padding" />
        </div>
        <nav className="flex">
          <ul className='flex justify-between gap-12'>
            <li className='text-zinc-700 text-xl'><a href="#">About Us</a></li>
            <li className='text-zinc-700 text-xl'><a href="#">What We Do</a></li>
            <li className='text-zinc-700 text-xl'><a href="#">Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
