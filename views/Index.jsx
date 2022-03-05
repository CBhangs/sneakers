const React = require('react')

class Index extends React.Component {
    render(){
        const sneakers = this.props.sneakers   
        return (
            <Default title="Index Page" subhead="hello">
                 <div className ="myDiv">
                        <nav>
                            <a href="/sneakers/new">Go to the new page</a>
                        </nav>
                        <ul>
                        {
                            sneakers.map((sneaker) => {
                                return (
                                    <li key={`${sneaker._id}`}>
                                        <img src={sneaker.img}></img>
                                        <a href={`/sneakers/${sneaker._id}`}>{sneaker.name}</a>
                                        <form action={`/sneakers/${sneaker._id}?_method=DELETE`} method="POST">
                                            <input type="submit" value={`DELETE ${sneaker.name.toUpperCase()}`} />
                                        </form>
                                    </li>
                                )
                            })
                        }
                        </ul> 
                    </div>
            </Default>
        )
    }
}


module.exports = Index;