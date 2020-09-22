import * as React from 'react';
import {Datagrid,List,Create,Edit,TextField,SimpleForm,TextInput,NumberInput,EditButton} from 'react-admin';

const PostTitle=({record})=>{
return <span>Post {record?`"${record.title}"`:''}</span>
}
export const ProductList=props=>(
    <List {...props}>
        <Datagrid>
            <TextField source="title" />
            <TextField source="urlimage" />
            <TextField source="price" />
            <TextField source="promotedprice" />
            <TextField source="rating" />
            <TextField source="longdescription" />
            <TextField source="shortdescription" />
            <TextField source="quantity" />
            <TextField source="altimage" />
            <TextField source="typeimage" />
            <TextField source="reference" />
            < EditButton/>
        </Datagrid>
    
    
    </List>
)

export const Productedit=props=>(
    <Edit {...props} title={<PostTitle/>}>
        <SimpleForm>
            <TextInput source="title" />
            <TextInput source="urlimage"/>
            <NumberInput source="price"/>
        </SimpleForm>
    </Edit>
)


export const ProductCreate=props=>(
    <Create {...props}>
        <SimpleForm>
        <TextInput source="title" />
        <TextInput source="urlimage" type="url"/>
        
        <NumberInput source="rating" min={0} max={5}/>
        <TextInput source="longdescription" />
        <TextInput source="shortdescription" />
        <TextInput source="altimage" />
        <TextInput source="typeimage" />
        <TextInput source="reference" />
        <NumberInput source="price" />
        <NumberInput source="promotedprice" />
        <NumberInput source="quantity" />
        </SimpleForm>
    </Create>
)
