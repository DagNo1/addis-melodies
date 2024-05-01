import { Box, Button, Flex, NavLink } from "theme-ui";
import Logo from "../logo/logo";

function NavBar() {
  const navLinks = [
    { name: "Songs", link: "#!" },
    { name: "Artists", link: "#!" },
    { name: "Category", link: "#!" },
  ];

  return (
    <>
      <Flex
        as="nav"
        sx={{
          justifyContent: "space-between",
          display: "flex",
          height: "3rem",
          alignItems: "center",
          paddingX: "1rem",
        }}
      >
        <NavLink
          href="#!"
          sx={{
            p: "2",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            fontSize: "2",
            flex:"1"
          }}
        >
          <Logo />
        </NavLink>
        <Flex sx={{ alignItems: "center", flex:"2" }}>
          {navLinks.map((navLink, index) => (
            <NavLink key={index} href={navLink.link} p={2}>
              {navLink.name}
            </NavLink>
          ))}
        </Flex>
        {/* <Box sx={{ display: "flex", placeItems: "center" }}>
          <Button
            py={2}
            sx={{
              marginInline: "1rem",
            }}
            variant="outlined"
          >
            Signin
          </Button>
          <Button
            py={2}
            sx={{
              marginInline: "1rem",
            }}
          >
            Signup
          </Button>
        </Box> */}
      </Flex>
    </>
  );
}

export default NavBar;
