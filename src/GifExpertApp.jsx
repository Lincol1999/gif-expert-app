import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    // Para que no se repita los nombres

    // Opción 1:
    // const onAddCategory = (newCategory) => {
    //     if (categories.includes(newCategory)) return;
    //     setCategories([newCategory, ...categories]);
    // }

    // Opción 2:
    const onAddCategory = (value) => setCategories(cat => [...new Set([value, ...cat])]);

    return (
        <>
            {/* Título */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory
                // setCategories={setCategories}
                // categories={categories}
                onNewCategory={(value) => onAddCategory(value)}
            />

            {
                categories.map(category => (

                    <GifGrid
                        key={category}
                        category={category}
                    />
                )
                )
            }

        </>
    )
}
