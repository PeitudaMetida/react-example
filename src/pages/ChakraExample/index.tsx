import { Button, Box, Divider, Image } from "@chakra-ui/react"
import Menu from "../../componentes/Menu"
import { useCounter } from "../../hooks/Counter"

function ChakraExample() {
  const { setCount, count } = useCounter();
  return (
    <>
    
      <Menu></Menu>
      <Box maxW='225px' m="50px" borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Image src="https://www.ideiaspara.com.br/dominios/skillemblemas/imagens/usuario.svg" alt="foto do usuário" />
        <Divider/>
        <Box p='6'>
          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            noOfLines={1}
          >
            R$ 4.899
          </Box>
          <Box mt="10px" display="block" as='span' color='#00a650' fontSize='sm'>
            12x R$408 sem juros
          </Box>
          <Box fontWeight="bold" as='span' color='#00a650' fontSize='sm'>
            Frete grátis
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default ChakraExample
