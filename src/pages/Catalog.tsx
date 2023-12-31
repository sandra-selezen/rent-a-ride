import { useEffect, useState } from "react"
import { CarsList } from "../components/CarsList/CarsList"
import { Car } from "../types/cars.type"
import { fetchCarsWithPagination } from "../services/api"
import { LoadMoreBtn } from "../components/LoadMoreBtn/LoadMoreBtn"
import { FilterForm } from "../components/FilterForm/FilterForm"

const Catalog = () => {
  const [cars, setCars] = useState<Car[]>()
  const [page, setPage] = useState(1)

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1)
  }

  useEffect(() => {
    const getCars = async () => {
      const fetchedCars = await fetchCarsWithPagination(page)
      setCars(prevCars => prevCars ? [...prevCars, ...fetchedCars] : fetchedCars)
    }
    getCars()
  }, [page])

  return (
    <>
      {/* FilterForm under development */}
      <FilterForm />
      {cars && (
        <>
          <CarsList cars={cars} />
          {cars.length <= 40 ? (
            <LoadMoreBtn onClick={handleLoadMore} />
          ) : (
            <>We're sorry, but you've reached the end of search results.</>
          )}
        </>
      )}
    </>
  )
}

export default Catalog
