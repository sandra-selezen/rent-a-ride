import { navLinks } from "../../constants/nav-links"
import { Header, NavList, StyledLink } from "./Navbar.styled"

export const Navbar = () => {
  return (
    <Header>
      <nav>
        <NavList>
          {navLinks.map((link) => (
            <li key={link.id}>
              <StyledLink to={link.path}>{link.name}</StyledLink>
            </li>
          ))}
        </NavList>
      </nav>
    </Header>
  )
}
