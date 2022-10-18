### chakra UI responsive design

There are two ways in Chakra UI to define responsive styles. Depending on the occasion, you can choose the more appropriate and readable solution.

##### First option

maxW={[
"auto", // 0-30em
"auto", // 30em-48em
"auto", // 48em-62em
"1200px", // 62em+
]}

##### Second option

maxW={{
    base: "auto", // 0-80em
    xl: "1200px" // 80em+
  }}
