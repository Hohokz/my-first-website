// import logo from './logo.svg';
import './App.css';
import { Box, ChakraProvider } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Spinner } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import DisplayJohn from './components/DisplayJohn';
import { JohnProfile } from './components/DisplayJohn';

function App() {
  return (
    <div className="App">
      <Box margin={5}>
        <Button margin={5} size="xl" colorScheme='blue'>Button</Button>
        <br />
        <Button margin={5} size="lg" colorScheme='white' variant={'outline'}>Button</Button>
        <br />
        <Button margin={5} size="sm" border='2px' borderColor='green.500'>
          Button
        </Button>
      </Box>
        <br />
      <Spinner margin={5} size='md' />
        <br />
      <Spinner margin={5} size='lg' speed="15s" color="red" />
        <br />
      <Spinner margin={5} size='xl' thickness="50px" color="green" />
        <br />
      <Input margin={5} color="red" placeholder='small size' size='md' />
        <br/>
      <Input margin={5} color="green" placeholder='medium size' size='lg' />
        <br/>
      <Input margin={5} color="blue" placeholder='large size' size='xl' />
        <br/>
      <div>
        <DisplayJohn />
        <JohnProfile />
      </div>
    </div>

  );
}



export default App;
