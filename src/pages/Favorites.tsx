import { CarsList } from "../components/CarsList/CarsList";
import { useFavorites } from "../redux/hooks"

const Favorites = () => {
  const favorites = useFavorites();

  return (
    <>
      {favorites && <CarsList cars={favorites} />}
    </>
  )
}

export default Favorites