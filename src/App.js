import logo from './logo.svg';
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
        <Button margin={5} colorScheme='blue'>Button</Button>
        <br />
        <Button margin={5} colorScheme='white' variant={'outline'}>Button</Button>
        <br />
        <Button margin={5} border='2px' borderColor='green.500'>
          Button
        </Button>
      </Box>
        <br />
      <Spinner margin={5} size='md' />
        <br />
      <Spinner margin={5} size='lg' />
        <br />
      <Spinner margin={5} size='xl' />
        <br />
      <Input margin={5} placeholder='small size' size='md' />
        <br/>
      <Input margin={5} placeholder='medium size' size='lg' />
        <br/>
      <Input margin={5} placeholder='large size' size='xl' />
        <br/>
      <div>
        <DisplayJohn />
        <JohnProfile />
      </div>
    </div>

  );
}



export default App;
