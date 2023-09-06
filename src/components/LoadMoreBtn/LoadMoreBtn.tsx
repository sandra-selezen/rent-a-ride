import { StyledLoadMoreBtn, Wrapper } from "./LoadMoreBtn.styled"

interface Props {
  onClick: () => void
}

export const LoadMoreBtn = ({ onClick }: Props) => {
  return (
    <Wrapper>
      <StyledLoadMoreBtn onClick={onClick}>Load more</StyledLoadMoreBtn>
    </Wrapper>
  )
}
