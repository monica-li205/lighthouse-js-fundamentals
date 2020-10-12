const whichSchool  = function (age) {

  if (age < 13) {
    return console.log('Elementary School');
  } else if (age >=13 && age <= 18) {
    return console.log('Secondary School');
  } else {
    return console.log('Lighthouse Labs');
  }
}
console.log(whichSchool(22)); // console will print 'Lighthouse Labs'