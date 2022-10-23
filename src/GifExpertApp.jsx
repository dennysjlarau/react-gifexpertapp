//rafc
import {useState} from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball' ]);
    const onAddCategory = (newValue) => {
        // valida que no se añada una categoria existente
        if(categories.includes(newValue)) return;
        setCategories([newValue, ...categories]);
    };

  return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategory 
            //setCategories={ setCategories }
            onNewCategory = { onAddCategory }
        />
        <ol>
            { categories.map(category => {
                return <li key={category}>{category}</li>;
            }) }
        </ol>
    </>
  )
}
