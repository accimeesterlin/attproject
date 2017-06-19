/**
 * Created by esterlingaccime on 6/17/17.
 */
var React = require("react");

var helper = require("../helpers/utils");

var moment = require("moment");

class Table extends React.Component{
    constructor(){
        super();

        this.deleteData = this.deleteData.bind(this);
    }

    deleteData(val){
        //event.preventDefault();

        var id = val.id;

        helper.deleteData(id)
            .then(function (response) {
                console.log("Data has been deleted");
                console.log(response);

                this.props.setParent(response.data);
            }.bind(this))
            .catch(function (err) {
                console.log(err);
            });

        //console.log(this);

    }


    render(){
        return(

            <div className="table">

                {
                    this.props.status ? <h2> No result found!!</h2>:
                        <h2>{this.props.results.length} appointment (s)</h2>

                }

                        <table className="table table-striped">
                            <thead>
                            <tr>

                                <th>ID</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Description</th>
                                <th>Deletion</th>
                            </tr>
                            </thead>

                            <tbody>

                            {this.props.results.map(({date, time, description, id}) => (
                                <tr key={ id }>
                                    <td>{ id }</td>
                                    <td>{ moment(date).format("MM-DD-YYYY") }</td>
                                    <td>{ time }</td>
                                    <td>{ description }</td>
                                    <td><button className="btn btn-danger" onClick={this.deleteData.bind(null, {id})} >Delete</button></td>

                                </tr>
                            ))}

                            </tbody>
                        </table>



            </div>

        );
    }
};


module.exports = Table;