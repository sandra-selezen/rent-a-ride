import styled from "styled-components"

export const ImageWrapper = styled.div`
  margin-bottom: 14px;
  border-radius: 14px;
`;

export const Image = styled.img`
  height: 248px;
  width: 461px;
  object-fit: cover;
  border-radius: inherit;
`;

export const Title = styled.h2`
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  color: ${({ theme }) => theme.colors.primaryBlack};
`;

export const Details = styled.div`
margin-bottom: 14px;
`;

export const Description = styled.p`
  margin-bottom: 24px;
  font-size: 14px;
  line-height: 1.42;
  color: ${({ theme }) => theme.colors.primaryBlack};
`;

export const Features = styled.div`
  margin-bottom: 24px;
`;

export const FeatureTitle = styled.h3`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  color: ${({ theme }) => theme.colors.primaryBlack};
`;

export const FeatureDetails = styled.p``;

export const Conditions = styled.div`
  margin-bottom: 24px;
`;

export const ConditionTitle = styled.h3`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  color: ${({ theme }) => theme.colors.primaryBlack};
`;

export const ConditionDetailsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
`;

export const ConditionDetails = styled.div`
  padding: 7px 14px;
  font-family: 'Montserrat', sans-serif;
  border-radius: 35px;
  color: ${({ theme }) => theme.colors.tertiaryBlack};
  background-color: ${({ theme }) => theme.colors.tertiaryWhite};

  & span {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primaryAccent};
  }
`;

export const ActionBtn = styled.a`
  display: inline-block;
  padding: 12px 50px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.42;
  border-radius: 12px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primaryWhite};
  background-color: ${({ theme }) => theme.colors.primaryAccent};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.secondaryAccent};
`;
