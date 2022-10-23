//rafc
import {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch', 'Pac Man' ]);
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
            { categories.map(category => (
                    <GifGrid 
                        key={ category } 
                        category={ category }
                    />
                )
            ) }
    </>
  )
}
