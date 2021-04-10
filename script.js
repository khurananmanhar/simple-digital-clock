let getTime = () =>{
    let date = new Date
    let hours = date.getHours()
    let mins = date.getMinutes()
    let secs = date.getSeconds()
    let period = 'AM'
    
    if(hours == 0){
        hours = 12
    }

    if(hours > 12){
        hours = hours - 12
        period = 'PM'
    }
    hours = (hours < 10) ? "0" + hours : hours
    mins = (mins < 10) ? "0" + mins : mins
    secs = (secs < 10) ? "0" + secs : secs
const time = `${hours}:${mins}:${secs} ${period}`
document.getElementById("clock").innerText = time
document.getElementById("clock").textContent = time
setTimeout(getTime, 1000)
}
getTime()

