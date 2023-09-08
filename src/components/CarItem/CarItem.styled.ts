import styled from "styled-components"

export const Item = styled.li`
  width: 274px;
`;

export const ImageWrapper = styled.div`
  position: relative;
  margin-bottom: 14px;
  border-radius: 14px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background: linear-gradient(180deg, rgba(18, 20, 23, 0.50) 2.5%, rgba(18, 20, 23, 0.00) 41.07%);
`;

export const ActionBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  z-index: 2;
  background-color: transparent;
`;

export const ActionIcon = styled.svg`
  stroke: ${({ theme }) => theme.colors.primaryWhite};
  fill: none;

  &.favorite {
    stroke: none;
    fill: ${({ theme }) => theme.colors.primaryAccent};
  }
`;

export const Image = styled.img`
  width: 274px;
  height: 268px;
  object-fit: cover;
  border-radius: inherit;
`;

export const TitleWrapper = styled.div`
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.primaryBlack};
`;

export const Model = styled.span`
  color: ${({ theme }) => theme.colors.primaryAccent};
`;

export const Price = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.primaryBlack};
`;

export const DescriptionWrapper = styled.div`
  margin-bottom: 28px;
  height: 40px;
  overflow: hidden;
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px 22px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.primaryWhite};
  background-color: ${({ theme }) => theme.colors.primaryAccent};

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.secondaryAccent};
  }
`;
