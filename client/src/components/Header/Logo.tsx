import { Link } from "react-router-dom";
import { Image, Text } from "@chakra-ui/react";
import LogoEmpresa from '../../assets/images/logo-artec-horizontal.png'

export function Logo() {
  return (
    <>
      <Link to="/courses">
          <Image src={LogoEmpresa} alt="Logo empresa" maxW="280px"/>
      </Link>
    </>
  );
}