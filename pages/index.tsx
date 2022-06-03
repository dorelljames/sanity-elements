import type { NextPage } from "next";
import {
  Button,
  Card,
  Container,
  Heading,
  Text,
  TextInput,
  Inline,
  Stack,
  Box,
  Code,
} from "@sanity/ui";
import React from "react";

const Home: NextPage = () => {
  return (
    <Container>
      <Stack padding={4} space={[3, 3, 4, 4]}>
        <Stack space={[3, 3, 4, 4]}>
          <Heading size={4}>Sanity Elements</Heading>
          <Text>
            Quickly get the schema you need for the basic elements you need...
          </Text>
        </Stack>
        <Stack marginTop={4} space={[3, 3, 4, 4]}>
          <TextInput
            padding={[3, 3, 4]}
            placeholder="Search here for elements you need quickly..."
          />
          <CardSelection>
            <Box padding={[3, 3, 4, 5]}>
              <label htmlFor="title">Title</label>
              <br />
              <input id="title" name="title" type="text" />
            </Box>
            <Box>
              <CustomCode>
                {`    {
      title: 'Title',
      name: 'title',
      type: 'string'
    }`}
              </CustomCode>
            </Box>
            <Box padding={[3, 3, 4, 5]}>
              <Button text="Input" />
            </Box>
          </CardSelection>

          <CardSelection>
            <Box padding={[3, 3, 4, 5]}>
              <label htmlFor="description">Description</label>
              <br />
              <textarea id="description"></textarea>
            </Box>
            <Box>
              <CustomCode>
                {`    {
      title: 'Description',
      name: 'description',
      type: 'text'
    }`}
              </CustomCode>
            </Box>
            <Box padding={[3, 3, 4, 5]}>
              <Button text="Textarea" />
            </Box>
          </CardSelection>
          <CardSelection>
            <Box padding={[3, 3, 4, 5]}>
              <Box>
                <input id="orange" type="radio" name="color" value="orange" />
                <label htmlFor="orange">Orange</label>
              </Box>
              <Box>
                <input id="blue" type="radio" name="color" value="blue" />
                <label htmlFor="blue">Blue</label>
              </Box>
              <Box>
                <input id="red" type="radio" name="color" value="red" />
                <label htmlFor="red">Red</label>
              </Box>
            </Box>
            <Box padding={[3, 3, 4, 5]}>
              <CustomCode>
                {`{
  title: 'Fruit Set',
  name: 'fruitSet',
  type: 'string',
  of: [{type: 'string'}],
  options: {
    layout: "radio",
    list: [
      {title: 'Orange', value: 'orange'},
      {title: 'Blue', value: 'blue'},
      {title: 'Red', value: 'red'},
    ]
  }
}`}
              </CustomCode>
            </Box>
            <Box padding={[3, 3, 4, 5]}>
              <Button text="Radio" />
            </Box>
          </CardSelection>

          <CardSelection>
            <Box padding={[3, 3, 4, 5]}>
              <Box>
                <input
                  id="cb-orange"
                  type="checkbox"
                  name="color"
                  value="cb-orange"
                />
                <label htmlFor="cb-orange">Orange</label>
              </Box>
              <Box>
                <input
                  id="cb-blue"
                  type="checkbox"
                  name="color"
                  value="cb-blue"
                />
                <label htmlFor="cb-blue">Blue</label>
              </Box>
              <Box>
                <input
                  id="cb-red"
                  type="checkbox"
                  name="color"
                  value="cb-red"
                />
                <label htmlFor="cb-red">Red</label>
              </Box>
            </Box>

            <Box padding={[3, 3, 4, 5]}>
              <CustomCode>
                {`{
  title: 'Fruit Set',
  name: 'fruitSet',
  type: 'array',
  of: [{type: 'string'}],
  options: {
    list: [
      {title: 'Orange', value: 'orange'},
      {title: 'Blue', value: 'blue'},
      {title: 'Red', value: 'red'},
    ]
  }
}`}
              </CustomCode>
            </Box>
            <Box padding={[3, 3, 4, 5]}>
              <Button text="Checkbox" />
            </Box>
          </CardSelection>
        </Stack>
      </Stack>
    </Container>
  );
};

const CardSelection = ({ children }: { children: React.ReactNode }) => {
  return (
    <Card padding={[3, 3, 4]} radius={2} shadow={1}>
      {children}
    </Card>
  );
};

const CustomCode = ({ children }: { children: React.ReactNode }) => {
  return (
    <Code size={2} style={{ fontFamily: "monospace" }}>
      {children}
    </Code>
  );
};

export default Home;
