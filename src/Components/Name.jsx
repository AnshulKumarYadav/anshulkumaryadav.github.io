import { Image } from '@chakra-ui/react'
import l from "../assets/Logo.png";
import ld from "../assets/Logo-dark.png";

const Name = ({mode}) => {
  return (
      <>
         <Image boxSize='100' src={mode=='light'?l:ld} marginTop='5' />
      </>
  );
};

export default Name;
