/**
 * Created by esterlingaccime on 6/17/17.
 */
var React = require("react");

var Add = require("./Add");

var helper = require("../helpers/utils");

class Search extends React.Component{
    constructor(){
        super();

        this.state = {
            showresult: false,
            data: []
        };

        this.getValue = this.getValue.bind(this);
        this.showResult = this.showResult.bind(this);
        this.searchParent = this.searchParent.bind(this);

    }

    getValue(event){
        event.preventDefault();

        var data;

        for(var field in this.refs){
            data = this.refs[field].value;

            console.log(data);
            this.refs[field].value = '';
        }

        helper.getAppointments(data)
            .then(function (res) {
                this.props.setParent(res.data);

                console.log(res.data.length);

                if(res.data.length <= 0){
                    this.props.found(true);
                    console.log(this.state.data);
                    this.props.setParent(this.state.data);
                }
            }.bind(this))
            .catch(function (err) {
                console.log(err);

            }.bind(this));



    }

    showResult(){
        if(this.state.showresult){
            this.setState( {showresult: false});
        } else{
            this.setState({ showresult: true });
        }
    }

    componentDidMount(){
        //this.setState({data: this.props.results});
        console.log(this.props.results);
    }

    searchParent(data){
        this.props.setParent(data);
        this.setState({data: data});
    }


    render(){
        return(
            <div className="search">

                <div className="add-container">
                    <button className="btn btn-primary new" onClick={this.showResult} >{this.state.showresult ? "CLOSE"  : "NEW" }</button>

                    {this.state.showresult ? <button className="btn btn-default cancel" onClick={this.showResult}> CANCEL </button> : null }

                    {this.state.showresult ? <Add searchParent = {this.searchParent} /> : null}
                </div>


                <form className="form-inline form-search">
                    <div className="form-group">
                        <label htmlFor="exampleInputName2"></label>
                        <input type="text" className="form-control" id="search" placeholder="search by description..." ref="search" />

                    </div>

                    <button type="submit" className="btn btn-default" onClick={this.getValue} >Search</button>
                </form>
            </div>
        );
    }
};


module.exports = Search;
