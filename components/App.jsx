import React from 'react'

function App({ children }) {
  return (
    <>
      {children}
      <style jsx global>{`
        html,
        body {
          margin: 0;
          padding: 0;
          font-size: 10px;
          font-family: Roboto, Helvetica, Arial, sans-serif;
        }
      `}</style>
    </>
  )
}

export default App
