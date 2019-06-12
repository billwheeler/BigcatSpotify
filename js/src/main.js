"use strict"

var axios = require('axios')

global.Debug = require("./utils/debug.js");

module.exports = {
    run: () => {
        axios.get('package.json')
            .then(function (response) {
                Debug.log("big cat make ajax", response)
            })
            .catch(function (error) {
                Debug.log("uh oh, bad big cat", error);
            })
    }
}