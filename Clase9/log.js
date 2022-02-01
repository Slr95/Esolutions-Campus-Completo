/*var log = {
    info: function(info) {
        console.log('Info: ' + info)
    },
    warning: function (warning) {
        console.log('Warning: ' + info)
    },
    error: function (error) {
        console.log('Error: ' + info)
    }
};

module.exports = log;
*/

module.exports = function (firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
    this.fullName = function() {
        return this.firstName + ' ' + this.lastName
    }
}