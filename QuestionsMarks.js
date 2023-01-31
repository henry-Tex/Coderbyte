function QuestionsMarks(str) { 

    let regex = (/[a-zA-Z]/gi) 
    let result = str.replaceAll(regex,'').replaceAll('???','+').split('');
    let soma = null;
    for (let index = 0; index < result.length; index++) {
        if (result[index]==='+') soma = Number(result[index-1])+Number(result[index+1])
        if (soma === 10) return true
    }
    if (soma!=10) return false 

}
   
// keep this function call here 
console.log(QuestionsMarks(readline()));
