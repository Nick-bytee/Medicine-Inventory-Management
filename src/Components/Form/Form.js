import React, {useContext} from 'react'
import './Form.css'
import InputField from './InputField'
import { Container } from 'react-bootstrap'
import ItemsContext from '../Context/ItemsContext/items-context'

const Form = () => {
  const itemsContext = useContext(ItemsContext)

  const addItemsHandler = (item) => {
    itemsContext.addItems(item)   
  }

  return (
    <Container>
        <h4 className='mt-4'>Add Medicine :</h4>
        <hr className='m-0' style={{color : '#79cc8d'}}/>
        <InputField onClick={addItemsHandler} name/>
    </Container>
    
  )
}

export default Form