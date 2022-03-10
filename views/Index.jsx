const React = require('react')
const Default = require('./layout/Default.jsx');

class Index extends React.Component {
    render(){
        const sneakers = this.props.sneakers   
        return (
            <Default title="Index Page">
                 <div className ="myDiv">
                        <nav>
                            <a href="/sneakers/new">Go to the new page</a>
                        </nav>
                        <ul>
                        {
                            sneakers.map((sneaker) => {
                                console.log({sneaker})
                                return (
                                    <li key={`${sneaker._id}`}>
                                        <img src={sneaker.image}></img>
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