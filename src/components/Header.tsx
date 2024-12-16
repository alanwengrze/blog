import logo from '../assets/logo.svg'
export const Header = () => {
  return (
    <div className="flex items-center justify-center bg-slate-900 h-72">
      <img src={logo} alt="" />
    </div>
  )
}