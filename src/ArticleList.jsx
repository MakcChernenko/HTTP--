import Article from "./Article";

const ArticleList = ({data})=>{
    return(
        <div>
            <h2>list</h2>
            <ul>
                {
                    data.map((list) =>{
                        console.log(list);
                        
                        return(
                            <li key={list.id} >
                               <Article data={list} />
                                </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default ArticleList