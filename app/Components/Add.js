/**
 * Created by esterlingaccime on 6/17/17.
 */
var React = require("react");

var helper = require("../helpers/utils");

var moment = require("moment");

class Add extends React.Component{
    constructor(){
        super();

        this.state = {
            showresult : false
        };

        this.getValue = this.getValue.bind(this);
    }

    getValue(event){

        var data = {};

        event.preventDefault();

        //console.log(this.refs);

        for(var field in this.refs){

            data[this.refs[field].id] = this.refs[field].value;

            this.refs[field].value = '';
        }

        data.date = moment(data.date).format("MM-DD-YYYY");

        console.log(date);
        helper.reserver(data)
            .then(function (res) {
                console.log(res.data);
                this.props.searchParent(res.data);
            }.bind(this))
            .catch(function (err) {

                //this.props.searchParent(err);
            }.bind(this));


        helper.getData()
            .then(function (response) {
                //console.log(response.data);
                this.props.searchParent(response.data);
            }.bind(this))
            .catch(function (err) {
                //console.log(err);
                //this.props.searchParent(err);
            }.bind(this));

    }

    render(){
        return(
            <div className="add">
                <form className="form-inline column">
                    <div className="form-group">
                        <label htmlFor="exampleInputName2">Date</label>
                        <input type="date" className="form-control" id="date" placeholder="Date..." ref="date" />

                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputName2">Time</label>
                        <input type="time" className="form-control" id="time" placeholder="Time..." ref="time" />

                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputName2">DESC</label>
                        <input type="text" className="form-control" id="description" placeholder="Description..." ref="description" />

                    </div>

                    <button type="submit" className="btn btn-default" onClick={this.getValue}>Add an appointment</button>
                </form>
            </div>
        );
    }
};


module.exports = Add;