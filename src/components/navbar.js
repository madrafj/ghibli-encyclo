import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { update } from "../redux/searchSlice"
import MyLink from "./navlink"

export default function NavBAr() {
  const [isExpand, setIsExpand] = useState(false)
  const keyword = useSelector(state => state.search)
  const dispatch = useDispatch()

  const expandClass = useMemo(() => isExpand ? 'is-active' : '', [isExpand])

  const handleExpand = () => setIsExpand(prev => !prev)
  const handleChange = e => dispatch(update(e.target.value))

  return (
    // !--bulma-navbar start--!
    <div className="hero is-success">
      <header className="hero-head">
        <nav className="navbar">
          <div className="navbar-brand">
            <a href="/" className="navbar-item py-0">
              <img src="logo.png" alt="Ghibli Brand" />
            </a>
            <a role="button"
              className={`navbar-burger ${expandClass}`}
              onClick={handleExpand}
            >
              <span/><span/><span/>
            </a>
          </div>
          <div className={`navbar-menu ${expandClass}`}>
            <div className="navbar-start">
              <MyLink to="/" label="Films" />
              <MyLink to="/people" label="People" />
              <MyLink to="/species" label="Species" />
              <MyLink to="/vehicles" label="Vehicles" />
              <MyLink to="/locations" label="Locations" />
            </div>
            <div className="navbar-end">
              <div className="navbar-item is-right">
                <div className="control has-icons-right">
                  <input type="text"
                    className="input is-rounded"
                    placeholder="Search keyword"
                    value={keyword}
                    onChange={handleChange}
                  />
                  <span className="icon is-right is-small">
                    <FontAwesomeIcon icon={faSearch} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
    // !--bulma navbar end--!
  )
}