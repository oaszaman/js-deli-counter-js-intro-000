var katzDeliLine = [];
function takeANumber(katzDeliLine, name) {
katzDeliLine.push(name);
return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)


}

function nowServing(katzDeliLine) {
if (katzDeliLine.length === 0) {
  return "There is nobody waiting to be served!"
} else {
  return (`Currently serving ${katzDeliLine.shift()}.`);
}

}


function currentLine(x) {
    var line = []
    if (x.length === 0) {
      return "The line is currently empty."
    } else {
      for(var i = 0; i < x.length; i++) {
        line += (i + 1) + ". " + x[i] + ", "
      }
      line = line.slice(0, line.length-2)
      return "The line is currently: " + line
    }
}
