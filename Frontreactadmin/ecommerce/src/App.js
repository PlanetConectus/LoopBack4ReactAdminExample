import * as React from 'react';
import './App.css';
import { Admin, Resource } from 'react-admin'
import lb4Provider from 'react-admin-loopback4-adapted'
import { ProductList, ProductCreate, Productedit } from './productlist'
import {Userlist,Useredit,Usercreate} from './user'
import PostIcon from '@material-ui/icons/Book'
import Dashboard from './dashboard'

const dataProvider = lb4Provider('http://localhost:3001');
const App = () =>(
  
  <Admin dataProvider={dataProvider} dashboard={Dashboard}>
    <Resource name="products" list={ProductList} create={ProductCreate} edit={Productedit} icon={PostIcon} />
    <Resource name="users" list={Userlist} edit={Useredit} create={Usercreate}/>
  </Admin>
  
  )
  console.log("hi")
export default App;
