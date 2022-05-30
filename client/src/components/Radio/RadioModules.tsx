import { HStack, useRadioGroup } from "@chakra-ui/react"
import { RadioCard } from "./RadioCard"

export function RadioModules() {
    const options = ['1', '2', '3']

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'modules',
        defaultValue: '1',
        onChange: console.log,
    })

    const group = getRootProps()

    return (
        <HStack {...group}>
        {options.map((value) => {
            const radio = getRadioProps({ value })
            return (
            <RadioCard key={value} {...radio}>
                {value}
            </RadioCard>
            )
        })}
        </HStack>
    )
}