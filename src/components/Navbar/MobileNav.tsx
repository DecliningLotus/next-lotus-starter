import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  IconButton,
  IconButtonProps,
  Stack,
  useColorModeValue,
  UseDisclosureProps,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

import { Logo, MenuStack } from "./Navbar";

interface UseDisclosurePropsExtended extends UseDisclosureProps {
  onToggle?: () => void;
}

export const MobileNavButton = (
  { onToggle, isOpen }: UseDisclosurePropsExtended,
  props: IconButtonProps
) => {
  return (
    <Box display={{ base: "inline-block", md: "none" }} onClick={onToggle}>
      <IconButton
        display={{ base: "flex", md: "none" }}
        aria-label="Open menu"
        fontSize="20px"
        color={useColorModeValue("gray.800", "inherit")}
        variant="ghost"
        icon={
          isOpen ? (
            <IconButton aria-label="Close menu" icon={<CloseIcon />} />
          ) : (
            <IconButton aria-label="Open menu" icon={<HamburgerIcon />} />
          )
        }
        {...props}
      />
    </Box>
  );
};

export const MobileNavContent = ({
  isOpen,
  onToggle,
}: UseDisclosurePropsExtended) => {
  const bgNav = useColorModeValue("gray.50", "gray.900");

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          transition={{ duration: 0.08 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Stack
            w="100%"
            bg={bgNav}
            h="100vh"
            overflow="auto"
            pos="absolute"
            top="0"
            left="0"
            zIndex={20}
            pb="8"
          >
            <Flex
              as="nav"
              align="center"
              justify="space-between"
              wrap="wrap"
              w="100%"
              p={8}
            >
              <Logo />
              <MobileNavButton onToggle={onToggle} isOpen={isOpen} />
            </Flex>

            <MenuStack />
          </Stack>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
