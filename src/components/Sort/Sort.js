import { useDispatch, useSelector } from "react-redux";
import { changeDataAction } from "../../store/dataReducer";
import { switchToDefaultSortAction, switchToAbSortAction, switchToBaSortAction } from "../../store/queryParamsReducer";
import './Sort.css'
import { useEffect } from "react";

const Sort = () => {
  // const [sort, setSort] = useState('Default');
  const dispatch = useDispatch()
  const sortType = useSelector(state => state.queryParamsReducer.sort)
  const data = useSelector(state => state.dataReducer.data)

  document.addEventListener("click", e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return

    let currentDropdown
    if (isDropdownButton) {
      currentDropdown = e.target.closest('[data-dropdown]')
      currentDropdown.classList.add('active')
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
      if (dropdown === currentDropdown) return
      dropdown.classList.remove('active')
    })
  })

  const sort = () => {
    switch (sortType) {
      case 'ab':
        let resultAB = data.sort((a, b) => a.name.localeCompare(b.name));
        dispatch(changeDataAction(resultAB))
        break;
      case 'ba':
        let resultBA = data.sort((a, b) => b.name.localeCompare(a.name));
        dispatch(changeDataAction(resultBA))
        break;
      case 'default':
        let resultDefault = data.sort((a, b) => {
          let idA = parseInt(a.url.slice(34));
          let idB = parseInt(b.url.slice(34));
          return idA - idB
        })
        dispatch(changeDataAction(resultDefault))
        break;
      default:
        return;
    }
  }

  useEffect(() => {
    sort()
  }, [sortType]);

  return (
    <div className="query__sort">
      <div className="sort__dropdown dropdown" data-dropdown>
        <button data-dropdown-button>Sort by Name </button>
        <div className="dropdown_menu">
          <ul>
            <li onClick={() => dispatch(switchToDefaultSortAction())}>Default</li>
            <li onClick={() => dispatch(switchToAbSortAction())}>Alphabetically</li>
            <li onClick={() => dispatch(switchToBaSortAction())}>yllacitebahplA</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sort