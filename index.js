var numInLine = 0

function takeANumber(currLine) {
  numInLine ++
  currLine.push(numInLine)
  
  return (`Welcome, you are number ${numInLine} in line.`)
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!'
  }
  var name = katzDeliLine[0]
  katzDeliLine.shift()
  return `Currently serving ${name}.`
} 
function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var string = `The line is currently: ` 
    for (var i = 0; i < katzDeliLine.length; i++) {
      string += `${i + 1}. ${katzDeliLine[i]}`
      if (i + 1 !== katzDeliLine.length) {
        string +=", "
      } 
  
    } 
    return string
  } else {
    return 'The line is currently empty.'
  }
}