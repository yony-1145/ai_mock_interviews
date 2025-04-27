import Agent from '@/app/components/Agent'
import React from 'react'

function Page() {
  return (
    <>
        <h3>Interview Generation</h3>

        <Agent userName='You' userId='user1' type='generate'/>
    </>
  )
}

export default Page