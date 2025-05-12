import styles from "./card.module.css";
import { RiDislikeFill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";


const Card = ({ card }) => {
  const [Favortites, setFavortites] = useLocalStorage("Favortites", []);
  const [isopen, setisopen] = useState(false);
  const isFavortite = Favortites.includes(card._id);

  const handleLike = () => {
    setFavortites((prevFavortites) =>
      isFavortite
        ? prevFavortites.filter((fav) => fav !== card._id)
        : [...prevFavortites, card._id]
    );
  };

  return (
    <figure className={styles.card} key={card._id}>
      <div className={styles.cardTitle}>
        <h2>{card?.title}</h2>
      </div>
      <div className={styles.cardImg}>
        <img src={card?.image} alt={card?.name} />
      </div>
      <div className={styles.cardName}>
        <div className={styles.flex}>
          <p>{card?.weekday}</p>
          {isFavortite ? (
            <RiDislikeFill size={30} onClick={handleLike} />
          ) : (
            <FaHeart size={30} onClick={handleLike} />
          )}
        </div>
        <p>{card?.time}</p>

        <button  className={styles.buttonFelx} onClick={() => setisopen(!isopen)}>
          {isopen ? "Læs mindre" : "Læs mere"}
          {isopen ? (
            <button className={styles.arrowUp}>
              <IoIosArrowUp />
            </button>
          ) : (
            <button className={styles.arrowDown}n>
              <IoIosArrowDown />
            </button>
          )}
        </button>
      
        {isopen && (
          <div className={styles.cardContent}>
            <h3>{card?.description}</h3>
          </div>
        )}
      </div>
    </figure>
  );
};

export default Card;
