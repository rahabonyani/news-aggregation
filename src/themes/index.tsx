import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

// 3. Pass the `theme` prop to the `ChakraProvider`
export const ThemProvider = ({ children }: Props) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};
