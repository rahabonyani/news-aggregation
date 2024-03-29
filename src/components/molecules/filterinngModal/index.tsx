import { HamburgerIcon } from "@chakra-ui/icons";
import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Flex,
  Select,
} from "@chakra-ui/react";
import { saveFilter } from "actions/filters";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";

const FilteringModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      from: "",
      to: "",
    },
    onSubmit: async (values) => {
      dispatch(saveFilter({ from_date: values.from, to_date: values.to }));
      console.log(values);
      onClose();
    },
  });

  const handleClearData = () => {
    formik.resetForm();
    onClose();
  };

  return (
    <>
      <Button leftIcon={<HamburgerIcon />} onClick={onOpen}>
        Filter
      </Button>

      <Modal onClose={onClose} isOpen={isOpen} size="2xl" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Filtering</ModalHeader>
          <ModalCloseButton />{" "}
          <form onSubmit={formik.handleSubmit}>
            <ModalBody>
              <Flex
                gap={4}
                flexDirection={{ base: "column", sm: "row" }}
                pb={4}
              >
                <FormControl>
                  <FormLabel>From</FormLabel>
                  <Input
                    placeholder="Select start date"
                    name="from"
                    value={formik.values.from}
                    onChange={formik.handleChange}
                    size="md"
                    type="date"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>To</FormLabel>
                  <Input
                    placeholder="Select end date"
                    name="to"
                    value={formik.values.to}
                    onChange={formik.handleChange}
                    size="md"
                    type="date"
                  />
                </FormControl>
              </Flex>
              {/* <Flex gap={4} flexDirection={{ base: "column", sm: "row" }}>
                <FormControl>
                  <FormLabel>Category</FormLabel>
                  <Select variant="outline" placeholder="Outline" />
                </FormControl>
                <FormControl>
                  <FormLabel>Source</FormLabel>
                  <Select variant="outline" placeholder="Outline" />
                </FormControl>
              </Flex> */}
            </ModalBody>
            <ModalFooter columnGap={2}>
              <Button
                onClick={handleClearData}
                colorScheme="red"
                variant="outline"
                type="submit"
              >
                Clear
              </Button>
              <Button type="submit" colorScheme="green" px={6}>
                Save
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FilteringModal;
