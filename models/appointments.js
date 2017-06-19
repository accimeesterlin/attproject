/**
 * Created by esterlingaccime on 6/17/17.
 */
module.exports = function (sequelize, DataTypes) {
    var Reservation = sequelize.define("Reservation", {
        date:{
            type:DataTypes.DATE
        },

        time:{
            type:DataTypes.STRING
        },

        description:{
            type:DataTypes.STRING
        }
    });

    return Reservation;
};
