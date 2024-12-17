import logo from '../assets/logo.svg'
export const Header = () => {
  return (
    <div className="flex justify-center bg-primary h-72">
      <img 
        src={logo} 
        alt=""
        className='w-40 h-40'
      />
    </div>
  )
}