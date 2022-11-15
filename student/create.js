

function studentBuilder (name, age){
    return{
        name,
        age,
        sleep: ()=>{
            console.log('No sleep')
        }
    }
}

module.exports = {
    studentBuilder
}