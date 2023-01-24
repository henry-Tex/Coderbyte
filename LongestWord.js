function LongestWord(sen) {
  let acumulator = '';
  let result = sen.replaceAll(/[^a-zA-Z 0-9]/gi,'').split(' ')
  result.map(res=>{
    if (res.length > acumulator.length) acumulator = res
  })
  return acumulator
}
console.log(LongestWord("batata fun&!! time "))
