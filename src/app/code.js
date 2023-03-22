toMilliseconds = (hrs, min) => (hrs * 60 * 60 + min * 60) * 1000;
let data = [];

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

function isAllZone1(data) {
  return data.every((trip) => {
    let { from, to } = trip;
    return from === "zone1" && to === "zone1";
  });
}
function isSomeZone2(data) {
  return data.some((trip) => {
    let { from, to } = trip;
    return from === "zone2" && to === "zone2";
  });
}
function isInterZone(data) {
  return data.some((trip) => {
    let { from, to } = trip;
    return (
      (from === "zone1" && to === "zone2") ||
      (from === "zone2" && to === "zone1")
    );
  });
}

function weeklyIsAllZone1(data) {
  return data.every((trip) => {
    let { from, to, zones } = trip;
    // console.log(trip)
    // console.log(zones)
    return (from === "zone1" && to === "zone1") || zones === "zone1-zone1";
  });
}
function weeklyIsSomeZone2(data) {
  return data.some((trip) => {
    let { from, to, zones } = trip;
    return (from === "zone2" && to === "zone2") || zones === "zone2-zone2";
  });
}
function weeklyIsInterZone(data) {
  return data.some((trip) => {
    let { from, to, zones } = trip;
    return (
      (from === "zone1" && to === "zone2") ||
      (from === "zone2" && to === "zone1") ||
      zones === "zone2-zone1" ||
      zones === "zone1-zone2"
    );
  });
}

let result = data.reduce((arr, trip, index) => {
  let { from, to, dateTime } = trip;
  let time = dateTime.split("T")[1];
  let [hr, min] = time.split(":");
  let TinMs = toMilliseconds(hr, min);
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
        weekType = "weekEnd";
        info = "Peak Hours Single Fare";
        newTrip = { ...newTrip, calculatedFare, weekType, info };
        trip = newTrip;
        //   console.log(" fare is 35")
      } else if (from === "zone2" && to === "zone1") {
        let newTrip = { ...trip };
        let calculatedFare = 35;
        weekType = "weekEnd";
        info = "Peak Hours Single Fare";
        newTrip = { ...newTrip, calculatedFare, weekType, info };
        trip = newTrip;
        //   console.log(" fare is 35")
      } else if (from === "zone1" && to === "zone1") {
        let newTrip = { ...trip };
        let calculatedFare = 30;
        weekType = "weekEnd";
        info = "Peak Hours Single Fare";
        newTrip = { ...newTrip, calculatedFare, weekType, info };
        trip = newTrip;
        //   console.log(" fare is 30")
      } else if (from === "zone2" && to === "zone2") {
        let newTrip = { ...trip };
        let calculatedFare = 25,
          weekType = "weekEnd";
        info = "Peak Hours Single Fare";
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
        weekType = "weekEnd";
        info = "Peak Hours Single Fare";
        newTrip = { ...newTrip, calculatedFare, weekType, info };
        trip = newTrip;
        //   console.log(" fare is 35")
      } else if (from === "zone2" && to === "zone1") {
        let calculatedFare = 35;
        let newTrip = { ...trip };
        weekType = "weekEnd";
        info = "Peak Hours Single Fare";
        newTrip = { ...newTrip, calculatedFare, weekType, info };
        trip = newTrip;
        //   console.log(" fare is 35")
      } else if (from === "zone1" && to === "zone1") {
        let calculatedFare = 30;
        let newTrip = { ...trip };
        weekType = "weekEnd";
        info = "Peak Hours Single Fare";
        newTrip = { ...newTrip, calculatedFare, weekType, info };
        trip = newTrip;
        //   console.log(" fare is 30")
      } else if (from === "zone2" && to === "zone2") {
        let calculatedFare = 25;
        let newTrip = { ...trip };
        weekType = "weekEnd";
        info = "Peak Hours Single Fare";
        newTrip = { ...newTrip, calculatedFare, weekType, info };
        trip = newTrip;
        //   console.log(" fare is 25")
      }
    } else {
      // off peak hrs
      if (from === "zone1" && to === "zone2") {
        let calculatedFare = 30;
        let newTrip = { ...trip };
        weekType = "weekEnd";
        info = "Off Peak Hours Single Fare";
        newTrip = { ...newTrip, calculatedFare, weekType, info };
        trip = newTrip;
        //  console.log(" weekend off Peak fare is 30",trip,index)
      } else if (from === "zone2" && to === "zone1") {
        let calculatedFare = 30;
        let newTrip = { ...trip };
        weekType = "weekEnd";
        info = "Off Peak Hours Single Fare";
        newTrip = { ...newTrip, calculatedFare, weekType, info };
        trip = newTrip;
        //  console.log("weekend off Peak  fare is 30",trip,index)
      } else if (from === "zone1" && to === "zone1") {
        let calculatedFare = 25;
        let newTrip = { ...trip };
        weekType = "weekEnd";
        info = "Off Peak Hours Single Fare";
        newTrip = { ...newTrip, calculatedFare, weekType, info };
        trip = newTrip;
        //  console.log("weekend off Peak  fare is 25",trip,index)
      } else if (from === "zone2" && to === "zone2") {
        let calculatedFare = 20;
        let newTrip = { ...trip };
        weekType = "weekEnd";
        info = "Off Peak Hours Single Fare";
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
      weekType = "weekDay";
      info = "Peak Hours Single Fare";
      newTrip = { ...newTrip, calculatedFare, weekType, info };
      trip = newTrip;
      //   console.log(" fare is 35")
    } else if (from === "zone2" && to === "zone1") {
      let newTrip = { ...trip };
      let calculatedFare = 35;
      weekType = "weekDay";
      info = "Peak Hours Single Fare";
      newTrip = { ...newTrip, calculatedFare, weekType, info };
      trip = newTrip;
      //   console.log(" fare is 35")
    } else if (from === "zone1" && to === "zone1") {
      let newTrip = { ...trip };
      let calculatedFare = 30;
      weekType = "weekDay";
      info = "Peak Hours Single Fare";
      newTrip = { ...newTrip, calculatedFare, weekType, info };
      trip = newTrip;
      //   console.log(" fare is 30")
    } else if (from === "zone2" && to === "zone2") {
      let newTrip = { ...trip };
      let calculatedFare = 25,
        weekType = "weekDay";
      info = "Peak Hours Single Fare";
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
      weekType = "weekDay";
      info = "Peak Hours Single Fare";
      newTrip = { ...newTrip, calculatedFare, weekType, info };
      trip = newTrip;
      //   console.log(" fare is 35")
    } else if (from === "zone2" && to === "zone1") {
      let calculatedFare = 35;
      let newTrip = { ...trip };
      weekType = "weekDay";
      info = "Peak Hours Single Fare";
      newTrip = { ...newTrip, calculatedFare, weekType, info };
      trip = newTrip;
      //   console.log(" fare is 35")
    } else if (from === "zone1" && to === "zone1") {
      let calculatedFare = 30;
      let newTrip = { ...trip };
      weekType = "weekDay";
      info = "Peak Hours Single Fare";
      newTrip = { ...newTrip, calculatedFare, weekType, info };
      trip = newTrip;
      //   console.log(" fare is 30")
    } else if (from === "zone2" && to === "zone2") {
      let calculatedFare = 25;
      let newTrip = { ...trip };
      weekType = "weekDay";
      info = "Peak Hours Single Fare";
      newTrip = { ...newTrip, calculatedFare, weekType, info };
      trip = newTrip;
      //   console.log(" fare is 25")
    }
  } else {
    // off peak hrs
    if (from === "zone1" && to === "zone2") {
      let calculatedFare = 30;
      let newTrip = { ...trip };
      weekType = "weekDay";
      info = "Off Peak Hours Single Fare";
      newTrip = { ...newTrip, calculatedFare, weekType, info };
      trip = newTrip;
      //   console.log(" off Peak fare is 30",trip,index)
    } else if (from === "zone2" && to === "zone1") {
      let calculatedFare = 30;
      let newTrip = { ...trip };
      weekType = "weekDay";
      info = "Off Peak Hours Single Fare";
      newTrip = { ...newTrip, calculatedFare, weekType, info };
      trip = newTrip;
      //   console.log("off Peak  fare is 30",trip,index)
    } else if (from === "zone1" && to === "zone1") {
      let calculatedFare = 25;
      let newTrip = { ...trip };
      weekType = "weekDay";
      info = "Off Peak Hours Single Fare";
      newTrip = { ...newTrip, calculatedFare, weekType, info };
      trip = newTrip;
      //   console.log("off Peak  fare is 25",trip,index)
    } else if (from === "zone2" && to === "zone2") {
      let calculatedFare = 20;
      let newTrip = { ...trip };
      weekType = "weekDay";
      info = "Off Peak Hours Single Fare";
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

let finRes = result.reduce((obj, trip) => {
  let { from, to, dateTime, calculatedFare } = trip;
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

let dailySpendArr = [];
let weeklyCap = Object.values(finRes).reduce((obj, dayTrip) => {
  // console.log(dayTrip)

  let dailySpend = dayTrip.reduce((obj, trip, i) => {
    let { from, to, dateTime, calculatedFare, dailyCapReached } = trip;
    //  console.log(dailyCapReached)
    let time = dateTime.split("T")[1];
    let date = dateTime.split("T")[0];
    let [hr, min] = time.split(":");
    let TinMs = toMilliseconds(hr, min);
    if (isInterZone(dayTrip)) {
      let totalFare;
      if (i === 0) {
        totalFare = calculatedFare;
      } else {
        totalFare = calculatedFare + obj[i - 1].totalFare;
      }

      if (totalFare >= 120) {
        if (totalFare > 120) {
          let payalbeAmount = 120 - obj[i - 1].totalFare;

          if (payalbeAmount < 0) {
            payalbeAmount = 0;
          }
          let info = `Daily Cap reached 120 reached for zone 1-2 charged ${payalbeAmount} insted of  ${calculatedFare}`;

          let newTrip = {
            ...trip,
            totalFare,
            calculatedFare: payalbeAmount,
            info,
            saved: calculatedFare - payalbeAmount,
            dailyCapReached: true,
          };
          obj.push(newTrip);
        } else {
          let info = `Daily Cap  120  reached for zone 1-2 `;
          let newTrip = {
            ...trip,
            totalFare,
            calculatedFare: 0,
            info,
            saved: calculatedFare,
          };
          obj.push(newTrip);
        }
      } else {
        let newTrip = { ...trip, totalFare };
        obj.push(newTrip);
      }
    } else if (isSomeZone2(dayTrip)) {
      let totalFare;
      if (i === 0) {
        totalFare = calculatedFare;
      } else {
        totalFare = calculatedFare + obj[i - 1].totalFare;
      }

      if (totalFare >= 80) {
        if (totalFare > 80) {
          let payalbeAmount = 80 - obj[i - 1].totalFare;

          if (payalbeAmount < 0) {
            payalbeAmount = 0;
          }
          let info = `Daily Cap reached 80 reached for zone 2-2 charged ${payalbeAmount} insted pf  ${calculatedFare}`;
          let newTrip = {
            ...trip,
            totalFare,
            calculatedFare: payalbeAmount,
            info,
            saved: calculatedFare - payalbeAmount,
            dailyCapReached: true,
          };
          obj.push(newTrip);
        } else {
          let info = `Daily Cap  80  reached for zone 2-2 `;
          let newTrip = {
            ...trip,
            totalFare,
            calculatedFare: 0,
            info,
            saved: calculatedFare,
          };
          obj.push(newTrip);
        }
      } else {
        let newTrip = { ...trip, totalFare };
        obj.push(newTrip);
      }
    } else if (isAllZone1(dayTrip)) {
      let totalFare;
      // console.log("inside all 1")
      if (i === 0) {
        totalFare = calculatedFare;
      } else {
        totalFare = calculatedFare + obj[i - 1].totalFare;
      }

      if (totalFare >= 100) {
        if (totalFare > 100) {
          let payalbeAmount = 100 - obj[i - 1].totalFare;

          if (payalbeAmount < 0) {
            payalbeAmount = 0;
          }
          let info = `Daily Cap reached 100 reached for zone 1-1 charged ${payalbeAmount} insted of  ${calculatedFare}`;

          let newTrip = {
            ...trip,
            totalFare,
            calculatedFare: payalbeAmount,
            info,
            saved: calculatedFare - payalbeAmount,
            dailyCapReached: true,
          };
          obj.push(newTrip);
        } else {
          let info = `Daily Cap  100  reached for zone 1-1 `;
          let newTrip = {
            ...trip,
            totalFare,
            calculatedFare: 0,
            info,
            saved: calculatedFare,
          };
          obj.push(newTrip);
        }
      } else {
        let newTrip = { ...trip, totalFare };
        obj.push(newTrip);
      }
    }
    return obj;
  }, []);

  dailySpendArr.push(dailySpend);

  // console.log("daily spend",dailySpend)
  let singleTripResult = dayTrip.reduce((singleTripObj, singleTripRes) => {
    // console.log(singleTripRes,"trip is")

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
    if (weeklyIsSomeZone2(dayTrip)) {
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
    if (weeklyIsAllZone1(dayTrip)) {
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
  if (dailySpendArr.length === Object.values(finRes).length) {
    // final vlaue day wise
    // console.log(dailySpendArr);
    this.dailyTrip = dailySpendArr;
  }

  return obj;
}, []);

let newList = [];
// console.log(weeklyCap)

//   console.log("RR IS",(getWeekArr))

let newArr = weeklyCap.forEach((tr, ind) => {
  let payalbeAmount;
  let getWeekArr = weeklyCap.reduce((newArr, wc) => {
    // console.log(Object.values(wc)[0])
    newArr.push(Object.values(wc)[0]);
    return newArr;
  }, []);
  let { dailyCapLimit, calculatedFare, zones } = Object.values(tr)[0];

  let totalCount;
  if (ind === 0) {
    totalCount = calculatedFare;
  } else {
    totalCount = calculatedFare + newList[ind - 1].totalCount;
  }

  //   console.log("RR IS",(getWeekArr))

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
        info = `Weekly Cap of 600 reached charged ${payalbeAmount} insted of ${calculatedFare}  reached`;
      } else {
        info = "Weekly Cap of 600 reached   reached";
      }
    }
  } else if (weeklyIsSomeZone2(getWeekArr)) {
    if (zones === "zone2-zone2" && totalCount >= 400) {
      if (totalCount > 400) {
        payalbeAmount = 400 - newList[ind - 1].totalCount;
        if (payalbeAmount < 0) {
          payalbeAmount = 0;
        }
        info = `Weekly Cap of 400 reached charged ${payalbeAmount} insted of ${calculatedFare}  reached`;
      } else {
        info = "Weekly Cap of 400 reached   reached";
      }
    }
  } else if (weeklyIsAllZone1(getWeekArr)) {
    if (zones === "zone1-zone1" && totalCount >= 500) {
      if (totalCount > 500) {
        payalbeAmount = 500 - newList[ind - 1].totalCount;
        if (payalbeAmount < 0) {
          payalbeAmount = 0;
        }
        info = `Weekly Cap of 500 reached charged ${payalbeAmount} insted of ${calculatedFare}  reached`;
      } else {
        info = "Weekly Cap of 500 reached   reached";
      }

      // info="Weekly Cap of 500 reached  reached"
    }
  }
  let amt = Object.values(tr)[0].calculatedFare;
  let pAmt;
  if (calculatedFare >= dailyCapLimit) {
    pAmt = dailyCapLimit;
  } else {
    pAmt = payalbeAmount || payalbeAmount === 0 ? payalbeAmount : amt;
  }

  let newCap = {
    ...Object.values(tr)[0],
    info,
    totalCount,
    calculatedFare: pAmt,
  };
  tr = newCap;
  newList.push(newCap);
  if (newList.length === weeklyCap.length) {
    //   final weekly val
    this.weeklyTrip = newList;
    console.log("weekly fare", newList);
  }
});
