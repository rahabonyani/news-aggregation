import { Flex, Heading, VStack } from "@chakra-ui/react";
import FilteringModal from "components/molecules/filterinngModal";
import SearchBox from "components/molecules/searchBox";

const Header = () => {
  const handleClickSearch = () => {};
  return (
    <VStack
      py={4}
      borderBottom="1px solid"
      borderBottomColor="orange.500"
      rowGap={5}
    >
      <Heading color="blue.700">News Aggregator</Heading>
      <Flex width="full" flexDirection="row" justifyContent="space-between" columnGap={4}>
        <SearchBox onClick={handleClickSearch} />
        <FilteringModal />
      </Flex>
    </VStack>
  );
};

export default Header;
