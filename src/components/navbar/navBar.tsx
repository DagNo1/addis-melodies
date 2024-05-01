import { Box, Button, Flex, NavLink } from "theme-ui";
import Logo from "../logo/logo";

function NavBar() {
  const navLinks = [
    { name: "Home", link: "#!" },
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
        <Flex sx={{ alignItems: "center" }}>
          <div>
            <NavLink
              href="#!"
              sx={{
                p: "2",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                fontSize: "2",
              }}
            >
              <Logo />
            </NavLink>
          </div>
          {navLinks.map((navLink, index) => (
            <NavLink key={index} href={navLink.link} p={2}>
              {navLink.name}
            </NavLink>
          ))}
        </Flex>
        <Box sx={{ display: "flex", placeItems: "center" }}>
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
        </Box>
      </Flex>
    </>
  );
}

export default NavBar;
