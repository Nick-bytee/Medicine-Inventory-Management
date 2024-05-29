import React, { useContext } from 'react'
import './Content.css'
import { Container } from 'react-bootstrap'
import DataTable from './Table/Table'
import ItemsContext from '../Context/ItemsContext/items-context'

const Content = () => {
  const itemsProvider = useContext(ItemsContext)

  return (
    <Container className='mt-5'>
        <h3>Available Medicines</h3>
        <hr style={{color : '#79cc8d', margin : '0'}}/>
        <DataTable data={itemsProvider.items}/>
    </Container>
  )
}

export default Content