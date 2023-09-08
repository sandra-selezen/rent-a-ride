import { Circles } from "react-loader-spinner"
import { LoaderWrapper } from "./Loader.styled"

export const Loader = () => {
  return (
    <LoaderWrapper>
      <Circles
        height="80"
        width="80"
        color="#3470FF"
        ariaLabel="circles-loading"
        visible={true}
      />
    </LoaderWrapper>
  )
}
