func numOfStrings(patterns []string, word string) int {
    count := 0
    for i:=0; i < len(patterns); i++ {
        if strings.Contains(word, patterns[i]){
            count+=1
        }
    } 
    return count
}