import React, {Component} from 'react';

class Comment extends Component {

    constructor(props) {
        super(props);
          
        this.state = {
           editing: false
        }
     }

edit() {
    this.setState({editing: true});
}

remove() {
    alert('removing');
}

save() {
    this.setState({editing: false});
}

rendernormal() {
    return (
        <div>
                <h3>Hi my name is Shivam</h3>
                <button onClick = {this.edit}>Edit</button>
                <button onClick = {this.remove}>Remove</button>
            </div>
    )
}

renderform() {
    return (
        <div>
                <textarea ref="newtext" defaultValue="Hi my name is Shivam"></textarea>
                <button onClick = {this.save}>Save</button>
            </div>
    )
}
    render() {
if (this.state.editing) {
    return this.renderform();

} else {
    return this.rendernormal();
}
    }
}
export default Comment;