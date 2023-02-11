import React from "react";
import { Box, Heading, Text, Link, Image } from "@chakra-ui/core";

function AboutPage() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Box maxWidth="600px">
        <Heading as="h1" fontSize="2xl">
          About Us
        </Heading>
        <Text mt={5} fontSize="lg">
          We are a team of passionate developers who love to build amazing things
          using the latest technologies. Our goal is to help businesses and
          individuals bring their ideas to life through the power of technology.
        </Text>
        <Box mt={5} display="flex" alignItems="center">
          <Image
            src="https://source.unsplash.com/random/200x200"
            rounded="full"
            size="100px"
            mr={5}
          />
          <Box>
            <Heading as="h2" fontSize="lg">
              Contact Us
            </Heading>
            <Text mt={2}>
              If you have any questions or would like to work with us, please
              feel free to contact us at{" "}
              <Link href="mailto:info@example.com">info@example.com</Link>
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default AboutPage;
