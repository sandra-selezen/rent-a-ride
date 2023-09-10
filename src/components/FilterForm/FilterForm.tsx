import { useState } from "react";
import brandsData from "../../constants/makes.json";
import { SelectBrand } from "../SelectBrand/SelectBrand";
import { Button, Form, FormContainer, Label, LeftInput, LeftInputText, MileageBox, RightInput, RightInputText } from "./FilterForm.styled"
import { SelectPrice } from "../SelectPrice/SelectPrice";

export const FilterForm = () => {
  const [brand, setBrand] = useState<string | undefined>("Enter the text");
  const [price, setPrice] = useState<number | undefined>(undefined);
  return (
    <FormContainer>
      <Form>
        <div>
          <Label>Car brand</Label>
          <SelectBrand options={brandsData} value={brand} onChange={value => setBrand(value)} />
        </div>
        <div>
          <Label>Price / 1 hour</Label>
          <SelectPrice value={price} onChange={value => setPrice(value)} />
        </div>
        <div>
          <Label>Car mileage / km</Label>
          <MileageBox>
            <LeftInputText>From</LeftInputText>
            <RightInputText>To</RightInputText>
            <LeftInput type="text" />
            <RightInput type="text" />
          </MileageBox>
        </div>
        <Button>Search</Button>
      </Form>
    </FormContainer>
  )
}
