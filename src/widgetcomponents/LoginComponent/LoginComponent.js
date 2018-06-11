import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchUserList } from '../../actions/sampleAction';

const urlconstant = require('../../constants/urlcontants');

class LoginComponent extends Component {
  componentDidMount() {
      console.log("in componentdidmount");
      this.props.fetchUserList(urlconstant.userurl);
  }

    render() {
        
        console.log("in render method of login component");
        console.dir(this.props.userList.userList);
        if (this.props.userList.userList === undefined) {
            console.log("in undefined");
            return (
                <div>
                    <h>test</h>
                </div>
            );
        } else {
            console.log("in defined");
        return (
         <div>
             <h>This is the login page</h>
             {this.props.userList.userList.map((items) => {
                 return (
                     <table>
                         <tr>
                             <td>{items.fullName}</td>
                    </tr>
                    </table>
                 )
             } )}

         </div>   
        );
    }
    }
}

function mapStatetoProps(state) {
    console.log('in mapStatetoProps');
    console.dir(state);
    return (
    {userList : state.users}
    );
}

function maoDispatchtoProps(dispatch) {
    console.log('in maoDispatchtoProps');
    return(
        {fetchUserList: (url) => {dispatch(fetchUserList(url))}
    }
    );
}
export default connect(mapStatetoProps, maoDispatchtoProps)(LoginComponent);