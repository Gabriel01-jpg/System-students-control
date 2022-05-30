import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <>
      <Flex>
        {showProfileData && (
          <Box mr="4" textAlign="right">
            <Text>Gabriel Lima</Text>
            <Text color="gray.300" fontSize="small">
              gabriellima170801@gmail.com
            </Text>
          </Box>
        )}

        <Avatar
          size="md"
          name="Gabriel Lima"
          src="https://github.com/gabriel01-jpg.png"
        />
      </Flex>
    </>
  );
}