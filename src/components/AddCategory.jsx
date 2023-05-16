import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 2) return;

        // setCategories([...categories, inputValue]);

        setInputValue('');

        onNewCategory(inputValue.trim());

    };
    return (
        <form onSubmit={() => onSubmit(event)}>
            <input
                type="text"
                placeholder="Buscar Gifs..."
                value={inputValue}
                onChange={(event) => onInputChange(event)}
            />
        </form>
    )
}
