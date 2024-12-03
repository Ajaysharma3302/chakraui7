import { Box, Heading, Highlight, Button, Input } from "@chakra-ui/react";

import { Card, Image, Text } from "@chakra-ui/react";

import { Field } from "@/components/ui/field";

function App() {
  return (
    <>
      <Box bg="tomato" w="100%" p="4" color="white">
        <Heading size="3xl" letterSpacing="tight">
          <Highlight query="with speed" styles={{ color: "teal.600" }}>
            Create accessible React apps with speed
          </Highlight>
        </Heading>
        <Button variant="solid">Click Me</Button>
        <Field
          label="Email"
          required
          helperText="We'll never share your email."
        >
          <Input placeholder="Enter your email" />
        </Field>
        <Card.Root maxW="sm" overflow="hidden">
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch with wooden legs"
          />
          <Card.Body gap="2">
            <Card.Title>Living room Sofa</Card.Title>
            <Card.Description>
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces.
            </Card.Description>
            <Text
              textStyle="2xl"
              fontWeight="medium"
              letterSpacing="tight"
              mt="2"
            >
              $450
            </Text>
          </Card.Body>
          <Card.Footer gap="2">
            <Button variant="solid">Buy now</Button>
            <Button variant="ghost">Add to cart</Button>
          </Card.Footer>
        </Card.Root>
      </Box>
    </>
  );
}

export default App;
