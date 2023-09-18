import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
 
const Layout = ({ children }: any) => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand>Calendar app</Navbar.Brand>
      </Navbar>
      <Container>{children}</Container>
    </>
  );
};
 
export default Layout;