const React = require('react');

class Show extends React.Component {
    render(){
        const sneaker = this.props.sneaker;
        return (
            <div>
            <h1>This is the Show Page for {sneaker.name.toUpperCase()} </h1>
            <a href={`/sneakers/${sneaker._id}/edit`}>Edit Sneaker</a>
            <br/>
            <a href="/sneakers">Go Back to the index</a>
            <img src={sneaker.image}></img>
            <p>{sneaker.name}</p>
            <p>{sneaker.description}</p>
            <p>{sneaker.price}</p>
        </div>
    );  
}
}

module.exports = Show;