import { useContext, useEffect } from "react"
import Store from '../storeProvider'
import TodoContainer from '../todo/TodoContainer'

const HOST_API = "http://localhost:8080/api";

const CategoryList = () => {

    const { dispatch, state: { category } } = useContext(Store);
    const currentList = category.list;

    useEffect(() => {
        fetch(`${HOST_API}/categories`)
            .then(response => response.json())
            .then((list) => {
                console.log(list)
                const action = { type: "update-list-category", list }
                dispatch(action)
            })
    }, [dispatch]);


    const onDelete = (id) => {
        fetch(HOST_API + "/" + id + "/todo", {
            method: "DELETE"
        }).then((list) => {
            dispatch({ type: "delete-item", id })
        })
    };


    return currentList.map((category) => {
        return <div><h2>{category.name}</h2>
            <TodoContainer props = {category.id} />

        </div>
    })
}

export default CategoryList;