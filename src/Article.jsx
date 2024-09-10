const Article = ({data})=>{
    return(
        <div>
            <h3>{data.title}</h3>
            <a href={data.url}>link</a>
        </div>
    )
}
export default Article;