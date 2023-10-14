'use client'

export default function MainLayout ({ children }) {
  return (
    <>
      <div className='content'>
        <main>
          {children}
        </main>
      </div>
    </>
  )
}
