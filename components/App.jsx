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
        }
      `}</style>
    </>
  )
}

export default App
