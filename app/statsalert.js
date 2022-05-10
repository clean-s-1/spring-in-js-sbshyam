module.exports= class StatsAlerter{
     maxThreshold=0;
     alerters=[];
     constructor(maxThreshold,alerters){
        this.maxThreshold=maxThreshold;
        this.alerters=alerters;
     }
     checkAndAlert(nums){
         var maxi= Math.max(...nums);
         if(this.maxThreshold<maxi){
            this.alerters[0].emailSent=true;
            this.alerters[1].ledGlows=true;
         }
     }
 }
