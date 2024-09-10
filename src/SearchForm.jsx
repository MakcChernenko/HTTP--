const SearchForm = ({onSearch}) =>{
    const handleSubmit = (e) =>{
        e.preventDefault()
        const form = e.target
        const topic = form.elements.topic.value
        if (form.elements.topic.value.trim() === "") {
            alert("Please enter search term")
            return;
        }
        console.log({topic});
        onSearch(topic)
        form.reset()
    }
    return <form onSubmit={handleSubmit} >
        <input type="text" name="topic" placeholder="Пошук статей" />
        <button type="submit" >submit</button>
    </form>
}
export default SearchForm