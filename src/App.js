import React from 'react'
import { RecursiveComponent } from './Recursive'
import { data } from './data'

export default function App() {
  return (
    <div>
      <h1>App to show File structure using React</h1>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <RecursiveComponent data={data} />
    </div>
  )
}
