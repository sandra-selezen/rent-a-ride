import { useState } from "react";
import brandsData from "../../constants/makes.json";
import { SelectBrand } from "../SelectBrand/SelectBrand";
import { Button, Form, FormContainer } from "./FilterForm.styled"

export const FilterForm = () => {
  const [value, setValue] = useState<string | undefined>("Enter the text");
  return (
    <FormContainer>
      <Form>
        <SelectBrand options={brandsData} value={value} onChange={value => setValue(value)} />
        <Button>Search</Button>
      </Form>
    </FormContainer>
  )
}
