import Link from 'next/link';
import { Flex, Box, Spacer, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react'
import { FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';

const Navbar = () => (
  <Flex p='5' borderBottom='2px' borderColor='gray.100'>
    <Box fontSize='3xl' color='black.200' fontWeight='bold'>
      <Link href='/' paddingLeft='2'>Real Estate APP</Link>
    </Box>
    <Spacer />
    <Box fontSize="lg">
    <Breadcrumb>
      <BreadcrumbItem>
        <Icon as={FcHome} paddingRight="1" />
        <BreadcrumbLink href='/'>Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Icon as={BsSearch} paddingRight="1" />
        <BreadcrumbLink href='/search'>Search</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Icon as={FiKey} paddingRight="1" />
        <BreadcrumbLink href='/search?purpose=for-sale'>Buy Property</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Icon as={FcAbout} paddingRight="1" />
        <BreadcrumbLink  href='/search?purpose=for-rent'>Rent Property</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
    </Box>
  </Flex>
);

export default Navbar;