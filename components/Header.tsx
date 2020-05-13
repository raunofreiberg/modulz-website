import React from 'react';
import NextLink from 'next/link';
import {
  Container,
  Box,
  Text,
  Link,
  Flex,
  Pipe,
  Popover,
  ChromelessButton,
  Badge,
  Heading,
  Divider,
} from '@modulz/radix';
import { Logo } from './Logo';
import { HideInProd } from './HideInProd';
import { PlusIcon } from '@modulz/radix-icons';

export const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  return (
    <Container size={2} sx={{ maxWidth: 'none' }}>
      <Flex py={4} sx={{ alignItems: 'flex-start' }}>
        <NextLink href="/" passHref>
          <Link sx={{ color: 'inherit', ':focus': { boxShadow: 'none' } }}>
            <Logo />
          </Link>
        </NextLink>

        <Flex ml="auto" sx={{ flexDirection: ['column', 'row'], alignItems: ['flex-end', 'center'] }}>
          <ChromelessButton
            ref={buttonRef}
            onClick={() => setIsOpen(true)}
            sx={{
              py: 1,
              px: 2,
              borderRadius: 1,
              bg: isOpen ? 'gray200' : undefined,
              ':hover': { bg: 'gray200' },
            }}
          >
            <Text size={3} sx={{ color: 'gray700' }}>
              <Flex as="span" sx={{ alignItems: 'center' }}>
                Product
                <Box as="span" ml={1}>
                  <PlusIcon />
                </Box>
              </Flex>
            </Text>
          </ChromelessButton>

          <Popover targetRef={buttonRef} isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <Box py={1} sx={{ width: 300 }}>
              <Box py={2} px={4}>
                <Heading size={0} sx={{ color: 'gray600' }}>
                  Theme <Badge ml={1}>Coming soon</Badge>
                </Heading>
                <Text size={2} sx={{ color: 'gray600', lineHeight: 1 }}>
                  Advanced tooling for defining scale-based design tokens.
                </Text>
              </Box>
              <Box py={2} px={4}>
                <Heading size={0} sx={{ color: 'gray600' }}>
                  Editor <Badge ml={1}>Coming soon</Badge>
                </Heading>
                <Text size={2} sx={{ color: 'gray600', lineHeight: 1 }}>
                  A visual code editor for building a component library without writing code.
                </Text>
              </Box>

              <NextLink href="/styleguide" passHref>
                <Box
                  as="a"
                  py={2}
                  px={4}
                  sx={{ textDecoration: 'none', color: 'inherit', display: 'block', ':hover': { bg: 'gray200' } }}
                  onClick={() => setIsOpen(false)}
                >
                  <Heading size={0}>
                    Style guide
                    <Badge variant="blue" ml={1}>
                      New
                    </Badge>
                  </Heading>
                  <Text size={2} sx={{ color: 'gray700', lineHeight: 1 }}>
                    Handoff your design system with a gorgeous, generated styleguide.
                  </Text>
                </Box>
              </NextLink>

              <Divider my={1} />

              <a href="https://radix.modulz.app" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Box as="span" py={2} px={4} sx={{ display: 'block', ':hover': { bg: 'gray200' } }}>
                  <Heading size={0}>Radix</Heading>
                  <Text size={2} sx={{ color: 'gray700', lineHeight: 1 }}>
                    Our very own design system—generated by Modulz.
                  </Text>
                </Box>
              </a>
            </Box>
          </Popover>

          <Text size={3} sx={{ color: 'gray700' }} ml={7}>
            <NextLink href="/about" passHref>
              <Link sx={{ color: 'inherit', ':focus': { boxShadow: 'none' } }}>About</Link>
            </NextLink>
          </Text>
          <HideInProd>
            <Text size={3} sx={{ color: 'gray700' }} ml={7}>
              <NextLink href="/learn" passHref>
                <Link sx={{ color: 'inherit', ':focus': { boxShadow: 'none' } }}>Learn</Link>
              </NextLink>
            </Text>
          </HideInProd>
          <Text size={3} sx={{ color: 'gray700' }} ml={7}>
            <NextLink href="/blog" passHref>
              <Link sx={{ color: 'inherit', ':focus': { boxShadow: 'none' } }}>Blog</Link>
            </NextLink>
          </Text>
          <HideInProd>
            <Text size={3} sx={{ color: 'gray700' }} ml={7}>
              <NextLink href="/pricing" passHref>
                <Link sx={{ color: 'inherit', ':focus': { boxShadow: 'none' } }}>Pricing</Link>
              </NextLink>
            </Text>
          </HideInProd>

          <Pipe mx={5} />

          <Text size={3} sx={{ color: 'gray700' }}>
            <Link href="https://modulz.app/login" sx={{ color: 'inherit', ':focus': { boxShadow: 'none' } }}>
              Login
            </Link>
          </Text>
        </Flex>
      </Flex>
    </Container>
  );
};
