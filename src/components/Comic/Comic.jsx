import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addComicToFavourites } from "../../redux/action_creators";
import s from "./Comic.module.css";

const Comic = ({ poster, title, id, prices }) => {
  const dispatch = useDispatch();
  const [addedToFavIcon, setAddedToFavIcon] = useState(false);

  const handleFavourites = () => {
    dispatch(addComicToFavourites(id));
    setAddedToFavIcon(true);
    // setAddToFavClicked(true);
    setTimeout(() => {
      setAddedToFavIcon(false);
    }, 1000);
  };

  return (
    <article className={s.card}>
      <img className={s.poster} src={poster} alt={title} />
      <span className={s.comicTitle}>{title}</span>
      <div className={s.comicOptions}>
        {/* <NavLink to={`/comic/${id}/characters`} className={s.link}>
          <span>Comic creators ↗</span>
        </NavLink> */}
        <span onClick={handleFavourites} className={s.favButton}>
          Add to favourites
        </span>
        <span>Comic price: {Number(prices[0].price) || "N/A"}</span>
        <span
          className={`${s.favIcon} ${addedToFavIcon ? s.favIconClicked : null}`}
        >
          ⭐
        </span>
      </div>
    </article>
  );
};

export default Comic;
