import { NavLink } from "react-router-dom"
import styled from "styled-components"

export const Header = styled.header`
  padding-top: 24px;
  padding-bottom: 24px;
  box-shadow: 0px 4px 20px 2px rgba(52, 112, 255, 0.2);
  border-radius: 0px 0px 16px 16px;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 40px;
`;

export const StyledLink = styled(NavLink)`
  font-weight: 600;
  font-size: 20px;
  padding: 8px 16px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primaryAccent};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.secondaryAccent};
  }

  &.active {
    color: ${({ theme }) => theme.colors.secondaryAccent};
  }
`;
