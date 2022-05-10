module.exports=function getStatistics(numbers){
    var stats= {average:0,min:0,max:0}; 
    if(numbers.length==0){
        return {average:NaN,min:NaN,max:NaN}; 
    }
    numbers.forEach(function(x){stats.average=stats.average+x;})
    stats.average=stats.average/numbers.length;
    stats.min=Math.min(...numbers);
    stats.max=Math.max(...numbers);
     class EmailAlert{
     emailSent=false;
     constructor(){
     }
 }
 class LEDAlert{
     ledGlows=false;
     constructor(){
     }
 }
 class StatsAlerter{
     maxThreshold=0;
     alerters=[];
     constructor(maxThreshold,alerters){
        this.maxThreshold=maxThreshold;
        this.alerters=alerters;
     }
     checkAndAlert(nums){
         var maxi= Math.max(...nums);
         if(this.maxThreshold>maxi){
            this.alerters[0].emailSent=true;
            this.alerters[1].ledGlows=true;
         }
     }
 }
    return stats;
    //implement the computation of statistics here
}

