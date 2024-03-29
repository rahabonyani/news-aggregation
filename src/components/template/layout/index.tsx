import { Container, Flex } from "@chakra-ui/react";
import Header from "components/organisms/header";
import type { LayoutProps } from "./types";

const Layout = ({ children }: LayoutProps) => {
  return (
    <Container maxWidth="8xl">
      <Flex flexDirection="column" rowGap={6}>
        <Header />
        {children}
      </Flex>
    </Container>
  );
};

export default Layout;
