import { CloseIcon, Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { saveQuery } from "actions/filters";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";

const SearchBox = ({ onClick }: SearchBoxProps) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      query: "",
    },
    onSubmit: async (values) => {
      dispatch(saveQuery({ query: values.query }));
    },
  });

  const handleClearQuery = () => {
    formik.setFieldValue("query", "");
    formik.submitForm();
  };

  return (
    <Box
      maxWidth={550}
      width="full"
      sx={{ form: { maxWidth: 550, width: "full" } }}
    >
      <form onSubmit={formik.handleSubmit}>
        <InputGroup size="md" width="full" maxW={550}>
          <Input
            name="query"
            value={formik.values.query}
            onChange={formik.handleChange}
            pr={formik.values.query ? "5rem" : "3rem"}
            type="text"
            placeholder="Search"
            rounded="full"
          />
          <InputRightElement
            justifyContent="space-between"
            width={formik.values.query ? "5rem" : "2.7rem"}
            pr="0.4rem"
          >
            {formik.values.query ? (
              <Button
                variant="ghost"
                size="sm"
                rounded="full"
                onClick={handleClearQuery}
              >
                <CloseIcon />
              </Button>
            ) : (
              ""
            )}

            <Button
              colorScheme="orange"
              size="sm"
              rounded="full"
              bgColor="blue.600"
              color="white"
              onClick={onClick}
              type="submit"
            >
              <Search2Icon />
            </Button>
          </InputRightElement>
        </InputGroup>
      </form>
    </Box>
  );
};

export default SearchBox;
