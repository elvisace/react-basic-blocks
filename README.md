# README

Basic Building Blocks for React.js. Includes Grid (Container, Row, Column), Box, and Text components.

## STORYBOOK / DEMO

[https://elvisace.github.io/react-basic-blocks/](https://elvisace.github.io/react-basic-blocks/)

## COMPONENTS

### Grid

Css grid based on bootstrap that exposes the following components: `Container`, `Row`, `Column`. Example:

```tsx
import React, { FC } from "react";
import { Box, Text, Container, Row, Col, Visible } from "react-basic-blocks";

export const ExampleComponent: FC = () => {
  return (
    <Container fluid>
      <Row>
        <Col offset={{ lg: 1 }}>
          <Visible xs sm>
            <Box
              margin="0 0 20px 0"
              cursor="pointer"
              flexDirection="row"
              alignItems="center"
            >
              <Text>Text One</Text>
            </Box>
          </Visible>
        </Col>
      </Row>
      <Row>
        <Col offset={{ lg: 1 }} md={9} lg={8}>
          <Visible md lg>
            <Text color="#000">
              Some Text
            </Text>
          </Visible>
        </Col>
        <Col md={3}>
      </Row>
    </Container>
  );
};

```

### Container

Container that holds rows. Props:

```typescript
interface IContainerProps {
  id?: string;
  fluid: boolean;
  className?: string;
}
```

### Row

A row can hold several columns inside. Props:

```typescript
interface IRowProps {
  id?: string;
  align?: string;
  noGutters?: boolean;
}
```

### Column

A divides a row vertically according to the colsize set for the window display size. Props:

```typescript
enum ColSize {
  xs = "xs",
  sm = "sm",
  md = "md",
  lg = "lg",
}

interface IColProps {
  style?: CSSProperties;
  id?: string;
  [ColSize.xs]?: number;
  [ColSize.sm]?: number;
  [ColSize.md]?: number;
  [ColSize.lg]?: number;
  offset?: {
    [ColSize.xs]?: number;
    [ColSize.sm]?: number;
    [ColSize.md]?: number;
    [ColSize.lg]?: number;
  };
}
```

### Box

A flex div whose flex direction defaults to `column`. Takes in the following properties:

```typescript
export interface BoxProps {
  alignSelf?: React.CSSProperties["alignSelf"];
  margin?: React.CSSProperties["margin"];
  alignItems?: React.CSSProperties["alignItems"];
  alignContent?: React.CSSProperties["alignContent"];
  flexBasis?: React.CSSProperties["flexBasis"];
  border?: React.CSSProperties["border"];
  borderTop?: React.CSSProperties["borderTop"];
  borderRight?: React.CSSProperties["borderRight"];
  borderBottom?: React.CSSProperties["borderBottom"];
  borderLeft?: React.CSSProperties["borderLeft"];
  flexDirection?: React.CSSProperties["flexDirection"];
  flex?: React.CSSProperties["flex"];
  flexWrap?: React.CSSProperties["flexWrap"];
  height?: React.CSSProperties["height"];
  width?: React.CSSProperties["width"];
  justifyContent?: React.CSSProperties["justifyContent"];
  padding?: React.CSSProperties["padding"];
  backgroundColor?: React.CSSProperties["backgroundColor"];
  borderRadius?: React.CSSProperties["borderRadius"];
  boxShadow?: React.CSSProperties["boxShadow"];
  cursor?: React.CSSProperties["cursor"];
}
```

### Text

A span that takes in the following properties:

```typescript
export interface TextProps {
  alignSelf?: React.CSSProperties["alignSelf"];
  color?: React.CSSProperties["color"];
  margin?: React.CSSProperties["margin"];
  fontSize?: React.CSSProperties["fontSize"];
  textAlign?: React.CSSProperties["textAlign"];
  fontWeight?: React.CSSProperties["fontWeight"];
  fontStretch?: React.CSSProperties["fontStretch"];
  fontStyle?: React.CSSProperties["fontStyle"];
  wordBreak?: React.CSSProperties["wordBreak"];
  lineHeight?: React.CSSProperties["lineHeight"];
  letterSpacing?: React.CSSProperties["letterSpacing"];
  overflow?: React.CSSProperties["overflow"];
  whiteSpace?: React.CSSProperties["whiteSpace"];
  textOverflow?: React.CSSProperties["textOverflow"];
}
```
