const React = require('react')
const Default = require('./layout/Default.jsx');

class Index extends React.Component {
    render(){
        const sneakers = this.props.sneakers   
        return (
            <Default title="Index Page">
                 <div className ="IndexContainer">
                        <nav>
                            <a href="/sneakers/new">Add a sneaker</a>
                        </nav>
                        <ul>
                        {
                            sneakers.map((sneaker) => {
                                console.log({sneaker})
                                return (
                                    <li className='SneakerContainer' key={`${sneaker._id}`}>
                                        <a href={`/sneakers/${sneaker._id}`}>{sneaker.name}</a>
                                        <img  height='400px' width='400px'src={sneaker.image}></img>
                                        <form action={`/sneakers/${sneaker._id}?_method=DELETE`} method="POST">
                                            <input type="submit" value={`DELETE ${sneaker.name.toUpperCase()}`} />
                                        </form>
                                        <br/>
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