module.exports=function getStatistics(numbers){
    var stats= {average:0,min:0,max:0}; 
    if(numbers.length==0){
        return {average:NaN,min:NaN,max:NaN}; 
    }
    numbers.forEach(function(x){stats.average=stats.average+x;})
    stats.average=stats.average/numbers.length;
    stats.min=Math.min(...numbers);
    stats.max=Math.max(...numbers);
    
    return stats;
    //implement the computation of statistics here
}

