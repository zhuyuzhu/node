const schedule = require('node-schedule');
const moment = require("moment");

const job = schedule.scheduleJob('* 42 * * * *', function(){
  console.log('Today is recognized by Rebecca Black!');
  console.log(new Date())
  console.log(moment().format("YYYYMMDDHH"))
});
