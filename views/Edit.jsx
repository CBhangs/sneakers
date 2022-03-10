const React = require('react');
const Default = require('../layout/Default.jsx')

class Edit extends React.Component{
  render() {
    return (
      <Default title="Edit Page">      
             <form action={`/fruits/${this.props.fruit._id}?_method=PUT`} method="POST">
                
                Name: <input type="text" name="name" defaultValue={this.props.fruit.name}/><br/>
                <br/>
                <input type="submit" value="Submit Changes"/>
            </form>
      </Default>
    )
  }
}
module.exports= Edit;