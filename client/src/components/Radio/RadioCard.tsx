import { Box, HStack, useRadio, useRadioGroup, UseRadioProps } from "@chakra-ui/react"
import { ReactNode } from "react"
import { render } from "react-dom"

interface RadioCardProps extends UseRadioProps {
  children: ReactNode;
}

export function RadioCard( { children, ...rest } : RadioCardProps ) {
    const { getInputProps, getCheckboxProps } = useRadio(rest)
  
    const input = getInputProps()
    const checkbox = getCheckboxProps()
  
    return (
      <Box as='label'>
        <input {...input} />
        <Box
          {...checkbox}
          cursor='pointer'
          borderWidth='1px'
          borderRadius='md'
          boxShadow='md'
          _checked={{
            bg: 'blue',
            color: 'white',
            borderColor: 'blue',
          }}
          _focus={{
            boxShadow: 'outline',
          }}
          px={4}
          py={2}
        >
          {children}
        </Box>
      </Box>
    )
}
  
