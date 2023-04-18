// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, nameValue){
    function compareName(string){
        if (string.toLowerCase() === nameValue.toLowerCase())
            return true
        else
            return false
    
    }
    
       return drivers.filter(compareName)
        
}

function fuzzyMatch(drivers, start) {
    function compareName(string){
        return string.startsWith(start)
    }
    return drivers.filter(compareName)

}

function matchName(drivers, string){
    
}

