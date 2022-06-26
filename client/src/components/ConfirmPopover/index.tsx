import { Button, ButtonGroup, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger, useDisclosure } from "@chakra-ui/react"
import { ReactNode } from "react"

interface ConfirmPopoverProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ConfirmPopover({ isOpen, onClose }: ConfirmPopoverProps) {
  
    return (
      <>
        <Popover
          returnFocusOnClose={false}
          isOpen={isOpen}
          onClose={onClose}
          placement='right'
          closeOnBlur={false}
        >
          <PopoverContent>
            <PopoverHeader fontWeight='semibold'>Confirmation</PopoverHeader>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody>
              Are you sure you want to continue with your action?
            </PopoverBody>
            <PopoverFooter display='flex' justifyContent='flex-end'>
              <ButtonGroup size='sm'>
                <Button variant='outline'>Cancel</Button>
                <Button colorScheme='red'>Apply</Button>
              </ButtonGroup>
            </PopoverFooter>
          </PopoverContent>
        </Popover>
      </>
    )
  }