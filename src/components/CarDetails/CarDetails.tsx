import { Car } from "../../types/cars.type"
import { Model, DescriptionItem } from "../CarItem/CarItem.styled"
import { ActionBtn, ConditionDetails, ConditionDetailsWrapper, ConditionTitle, Conditions, Description, Details, FeatureDetails, FeatureTitle, Features, Image, ImageWrapper, Title } from "./CarDetails.styled"
import carImage from "../../assets/dummy.webp"

interface Props {
  car: Car
}

export const CarDetails = ({ car }: Props) => {
  const parts = car.address.split(', ');
  const city = parts[1];
  const country = parts[2];
  const carCondition = car.rentalConditions.split("\n");
  const firstCondition = carCondition[0].split(': ')[1];

  const formattedMileage = car.mileage.toLocaleString("en-EN");

  return (
    <>
      <ImageWrapper>
        <Image src={car.img ? car.img : carImage} alt={car.make} width={"461px"} loading="lazy"></Image>
      </ImageWrapper>
      <Title>{car.make} <Model>{car.model}</Model>, {car.year}</Title>
      <Details>
        <DescriptionItem>{city}</DescriptionItem>
        <DescriptionItem>{country}</DescriptionItem>
        <DescriptionItem>Id: {car.id}</DescriptionItem>
        <DescriptionItem>Year: {car.year}</DescriptionItem>
        <DescriptionItem>Type: {car.type}</DescriptionItem>
        <DescriptionItem>Fuel Consumption: {car.fuelConsumption}</DescriptionItem>
        <DescriptionItem>Engine Size: {car.engineSize}</DescriptionItem>
      </Details>
      <Description>{car.description}</Description>
      <Features>
        <FeatureTitle>Accessories and functionalities:</FeatureTitle>
        <FeatureDetails>{car.accessories.join(" | ")}{" | "}{car.functionalities.join(" | ")}</FeatureDetails>
      </Features>
      <Conditions>
        <ConditionTitle>Rental Conditions:</ConditionTitle>
        <ConditionDetailsWrapper>
          <ConditionDetails>Minimum age: <span>{firstCondition}</span></ConditionDetails>
          {carCondition.slice(1).map((condition, index) => (
            <ConditionDetails key={index}>{condition}</ConditionDetails>
          ))}
          <ConditionDetails>Mileage: <span>{formattedMileage}</span></ConditionDetails>
          <ConditionDetails>Price: <span>{car.rentalPrice}</span></ConditionDetails>
        </ConditionDetailsWrapper>
      </Conditions>
      <ActionBtn href="tel:+380730000000">Rental car</ActionBtn>
    </>
  )
}
