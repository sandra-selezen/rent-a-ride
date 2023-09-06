import { Car } from "../../types/cars.type"
import { ActionBtn, ActionIcon, Button, DescriptionWrapper, Image, ImageWrapper, Item, Model, Price, Title, TitleWrapper } from "./CarItem.styled"
import carImage from "../../assets/dummy.webp"
import heartIcon from "../../assets/icons.svg"
import { CarDetails } from "../CarDetails/CarDetails"
import { useState } from "react"
import Modal from "../Modal/Modal"

interface Props {
  car: Car
}

export const CarItem = ({ car }: Props) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const parts = car.address.split(', ');
  const city = parts[1];
  const country = parts[2];

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <Item>
        <ImageWrapper>
          <ActionBtn>
            <ActionIcon height={18} width={18}>
              <use href={heartIcon + "#icon-heart"}></use>
            </ActionIcon>
          </ActionBtn>
          <Image src={car.img ? car.img : carImage} alt={car.make}/>
        </ImageWrapper>
        <TitleWrapper>
          <Title>{car.make} {car.model.length < 9 && <Model>{car.model}</Model>}, {car.year}</Title>
          <Price>{car.rentalPrice}</Price>
        </TitleWrapper>
        <DescriptionWrapper>
          <p>{city} | {country} | {car.rentalCompany} | {car.type} | {car.id} | {car.accessories[0]}</p>
        </DescriptionWrapper>
        <Button onClick={openModal}>Learn more</Button>
      </Item>

      <Modal isOpen={isOpenModal} onClose={closeModal}>
        <CarDetails car={car} />
      </Modal>
    </>
  )
}
