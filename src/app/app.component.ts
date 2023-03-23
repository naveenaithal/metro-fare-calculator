import { Component } from '@angular/core';
import {mockData } from './mockData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
travelList:any=[]

  userInput: any = {}
  isAns: Boolean = false
  
   dailyTrip:any=[]
   weeklyTrip:any=[]

 days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

 toMilliseconds = (hrs:number,min:number) => (hrs*60*60+min*60)*1000;
getDayByDate = (day: number) => this.days[new Date(day).getDay()];
getTimeByDate = (day: number) => new Date(day).toLocaleTimeString();



  clearDefaultValue() {
    this.travelList = []
    this.weeklyTrip=[]
    this.dailyTrip = []
    this.isAns=false
}
  addMockData() {
  this.travelList=[...mockData]
}
  
  addTravelDetails() {
    let {from,to,dateTime}=this.userInput
    if(!from || !to || !dateTime) return


    this.travelList=[...this.travelList,{from,to,dateTime}]
    this.userInput = {}
    
}

  getFareResult() {
    // console.log(this.travelList)
    this.isAns=true




let data:any = this.travelList

// 0 and 6 are weekneds
const weekDaysMorningPeakTimeStart = 25200000;
const weekDaysMorningPeakTimeEnd = 37800000;
const weekDaysEveningPeakTimeStart = 61200000;
const weekDaysEveningPeakTimeEnd = 72000000;

const weekEndMorningPeakTimeStart = 32400000;
const weekEndMorningPeakTimeEnd = 39600000;
const weekEndEveningPeakTimeStart = 64800000;
const weekEndEveningPeakTimeEnd = 79200000;
// console.log(toMilliseconds(20,01))

function isAllZone1(data:any) {
  return data.every((trip:any) => {
    let { from, to } = trip;
    return from === "zone1" && to === "zone1";
  });
}
function isSomeZone2(data:any) {
  return data.some((trip:any) => {
    let { from, to } = trip;
    return from === "zone2" && to === "zone2";
  });
}
function isInterZone(data:any) {
  return data.some((trip:any) => {
    let { from, to } = trip;
    return (
      (from === "zone1" && to === "zone2") ||
      (from === "zone2" && to === "zone1")
    );
  });
}

function weeklyIsAllZone1(data:any) {
  return data.every((trip:any) => {
    let { from, to, zones } = trip;
    // console.log(trip)
    // console.log(zones)
    return (from === "zone1" && to === "zone1") || zones === "zone1-zone1";
  });
}
function weeklyIsSomeZone2(data:any) {
  return data.some((trip:any) => {
    let { from, to, zones } = trip;
    return (from === "zone2" && to === "zone2") || zones === "zone2-zone2";
  });
}
function weeklyIsInterZone(data:any) {
  return data.some((trip:any) => {
    let { from, to, zones } = trip;
    return (
      (from === "zone1" && to === "zone2") ||
      (from === "zone2" && to === "zone1") ||
      zones === "zone2-zone1" ||
      zones === "zone1-zone2"
    );
  });
}

let rawDataFareCalculator = data.reduce((arr:any, trip:any, index:number) => {
  let { from, to, dateTime } = trip;
  let time = dateTime.split("T")[1];
  let [hr, min] = time.split(":");
  let TinMs = this.toMilliseconds(hr, min);
  let dayNumber = new Date(dateTime).getDay();

  // weekend Calculations
  if (dayNumber == 0 || dayNumber === 6) {
    // console.log("weekend",index)
    if (
      TinMs >= weekEndMorningPeakTimeStart &&
      TinMs <= weekEndMorningPeakTimeEnd
    ) {
      if (from === "zone1" && to === "zone2") {
        let newTrip = { ...trip };
        let calculatedFare = 35;
    let    weekType = "weekEnd";
       let info = "Peak Hours Single Fare";
        newTrip = { ...newTrip, calculatedFare, weekType, info };
        trip = newTrip;
        //   console.log(" fare is 35")
      } else if (from === "zone2" && to === "zone1") {
        let newTrip = { ...trip };
        let calculatedFare = 35;
        let weekType = "weekEnd";
     let   info = "Peak Hours Single Fare";
        newTrip = { ...newTrip, calculatedFare, weekType, info };
        trip = newTrip;
        //   console.log(" fare is 35")
      } else if (from === "zone1" && to === "zone1") {
        let newTrip = { ...trip };
        let calculatedFare = 30;
     let   weekType = "weekEnd";
    let    info = "Peak Hours Single Fare";
        newTrip = { ...newTrip, calculatedFare, weekType, info };
        trip = newTrip;
        //   console.log(" fare is 30")
      } else if (from === "zone2" && to === "zone2") {
        let newTrip = { ...trip };
        let calculatedFare = 25
       let   weekType = "weekEnd";
     let   info = "Peak Hours Single Fare";
        newTrip = { ...newTrip, calculatedFare, weekType, info };
        trip = newTrip;
        //   console.log(" fare is 25")
      }
    } else if (
      TinMs >= weekEndEveningPeakTimeStart &&
      TinMs <= weekEndEveningPeakTimeEnd
    ) {
      //   console.log("in Peak Evng",trip,index)
      if (from === "zone1" && to === "zone2") {
        let newTrip = { ...trip };
        let calculatedFare = 35;
   let     weekType = "weekEnd";
     let   info = "Peak Hours Single Fare";
        newTrip = { ...newTrip, calculatedFare, weekType, info };
        trip = newTrip;
        //   console.log(" fare is 35")
      } else if (from === "zone2" && to === "zone1") {
        let calculatedFare = 35;
        let newTrip = { ...trip };
     let   weekType = "weekEnd";
     let   info = "Peak Hours Single Fare";
        newTrip = { ...newTrip, calculatedFare, weekType, info };
        trip = newTrip;
        //   console.log(" fare is 35")
      } else if (from === "zone1" && to === "zone1") {
        let calculatedFare = 30;
        let newTrip = { ...trip };
       let weekType = "weekEnd";
      let  info = "Peak Hours Single Fare";
        newTrip = { ...newTrip, calculatedFare, weekType, info };
        trip = newTrip;
        //   console.log(" fare is 30")
      } else if (from === "zone2" && to === "zone2") {
        let calculatedFare = 25;
        let newTrip = { ...trip };
      let  weekType = "weekEnd";
     let   info = "Peak Hours Single Fare";
        newTrip = { ...newTrip, calculatedFare, weekType, info };
        trip = newTrip;
        //   console.log(" fare is 25")
      }
    } else {
      // off peak hrs
      if (from === "zone1" && to === "zone2") {
        let calculatedFare = 30;
        let newTrip = { ...trip };
     let   weekType = "weekEnd";
       let info = "Off Peak Hours Single Fare";
        newTrip = { ...newTrip, calculatedFare, weekType, info };
        trip = newTrip;
        //  console.log(" weekend off Peak fare is 30",trip,index)
      } else if (from === "zone2" && to === "zone1") {
        let calculatedFare = 30;
        let newTrip = { ...trip };
    let    weekType = "weekEnd";
     let   info = "Off Peak Hours Single Fare";
        newTrip = { ...newTrip, calculatedFare, weekType, info };
        trip = newTrip;
        //  console.log("weekend off Peak  fare is 30",trip,index)
      } else if (from === "zone1" && to === "zone1") {
        let calculatedFare = 25;
        let newTrip = { ...trip };
     let   weekType = "weekEnd";
    let    info = "Off Peak Hours Single Fare";
        newTrip = { ...newTrip, calculatedFare, weekType, info };
        trip = newTrip;
        //  console.log("weekend off Peak  fare is 25",trip,index)
      } else if (from === "zone2" && to === "zone2") {
        let calculatedFare = 20;
        let newTrip = { ...trip };
      let  weekType = "weekEnd";
     let   info = "Off Peak Hours Single Fare";
        newTrip = { ...newTrip, calculatedFare, weekType, info };
        trip = newTrip;
        //  console.log(" weekend off Peak  fare is 20",trip,index)
      }
    }
  }

  // week day,,,,,,,,,,,,,,,,,,,,,,,,,
  else if (
    TinMs >= weekDaysMorningPeakTimeStart &&
    TinMs <= weekDaysMorningPeakTimeEnd
  ) {
    //   console.log("in Peak morning",trip,index)

    if (from === "zone1" && to === "zone2") {
      let newTrip = { ...trip };
      let calculatedFare = 35;
    let  weekType = "weekDay";
    let  info = "Peak Hours Single Fare";
      newTrip = { ...newTrip, calculatedFare, weekType, info };
      trip = newTrip;
      //   console.log(" fare is 35")
    } else if (from === "zone2" && to === "zone1") {
      let newTrip = { ...trip };
      let calculatedFare = 35;
    let  weekType = "weekDay";
    let  info = "Peak Hours Single Fare";
      newTrip = { ...newTrip, calculatedFare, weekType, info };
      trip = newTrip;
      //   console.log(" fare is 35")
    } else if (from === "zone1" && to === "zone1") {
      let newTrip = { ...trip };
      let calculatedFare = 30;
  let    weekType = "weekDay";
    let  info = "Peak Hours Single Fare";
      newTrip = { ...newTrip, calculatedFare, weekType, info };
      trip = newTrip;
      //   console.log(" fare is 30")
    } else if (from === "zone2" && to === "zone2") {
      let newTrip = { ...trip };
      let calculatedFare = 25
     let   weekType = "weekDay";
   let   info = "Peak Hours Single Fare";
      newTrip = { ...newTrip, calculatedFare, weekType, info };
      trip = newTrip;
      //   console.log(" fare is 25")
    }
  } else if (
    TinMs >= weekDaysEveningPeakTimeStart &&
    TinMs <= weekDaysEveningPeakTimeEnd
  ) {
    //   console.log("in Peak Evng",trip,index)
    if (from === "zone1" && to === "zone2") {
      let newTrip = { ...trip };
      let calculatedFare = 35;
    let  weekType = "weekDay";
    let  info = "Peak Hours Single Fare";
      newTrip = { ...newTrip, calculatedFare, weekType, info };
      trip = newTrip;
      //   console.log(" fare is 35")
    } else if (from === "zone2" && to === "zone1") {
      let calculatedFare = 35;
      let newTrip = { ...trip };
   let   weekType = "weekDay";
   let   info = "Peak Hours Single Fare";
      newTrip = { ...newTrip, calculatedFare, weekType, info };
      trip = newTrip;
      //   console.log(" fare is 35")
    } else if (from === "zone1" && to === "zone1") {
      let calculatedFare = 30;
      let newTrip = { ...trip };
   let   weekType = "weekDay";
   let   info = "Peak Hours Single Fare";
      newTrip = { ...newTrip, calculatedFare, weekType, info };
      trip = newTrip;
      //   console.log(" fare is 30")
    } else if (from === "zone2" && to === "zone2") {
      let calculatedFare = 25;
      let newTrip = { ...trip };
   let   weekType = "weekDay";
   let   info = "Peak Hours Single Fare";
      newTrip = { ...newTrip, calculatedFare, weekType, info };
      trip = newTrip;
      //   console.log(" fare is 25")
    }
  } else {
    // off peak hrs
    if (from === "zone1" && to === "zone2") {
      let calculatedFare = 30;
      let newTrip = { ...trip };
 let     weekType = "weekDay";
   let   info = "Off Peak Hours Single Fare";
      newTrip = { ...newTrip, calculatedFare, weekType, info };
      trip = newTrip;
      //   console.log(" off Peak fare is 30",trip,index)
    } else if (from === "zone2" && to === "zone1") {
      let calculatedFare = 30;
      let newTrip = { ...trip };
  let    weekType = "weekDay";
    let  info = "Off Peak Hours Single Fare";
      newTrip = { ...newTrip, calculatedFare, weekType, info };
      trip = newTrip;
      //   console.log("off Peak  fare is 30",trip,index)
    } else if (from === "zone1" && to === "zone1") {
      let calculatedFare = 25;
      let newTrip = { ...trip };
   let   weekType = "weekDay";
   let   info = "Off Peak Hours Single Fare";
      newTrip = { ...newTrip, calculatedFare, weekType, info };
      trip = newTrip;
      //   console.log("off Peak  fare is 25",trip,index)
    } else if (from === "zone2" && to === "zone2") {
      let calculatedFare = 20;
      let newTrip = { ...trip };
 let     weekType = "weekDay";
   let   info = "Off Peak Hours Single Fare";
      newTrip = { ...newTrip, calculatedFare, weekType, info };
      trip = newTrip;
      //   console.log(" off Peak  fare is 20",trip,index)
    }
  }

  arr.push(trip);

  return arr;
}, []);

// caclulate daily spend

// console.log(result)

let weekToDayAggregation = rawDataFareCalculator.reduce((obj:any, trip:any) => {
  let { from, to, dateTime, calculatedFare,info } = trip;
  let time = dateTime.split("T")[1];
  let date = dateTime.split("T")[0];
  let [hr, min] = time.split(":");

  if (!obj[date]) {
    obj[date] = [{ from, to, dateTime, calculatedFare, info }];
  } else {
    obj[date] = [...obj[date], { from, to, dateTime, calculatedFare, info }];
  }

  return obj;
}, {});


let dailySpendArr:any = [];
let weeklyCapObject:any = Object.values(weekToDayAggregation).reduce((obj:any, dayTrip:any) => {
  // console.log(dayTrip)


  // daily spend start
  let dailySpend = dayTrip.reduce((singleDayIndividualTrip:any, trip:any, i:number) => {
    let { from, to, dateTime, calculatedFare, dailyCapReached } = trip;
    //  console.log(dailyCapReached)
    let time = dateTime.split("T")[1];
    let date = dateTime.split("T")[0];
    let [hr, min] = time.split(":");
    // let TinMs = toMilliseconds(hr, min);
    if (isInterZone(dayTrip)) {
       let dailyCapLimit=120
      let totalFare;
      if (i === 0) {
        totalFare = calculatedFare;
      } else {
        totalFare = calculatedFare + singleDayIndividualTrip[i - 1].totalFare;
      }

      if (totalFare >= 120) {
        if (totalFare > 120) {
          let payalbeAmount = 120 - singleDayIndividualTrip[i - 1].totalFare;

          if (payalbeAmount < 0) {
            payalbeAmount = 0;
          }
          let info = `Daily Cap of 120  reached for zone 1-2 charged ${payalbeAmount} instead of  ${calculatedFare}`;

          let newTrip = {
            ...trip,
            totalFare,
            calculatedFare: payalbeAmount,
            info,
            saved: calculatedFare - payalbeAmount,
            dailyCapReached: true,
            dailyCapLimit
          };
          singleDayIndividualTrip.push(newTrip);
        } else {
          let info = `Daily Cap  120  reached for zone 1-2 `;
          let newTrip = {
            ...trip,
            totalFare,
            calculatedFare: 0,
            info,
            saved: calculatedFare,
            dailyCapReached: true,
            dailyCapLimit
          };
          singleDayIndividualTrip.push(newTrip);
        }
      } else {
        let newTrip = { ...trip, totalFare };
        singleDayIndividualTrip.push(newTrip);
      }
    } else if (isSomeZone2(dayTrip)) {
             let dailyCapLimit=80

      let totalFare;
      if (i === 0) {
        totalFare = calculatedFare;
      } else {
        totalFare = calculatedFare + singleDayIndividualTrip[i - 1].totalFare;
      }

      if (totalFare >= 80) {
        if (totalFare > 80) {
          let payalbeAmount = 80 - singleDayIndividualTrip[i - 1].totalFare;

          if (payalbeAmount < 0) {
            payalbeAmount = 0;
          }
          let info = `Daily Cap of 80 reached for zone 2-2 charged ${payalbeAmount} instead of  ${calculatedFare}`;
          let newTrip = {
            ...trip,
            totalFare,
            calculatedFare: payalbeAmount,
            info,
            saved: calculatedFare - payalbeAmount,
            dailyCapReached: true,
            dailyCapLimit
          };
          singleDayIndividualTrip.push(newTrip);
        } else {
          let info = `Daily Cap of 80  reached for zone 2-2 `;
          let newTrip = {
            ...trip,
            totalFare,
            calculatedFare: 0,
            info,
            saved: calculatedFare,
            dailyCapReached: true,
            dailyCapLimit
          };
          singleDayIndividualTrip.push(newTrip);
        }
      } else {
        let newTrip = { ...trip, totalFare };
        singleDayIndividualTrip.push(newTrip);
      }
    } else if (isAllZone1(dayTrip)) {
      let dailyCapLimit=100
      let totalFare;
      // console.log("inside all 1")
      if (i === 0) {
        totalFare = calculatedFare;
      } else {
        totalFare = calculatedFare + singleDayIndividualTrip[i - 1].totalFare;
      }

      if (totalFare >= 100) {
        if (totalFare > 100) {
          let payalbeAmount = 100 - singleDayIndividualTrip[i - 1].totalFare;

          if (payalbeAmount < 0) {
            payalbeAmount = 0;
          }
          let info = `Daily Cap of 100 reached for zone 1-1 charged ${payalbeAmount} instead of  ${calculatedFare}`;

          let newTrip = {
            ...trip,
            totalFare,
            calculatedFare: payalbeAmount,
            info,
            saved: calculatedFare - payalbeAmount,
            dailyCapReached: true,
            dailyCapLimit
          };
          singleDayIndividualTrip.push(newTrip);
        } else {
          let info = `Daily Cap  100  reached for zone 1-1 `;
          let newTrip = {
            ...trip,
            totalFare,
            calculatedFare: 0,
            info,
            saved: calculatedFare,
              dailyCapReached: true,
            dailyCapLimit
          };
          singleDayIndividualTrip.push(newTrip);
        }
      } else {
        let newTrip = { ...trip, totalFare };
        singleDayIndividualTrip.push(newTrip);
      }
    }
    return singleDayIndividualTrip;
  }, []);

  dailySpendArr.push(dailySpend);

  // daily spend end


    
    

  //singleDayResult
  let singleTripResult = dayTrip.reduce((singleTripObj:any, singleTripRes:any) => {

    if (weeklyIsInterZone(dayTrip)) {
      let { from, to, dateTime, calculatedFare } = singleTripRes;
      let time = dateTime.split("T")[1];
      let date = dateTime.split("T")[0];
      let [hr, min] = time.split(":");

      if (!singleTripObj[date]) {
        singleTripObj[date] = {
          calculatedFare,
          zones: `${from}-${to}`,
          dailyCapLimit: 120,
          dateTime,
        };
      } else {
        singleTripObj[date] = {
          ...singleTripObj[date],
          calculatedFare: singleTripObj[date].calculatedFare + calculatedFare,
        };
      }
    }
   else if (weeklyIsSomeZone2(dayTrip)) {
      let { from, to, dateTime, calculatedFare } = singleTripRes;
      let time = dateTime.split("T")[1];
      let date = dateTime.split("T")[0];
      let [hr, min] = time.split(":");
      if (!singleTripObj[date]) {
        singleTripObj[date] = {
          calculatedFare,
          zones: `${from}-${to}`,
          dailyCapLimit: 80,
          dateTime,
        };
      } else {
        singleTripObj[date] = {
          ...singleTripObj[date],
          calculatedFare: singleTripObj[date].calculatedFare + calculatedFare,
        };
      }
    }
 else   if (weeklyIsAllZone1(dayTrip)) {
      let { from, to, dateTime, calculatedFare } = singleTripRes;
      let time = dateTime.split("T")[1];
      let date = dateTime.split("T")[0];
      let [hr, min] = time.split(":");
      if (!singleTripObj[date]) {
        singleTripObj[date] = {
          calculatedFare,
          zones: `${from}-${to}`,
          dailyCapLimit: 100,
          dateTime,
        };
      } else {
        singleTripObj[date] = {
          ...singleTripObj[date],
          calculatedFare: singleTripObj[date].calculatedFare + calculatedFare,
        };
      }
    }
    return singleTripObj;
  }, {});



  // let singleTrip={...singleTripResult}
  obj.push(singleTripResult);
  if (dailySpendArr.length === Object.values(weekToDayAggregation).length) {
    // final vlaue day wise
    // console.log("daily aarr",dailySpendArr);
this.dailyTrip = dailySpendArr;
      
  }

  return obj;
}, []);

    


    
let newList:any = [];
// console.log(weeklyCapObject)

//   console.log("RR IS",(getWeekArr))

let getWeekArr:any = weeklyCapObject.reduce((newArr:any, wc:any) => {
  // console.log(Object.values(wc)[0])
  newArr.push(Object.values(wc)[0]);
  return newArr;
}, []);
let newArr = weeklyCapObject.forEach((tr:any, ind:number) => {
  let payalbeAmount;


  let { dailyCapLimit, calculatedFare, zones } :any= Object.values(tr)[0];
  if(calculatedFare>dailyCapLimit){
      calculatedFare=dailyCapLimit
  }
  let totalCount;
  if (ind === 0) {
    totalCount = calculatedFare;
  } else {
    totalCount = calculatedFare + newList[ind - 1].totalCount;
  }

  //   console.log("RR IS",(getWeekArr))
let weeklyCapLimit
  let info = "Daily cap not reached";
  if (calculatedFare >= dailyCapLimit) {
    info = "Daily cap  reached";
  }
  if (weeklyIsInterZone(getWeekArr)) {
    if (
      (zones === "zone2-zone1" || zones === "zone1-zone2") &&
      totalCount >= 600
    ) {
      if (totalCount > 600) {
        payalbeAmount = 600 - newList[ind - 1].totalCount;
        if (payalbeAmount < 0) {
          payalbeAmount = 0;
        }
        weeklyCapLimit=600
        info = `Weekly Cap of 600 reached. charged ${payalbeAmount} instead of ${calculatedFare} `;
      } else {
        info = "Weekly Cap of 600 reached.";
      }
    }
  } else if (weeklyIsSomeZone2(getWeekArr)) {
    if (zones === "zone2-zone2" && totalCount >= 400) {
      if (totalCount > 400) {
        payalbeAmount = 400 - newList[ind - 1].totalCount;
        if (payalbeAmount < 0) {
          payalbeAmount = 0;
        }
        weeklyCapLimit=400
        info = `Weekly Cap of 400 reached. charged ${payalbeAmount} instead of ${calculatedFare}`;
      } else {
        info = "Weekly Cap of 400 reached.";
      }
    }
  } else if (weeklyIsAllZone1(getWeekArr)) {
    if (zones === "zone1-zone1" && totalCount >= 500) {
      if (totalCount > 500) {
        payalbeAmount = 500 - newList[ind - 1].totalCount;
        if (payalbeAmount < 0) {
          payalbeAmount = 0;
        }
        weeklyCapLimit=500
        info = `Weekly Cap of 500 reached. charged ${payalbeAmount} instead of ${calculatedFare}`;
      } else {
        info = "Weekly Cap of 500 reached.";
      }

      // info="Weekly Cap of 500 reached  reached"
    }
  }

interface MyType {
  calculatedFare: number;
  // Other properties
}

 let amtObj:any=Object.values(tr)[0]
    let amt=amtObj.calculatedFare
    // console.log(amt)
  let pAmt;
  if (calculatedFare >= dailyCapLimit) {
    pAmt = dailyCapLimit;
  } else {
    pAmt = payalbeAmount || payalbeAmount === 0 ? payalbeAmount : amt;
  }
let amtarrObj:any=Object.values(tr)[0]

  let newCap = {
    ...amtarrObj,
    info,
    weeklyCapLimit,
    totalCount,
    calculatedFare: pAmt,
  };
  tr = newCap;
  newList.push(newCap);
  if (newList.length === weeklyCapObject.length) {
    //   final weekly val
      this.weeklyTrip = newList;
    // console.log("weekly fare", newList);
  }
});

 }


      
    dayTotalFareCount(data:any){
      let lastObject = data[data.length - 1]

    
    let isWeeklyLimitReached = this.weeklyTrip.find((singleDay:any) => {
  let weekDay = singleDay.dateTime.split("T")[0];
  let currentDay = lastObject.dateTime.split("T")[0];
      return weekDay===currentDay
    })?.weeklyCapLimit
    

      if (isWeeklyLimitReached) {
  return 0
}


if(lastObject.dailyCapReached){
  return lastObject.dailyCapLimit
}else{
  return lastObject.totalFare
}

 }

  dateFormatter(date:any) {
    return new Date(date).toLocaleString()
  }

  singleTripWeeklyFareChecker(trip:any) {
    // console.log(trip.dateTime)
    
    let isWeeklyLimitReached = this.weeklyTrip.find((singleDay:any) => {
  let weekDay = singleDay.dateTime.split("T")[0];
  let currentDay = trip.dateTime.split("T")[0];
      return weekDay===currentDay
    })?.weeklyCapLimit
    
if(isWeeklyLimitReached){
  return 0
}
    return trip.calculatedFare
    
  }
  
  
  singleTripWeeklySavedChecker(trip:any) {
    // console.log(trip.dateTime)
    
    let isWeeklyLimitReached = this.weeklyTrip.find((singleDay:any) => {
  let weekDay = singleDay.dateTime.split("T")[0];
  let currentDay = trip.dateTime.split("T")[0];
      return weekDay===currentDay
    })?.weeklyCapLimit
    
if(isWeeklyLimitReached){
  return trip.calculatedFare
}
    return trip.saved
    
  }
  
  



























}
