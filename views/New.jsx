const React = require('react');

class New extends React.Component {
    render(){
        return(
        <div>
            <h1>This is the New Page</h1>
            <nav>
            <a href='/sneakers'>Back To Sneakers Index Page</a>
            </nav>
            <form action='/sneakers' method='POST'>
                Picture: <input name='image' type='img'/><br/>
               Name Here: <input name='name' type='text'/><br/>
               Description: <input name='description' type='text'/><br/>
               Price:  <input name='price' type='number'/><br/>
                <input type='submit' value='Create a Sneaker'/>
            </form>
        </div>
        )
    }
}

module.exports = New;