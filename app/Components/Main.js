/**
 * Created by esterlingaccime on 6/17/17.
 */
var React = require("react");


var Search = require("./Search");
var Table = require("./Table");

var helper = require("../helpers/utils");

class Main extends React.Component{
    constructor(){
        super();
        this.state = {
            data:[],
            noresult: false
        };

        this.setParent = this.setParent.bind(this);
        this.found = this.found.bind(this);

    }

    setParent(response){
        this.setState({data: response});
        //console.log(response);
    }

    found(data){
        this.setState({noresult: true});
    }


    componentDidMount(){
        helper.getData()
            .then(function (data) {
                this.setState({data: data.data});
                //console.log(this.state.data);
            }.bind(this))

            .catch(function (err) {
                console.log(err);
            }.bind(this));
    }

    render(){
        return(
            <div className="container">
               <Search setParent = {this.setParent} found = {this.found} results = {this.state.data}/>
                <Table results = {this.state.data} setParent = {this.setParent} status = {this.state.noresult}/>
            </div>
        );
    }

};


module.exports = Main;