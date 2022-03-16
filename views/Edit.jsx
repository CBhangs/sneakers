const React = require('react');
const Default = require('./layout/Default.jsx')

class Edit extends React.Component{
  render() {
    return (
      <Default title="Edit Page">      
             <form action={`/sneakers/${this.props.sneaker._id}?_method=PUT`} method="POST">
                Image: <input type="text" name="image" defaultValue={this.props.sneaker.image}/><br/>
                Name: <input type="text" name="name" defaultValue={this.props.sneaker.name}/><br/>
                Description: <input type="text" name="description" defaultValue={this.props.sneaker.description}/><br/>
                Rating: <input type="number" name="rating" defaultValue={this.props.sneaker.rating}/><br/>
                <br/>
                <input type="submit" value="Submit Changes"/>
            </form>
      </Default>
    )
  }
}
module.exports= Edit;