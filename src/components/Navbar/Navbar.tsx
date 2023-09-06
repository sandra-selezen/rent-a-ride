import { Header, NavList, StyledLink } from "./Navbar.styled"

export const Navbar = () => {
  return (
    <Header>
      <nav>
        <NavList>
          <li><StyledLink to="/">Home</StyledLink></li>
          <li><StyledLink to="/catalog">Catalog</StyledLink></li>
          <li><StyledLink to="/favorites">Favorites</StyledLink></li>
        </NavList>
      </nav>
    </Header>
  )
}
