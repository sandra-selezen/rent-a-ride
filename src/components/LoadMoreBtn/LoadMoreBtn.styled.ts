import styled from "styled-components"

export const Wrapper = styled.div`
  text-align: center;
`;

export const StyledLoadMoreBtn = styled.button`
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primaryAccent};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.secondaryAccent};
  }
`;
