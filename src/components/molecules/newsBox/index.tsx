import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { NewsProps } from "./types";
// import ReactHtmlParser from "react-html-parser";

const NewsBox = ({
  title,
  description,
  author,
  pubDate,
  imageUrl,
}: NewsProps) => {
  return (
    <>
      <Box
        maxW={{ base: "100%", sm: "48%", md: "32%", lg: "24%" }}
        width="full"
        minHeight={{ base: 330, md: 350 }}
        borderWidth="1px"
        borderRadius="lg"
        boxShadow="lg"
        overflow="hidden"
      >
        <Box width="full" height="full" maxHeight={180} position="relative">
          <Image
            src={imageUrl}
            alt={title}
            width="full"
            height="full"
            objectFit="cover"
            backgroundColor='gray.100'
            objectPosition="center center"
            loading="lazy"
          />
          <Text
            position="absolute"
            textAlign="right"
            color="gray.700"
            letterSpacing="wide"
            fontSize="xs"
            bottom={1}
            right={1}
            bgColor="orange.200"
            px={1}
            rounded={5}
          >
            {pubDate}
          </Text>
        </Box>

        <Box p="6">
          <Heading
            fontWeight="semibold"
            as="h4"
            fontSize={{ base: "large", md: "x-large" }}
            lineHeight="tight"
            noOfLines={1}
            color="orange.500"
          >
            {title}
          </Heading>
          <Box
            color="blue.600"
            letterSpacing="wide"
            fontSize="xs"
            py={2}
            textTransform="uppercase"
          >
            <Text noOfLines={1}>{author}</Text>
          </Box>

          <Text noOfLines={3} fontSize={{ base: "small", md: "medium" }}>
            {description}
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default NewsBox;
