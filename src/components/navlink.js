import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { reset } from "../redux/searchSlice";

export default function MyLink({to, label}) {
  const dispatch = useDispatch()
  const handleClick = () => dispatch(reset())

  return (
    <NavLink to={to} onClick={handleClick} className={({isActive}) => `navbar-item ${isActive ? 'is-active' : ''}`}>{label}</NavLink>
  )
}