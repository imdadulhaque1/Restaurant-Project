import React, {Component} from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state =>{
          // console.log("Map state to props: ",state);
          return{
                    dishes: state.dishes,
                    sample: state.sample
          }
}

class Home extends Component{
          componentDidMount(){
                    console.log("Home props: ",this.props)
                    this.props.dispatch({
                              type: 'TEST',
                              str: "Restaurant"
                    })
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