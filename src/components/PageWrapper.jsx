import { Container } from '@mui/material'
import React from 'react'

export default function PageWrapper(props) {
  return (
    <Container maxWidth="xl" sx={{ paddingTop: "15px" }}>
        {props.children}
    </Container>
  )
}
