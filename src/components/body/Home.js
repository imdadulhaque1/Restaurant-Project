import React, {Component} from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state =>{
          console.log("Map state to props: ",state);
          return{
                    dishes: state.dishes
          }
}

class Home extends Component{
          componentDidMount(){
                    console.log("Home State: ",this.state);
                    console.log("Home props: ",this.props)
          }
          render() {
                    document.title ="Restaurant";
                    return(
                              <div>

                              </div>
                    );
          }
}

export default connect(mapStateToProps) (Home);