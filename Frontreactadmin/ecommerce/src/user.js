import * as React from 'react';
import {Datagrid,List,Create,Edit,TextField,SimpleForm,TextInput,
    EditButton} from 'react-admin';
    const PostTitle=({record})=>{
        return <span>Name:{record?`${record.firstName}`:''}</span>
        }
export const Userlist=props=>(
    <List {...props}>
        <Datagrid>
            <TextField source="firstName"/>
            <TextField source ="lastName"/>
            <TextField source="email" />
            <EditButton/>
        </Datagrid>
    </List>
)
export const Useredit=prop=>(
    <Edit {...prop} title={<PostTitle/>}>
        <SimpleForm>
            <TextInput source="firstName"/>
            <TextInput source="lastName"/>
            <TextInput source="email"/>
        </SimpleForm>
    </Edit>
)
export  const Usercreate=props=>(
    <Create {...props}>
        <SimpleForm>
            <TextInput source="firstName"/>
            <TextInput source="lastName"/>
            <TextInput source="email" />
        </SimpleForm>
    </Create>
)