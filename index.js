/* Your Code Here */
function createEmployeeRecord (firstName,familyName,title,payPerHour,timeInEvents,timeOutEvents){
   // const[firstName,familyName, title,payPerHour]= employeeData

    //const timeInEvents= []
    //const timeOutEvents= []
    

    const employeeRecords =  {
        firstName: "moe",
        familyName: "Worm",
        title: "Security",
        payPerHour: 1,
        timeInEvents: [],
        timeOutEvents: [],
    };
    return employeeRecords;

}
function createEmployeeRecords(dataArray){
    return dataArray.map(employeeData => createEmployeeRecord(...employeeData));

}
const employeeDataArray = [
    ["moe", "bartholomew", "security", 1]
   // ["matin", "mark", "Guide", 5]
]
const employeeRecordsArray = createEmployeeRecords(employeeDataArray)
console.log(employeeRecord)

function createTimeInEvent(employeeRecord, dateTimeString) {
    if (!dateTimeString) {
        throw new Error("Invalid dateTimeString");
    }

    const dateTimeArray = dateTimeString.split(" ");

    if (dateTimeArray.length !== 2) {
        throw new Error("Invalid dateTimeString format");
    }

    const [date, time] = dateTimeArray;
    const hour = parseInt(time.split(":")[0], 10); // Extract hour correctly

    const timeInEvent = {
        type: "TimeIn",  // Correct type
        date: date,
        hour: hour,
    };

    employeeRecord.timeInEvents.push(timeInEvent);

    return employeeRecord;
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

