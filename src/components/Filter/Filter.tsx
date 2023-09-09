import makesData from "../../content/makes.json";
import arrowDown from '../../assets/icons.svg';
import { FieldBox, FilterContainer, Form, Label, LeftInput, LeftInputText, MileageBox, RightInput, RightInputText, SearchBtn, SelectMakes, SelectBox, SelectPrice, SelectPriceText, SelectMakesIcon, SelectPriceIcon } from "./Filter.styled";

export const Filter = () => {
  const priceRange = Array.from({ length: 48 }, (_, index) => 30 + index * 10);

  return (
    <FilterContainer>
      <Form>
        <SelectBox>
          <Label htmlFor="makes">Car brand</Label>
          <SelectMakesIcon height={20} width={20}>
            <use href={arrowDown + "#icon-chevron-down"}></use>
          </SelectMakesIcon>
          <SelectMakes name="makes" id="makes" style={{ width: "224px" }}>
            <option value="">
              Enter the text
            </option>
            {makesData.map((make) => (
              <option key={make.id} value={make.name}>
                {make.name}
              </option>
            ))}
          </SelectMakes>
        </SelectBox>
        <SelectBox>
          <Label htmlFor="price">Price / 1 hour</Label>
          <SelectPriceIcon height={20} width={20}>
            <use href={arrowDown + "#icon-chevron-down"}></use>
          </SelectPriceIcon>
          <SelectPrice name="price" id="price" style={{ width: "125px" }}>
            {priceRange.map((price) => (
              <option key={price} value={price}>
                {price}
              </option>
            ))}
          </SelectPrice>
          <SelectPriceText>To $</SelectPriceText>
        </SelectBox>
        <FieldBox>
          <Label>Car mileage / km</Label>
          <MileageBox>
            <LeftInputText>From</LeftInputText>
            <RightInputText>To</RightInputText>
            <LeftInput type="text" />
            <RightInput type="text" />
          </MileageBox>
        </FieldBox>
        <SearchBtn>Search</SearchBtn>
      </Form>
    </FilterContainer>
  )
}
