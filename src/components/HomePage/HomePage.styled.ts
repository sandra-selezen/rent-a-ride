import styled from "styled-components";
import bfImage from "../../assets/hero.webp";
import aboutBgImage from "../../assets/main-page.webp";
import { NavLink } from "react-router-dom";

export const Hero = styled.section`
  height: 500px;
  padding-top: 100px;
  padding-bottom: 100px;
  background-color: ${({ theme }) => theme.colors.primaryBlack};
  background-image: url(${bfImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  -webkit-filter: grayscale(40%);
  filter: grayscale(40%);
  border-radius: 20px;
`;

export const HeroContent = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: rgba(18, 20, 23, 0.20);
`;

export const HeroTitle = styled.h1`
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  color: ${({ theme }) => theme.colors.primaryWhite};
`;

export const LogoTitle = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
`;

export const CommonSection = styled.section`
  padding-top: 40px;
  padding-bottom: 40px;
`;

export const SectionTitle = styled.h2`
  margin-bottom: 24px;
  text-align: center;
  color: ${({ theme }) => theme.colors.primaryBlack};
`;

export const AboutSection = styled.section`
  height: 500px;
  padding-top: 100px;
  padding-bottom: 100px;
  background-color: ${({ theme }) => theme.colors.primaryBlack};
  background-image: url(${aboutBgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  // -webkit-filter: grayscale(40%);
  filter: grayscale(40%);
  border-radius: 20px;
`;

export const AboutList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const AboutItem = styled.li`
  padding: 14px;
`;

export const AboutItemText = styled.p`
  color: ${({ theme }) => theme.colors.primaryBlack};
`;

export const AdvantagesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-row-gap: 20px;
  @media screen and (min-width: 768px) and (max-width: 924px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
  @media screen and (min-width: 925px) {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 24px;
    grid-row-gap: 24px;
  }
`;

export const AdvantagesItem = styled.li`
  padding: 14px;
`;

export const AdvantagesItemTitle = styled.h3`
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.primaryBlack};
`;

export const AdvantagesItemText = styled.p`
  color: ${({ theme }) => theme.colors.primaryBlack};
`;

export const CallToActionWrapper = styled.div`
  text-align: center;
`;

export const CallToActionBtn = styled(NavLink)`
  display: inline-block;
  padding: 12px 50px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.42;
  text-decoration: none;
  border-radius: 12px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primaryWhite};
  background-color: ${({ theme }) => theme.colors.primaryAccent};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.secondaryAccent};
`;