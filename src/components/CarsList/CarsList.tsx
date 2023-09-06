import { Car } from "../../types/cars.type"
import { CarItem } from "../CarItem/CarItem"
import { List } from "./CarsList.styled"

interface Props {
  cars: Car[]
}

export const CarsList = ({ cars }: Props) => {
  return (
    <List>
      {cars.map((car) => (
        <CarItem key={car.id} car={car} />
      ))}
    </List>
  )
}
