import { NavLink } from "react-router-dom"
import styled from "styled-components"

export const Header = styled.header`
  padding-top: 24px;
  padding-bottom: 24px;
  background-color: ${({ theme }) => theme.colors.primaryAccent};
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 40px;
`;

export const StyledLink = styled(NavLink)`
  font-weight: 600;
  font-size: 1.5rem;
  text-transform: uppercase;
  padding: 8px 16px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primaryWhite};

  &:hover,
  &:focus {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.secondaryWhite};
  }

  &.active {
    text-decoration: underline;
  }
`;
