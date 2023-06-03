import { Header, Nav, Link } from "./Navigation.styled";

export default function Navigation() {
  return (
    <Header>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/tweets">Tweets</Link>
      </Nav>
    </Header>
  );
}
