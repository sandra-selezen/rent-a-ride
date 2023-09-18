import { Car } from "../../types/cars.type"
import { ActionBtn, ActionIcon, Button, DescriptionWrapper, DescriptionItem, Image, ImageWrapper, Item, Model, Price, Title, TitleWrapper } from "./CarItem.styled"
import carImage from "../../assets/dummy.webp"
import heartIcon from "../../assets/icons.svg"
import { CarDetails } from "../CarDetails/CarDetails"
import { useState } from "react"
import Modal from "../Modal/Modal"
import { useDispatch } from "react-redux"
import { addToFavorites, removeFromFavorites } from "../../redux/favoritesSlice"
import { useFavorites } from "../../redux/hooks"

interface Props {
  car: Car
}

export const CarItem = ({ car }: Props) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const isFavorite = useFavorites().some(favorite => favorite.id === car.id);

  const iconClass = isFavorite ? 'favorite' : '';

  const parts = car.address.split(', ');
  const city = parts[1];
  const country = parts[2];

  const dispatch = useDispatch();

  const toggleFavorite = () => {
    if (!isFavorite) {
      dispatch(addToFavorites(car));
    } else {
      dispatch(removeFromFavorites(car));
    }
  };

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
          <ActionBtn aria-label="Add to favorite" onClick={toggleFavorite}>
            <ActionIcon height={18} width={18} className={iconClass}>
              <use href={heartIcon + "#icon-heart"}></use>
            </ActionIcon>
          </ActionBtn>
          <Image src={car.img ? car.img : carImage} width={"274px"} alt={car.make} loading="lazy"/>
        </ImageWrapper>
        <TitleWrapper>
          <Title>{car.make} <Model>{car.model}</Model>, {car.year}</Title>
          <Price>{car.rentalPrice}</Price>
        </TitleWrapper>
        <DescriptionWrapper>
          <DescriptionItem>{city}</DescriptionItem>
          <DescriptionItem>{country}</DescriptionItem>
          <DescriptionItem>{car.rentalCompany}</DescriptionItem>
          <DescriptionItem>{car.type}</DescriptionItem>
          <DescriptionItem>{car.id}</DescriptionItem>
          <DescriptionItem>{car.accessories[0]}</DescriptionItem>
        </DescriptionWrapper>
        <Button onClick={openModal}>Learn more</Button>
      </Item>

      <Modal isOpen={isOpenModal} onClose={closeModal}>
        <CarDetails car={car} />
      </Modal>
    </>
  )
}
