import * as React from 'react'
import { Heading, HeadingLevel } from 'baseui/heading'

const App = (): JSX.Element => {
  return (
    <>
      <HeadingLevel>
        <Heading styleLevel={4}>Welcome to React + BaseUI </Heading>
      </HeadingLevel>
    </>
  )
}

export default App
