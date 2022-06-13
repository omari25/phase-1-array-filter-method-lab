// Code your solution here
const tutorials = [
    'what does the this keyword mean?', 
    'What is the Contutorialuctor OO pattern?',
    'implementing Blockchain Web API',
    'The Test Driven Development Workflow',
    'What is NaN and how Can we Check for it',
    'What is the difference between stopPropagation and preventDefault?',
    'Immutable State and Pure Functions',
    'what is the difference between == and ===?',
    'what is the difference between event capturing and bubbling?',
    'what is JSONP?'
  ];


  function findMatching(drivers, name) {
    const driversArr = drivers.filter(
        (match) => match.toLowerCase() === name.toLowerCase());
    return driversArr;
}

function fuzzyMatch(drivers, name) {
    const driversArr = drivers.filter(
        (match) => match.toLowerCase().indexOf(name.toLowerCase()) === 0
    )
    return driversArr;
}

function matchName(driver, name) {
    const driverArr = driver.filter(
        (match) => match.name === name
    )
    return driverArr;

}