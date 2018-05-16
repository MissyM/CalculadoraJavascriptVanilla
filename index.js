var btn = document.getElementById('calBtn')
var result = 0

var calcular = () => {
  var res = document.getElementById('res')
  var op1 = parseInt(document.getElementById('op1').value)
  var sign = document.getElementById('sign').value
  var op2 = parseInt(document.getElementById('op2').value)
  switch (sign) {
    case '+':
      result = op1 + op2  
        break
    case '-':
       result = op1 - op2 
        break
    default:
      'Por favor ingrese un operador valido'
        break
  }
  res.value = 'resulado: ' + result
  return result
}
console.log(result)

btn.onclick = calcular