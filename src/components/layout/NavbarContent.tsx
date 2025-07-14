import { Box, Button } from "@chakra-ui/react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom"; 


interface NavbarContentProps {
  closeMenu?: () => void;
}


const NavbarContent: React.FC<NavbarContentProps> = ({ closeMenu }) => {
  const navigate = useNavigate()

  return (
    <Box className="flex flex-col space-y-4 font-medium   lg:flex-row lg:items-center lg:space-x-6  lg:space-y-0 ">
      <Link
        to="home"
        smooth={true}
        duration={500}
        onClick={()=>navigate('/') && closeMenu}
        className="!text-white hover:!text-gbam-primary transition-colors hover:cursor-pointer">
        Home
      </Link>
      <Link
        to="about"
        smooth={true}
        duration={500}
        onClick={closeMenu}
        className="!text-white hover:!text-gbam-primary transition-colors hover:cursor-pointer">
        About
      </Link>
      <Link
        to="academy"
        smooth={true}
        duration={500}
        onClick={closeMenu}
        className="!text-white hover:!text-gbam-primary transition-colors hover:cursor-pointer">
        Academy
      </Link>
      <Link
        to="championships"
        smooth={true}
        duration={500}
        onClick={closeMenu}
        className="!text-white hover:!text-gbam-primary transition-colors hover:cursor-pointer">
        Championships
      </Link>
      <Link
        to="membership"
        smooth={true}
        duration={500}
        onClick={closeMenu}
        className="!text-white hover:!text-gbam-primary transition-colors hover:cursor-pointer">
        Membership
      </Link>
      <Link
        to="foundation"
        smooth={true}
        duration={500}
        onClick={closeMenu}
        className="!text-white hover:!text-gbam-primary transition-colors hover:cursor-pointer">
        Foundation
      </Link>
      <Link
        to="bounceback"
        smooth={true}
        duration={500}
        onClick={closeMenu}
        className="!text-white hover:!text-gbam-primary transition-colors hover:cursor-pointer">
        Bounce Back
      </Link>

      <Link
        to="teamMembers"
        smooth={true}
        duration={500}
        onClick={closeMenu}
        className="!text-white hover:!text-gbam-primary transition-colors hover:cursor-pointer">
        Team
      </Link>

      <Button colorScheme="orange" className="w-full lg:w-fit ">
        <Link
          to="join"
          smooth={true}
          duration={500}
          onClick={closeMenu}
          className="!text-white w-full hover:cursor-pointer">
          Join Now
        </Link>
      </Button>
    </Box>
  );
};

export default NavbarContent;
