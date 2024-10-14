import css from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { setStatusFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleContactsFilter = (valueInput) => {
    dispatch(setStatusFilter(valueInput));
  };

  return (
    <div className={css.wrapper}>
      <label className={css.label} htmlFor="filter">
        Find contacts by name:
      </label>
      <input
        className={css.input}
        type="text"
        onChange={(event) => handleContactsFilter(event.target.value)}
      />
    </div>
  );
};

export default SearchBox;
