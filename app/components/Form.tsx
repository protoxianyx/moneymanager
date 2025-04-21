"use client"

import React, { useState } from 'react'

interface FormData {
    name: string,
    email: string,
    password: string
}

const Form = () => {

    const [submittedData, setSubmittedData] = useState<FormData>({
        name: '',
        email: '',
        password:''
    })
  return (
    <div>Form</div>
  )
}

export default Form