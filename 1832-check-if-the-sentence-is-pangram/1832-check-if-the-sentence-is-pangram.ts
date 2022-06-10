function checkIfPangram(sentence: string): boolean {
    let isPangram = true;
    for(let i=0; i<26; i++){
        if(!sentence.includes(String.fromCharCode(97 + i))){
            isPangram = false;
            break;
        }          
    }
    return isPangram;
};