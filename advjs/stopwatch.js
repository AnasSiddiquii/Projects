let count = 0
let sec   = 0
let min   = 0
let hr    = 0

let timer = false

function start(){
    timer = true
    stopwatch()
}

function stop(){
    timer = false
}

function reset(){
    timer = false
    
    count = 0
    sec   = 0
    min   = 0
    hr    = 0

    document.getElementById("count").innerHTML="00"
    document.getElementById("sec").innerHTML  ="00"
    document.getElementById("min").innerHTML  ="00"
    document.getElementById("hr").innerHTML   ="00"

}

function stopwatch(){
    if(timer==true){
        count++
        
        if(count==100){
            sec+=1
            count=0
        }
        
        if(sec==60){
            min+=1
            sec=0
        }
        
        if(min==60){
            hr+=1
            min=0
            sec=0
        }
 
        let countString = count
        let secString   = sec
        let minString   = min
        let hrString    = hr

        if(count<10){countString = "0" + countString}
        if(sec<10)  {secString   = "0" + secString}
        if(min<10)  {minString   = "0" + minString}
        if(hr<10)   {hrString    = "0" + hrString}

        document.getElementById("count").innerHTML = countString
        document.getElementById("sec").innerHTML   = secString
        document.getElementById("min").innerHTML   = minString
        document.getElementById("hr").innerHTML    = hrString
        
        setTimeout("stopwatch()",10)
    }
}