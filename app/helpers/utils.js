/**
 * Created by esterlingaccime on 6/17/17.
 */
var axios = require("axios");

var helper = {
    reserver: function (data) {
        return axios.post("/appointment", data)
            .then(function (response) {
                return response;
            })
            .catch(function (err) {
                return err;
            });
    },
    
    getData: function () {
        return axios.get('/api')
            .then(function (response) {
                return response;
            })
            .catch(function (err) {
                return err;
            });
    },

    getAppointments:function (search) {
        return axios.get("/api/" + search)
            .then(function (res) {
                return res;
            })
            .catch(function (err) {
                return err;
            });
    },

    deleteData:function (id) {
        return axios.post("/api/" + id)
            .then(function (response) {
                return response;
            })
            .catch(function (err) {
                return err;
            });
    }
};

module.exports = helper;