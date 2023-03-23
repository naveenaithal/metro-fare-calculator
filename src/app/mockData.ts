export const dailyTrip=[
  [
    {
      from: 'zone1',
      to: 'zone1',
      dateTime: '2023-03-20T08:44',
      calculatedFare: 30,
      info: 'Off Peak Hours Single Fare',
      totalFare: 30
    },
    {
      from: 'zone1',
      to: 'zone1',
      dateTime: '2023-03-20T09:30',
      calculatedFare: 30,
      info: 'Off Peak Hours Single Fare',
      totalFare: 60
    },
    {
      from: 'zone1',
      to: 'zone1',
      dateTime: '2023-03-20T17:40',
      calculatedFare: 30,
      info: 'Off Peak Hours Single Fare',
      totalFare: 90
    },
    {
      from: 'zone1',
      to: 'zone1',
      dateTime: '2023-03-20T18:20',
      calculatedFare: 10,
      info: 'Daily Cap reached 100 reached for zone 1-1 charged 10 insted of  30',
      totalFare: 120,
      saved: 20,
      dailyCapReached: true
    },
    {
      from: 'zone1',
      to: 'zone1',
      dateTime: '2023-03-20T08:20',
      calculatedFare: 0,
      info: 'Daily Cap reached 100 reached for zone 1-1 charged 0 insted of  30',
      totalFare: 150,
      saved: 30,
      dailyCapReached: true
    }
  ],
  [
    {
      from: 'zone1',
      to: 'zone1',
      dateTime: '2023-03-21T09:46',
      calculatedFare: 30,
      info: 'Off Peak Hours Single Fare',
      totalFare: 30
    },
    {
      from: 'zone1',
      to: 'zone1',
      dateTime: '2023-03-21T10:00',
      calculatedFare: 30,
      info: 'Off Peak Hours Single Fare',
      totalFare: 60
    },
    {
      from: 'zone1',
      to: 'zone1',
      dateTime: '2023-03-21T17:50',
      calculatedFare: 30,
      info: 'Off Peak Hours Single Fare',
      totalFare: 90
    },
    {
      from: 'zone1',
      to: 'zone1',
      dateTime: '2023-03-21T19:46',
      calculatedFare: 10,
      info: 'Daily Cap reached 100 reached for zone 1-1 charged 10 insted of  30',
      totalFare: 120,
      saved: 20,
      dailyCapReached: true
    },
    {
      from: 'zone1',
      to: 'zone1',
      dateTime: '2023-03-21T11:46',
      calculatedFare: 0,
      info: 'Daily Cap reached 100 reached for zone 1-1 charged 0 insted of  25',
      totalFare: 145,
      saved: 25,
      dailyCapReached: true
    },
    {
      from: 'zone1',
      to: 'zone1',
      dateTime: '2023-03-21T09:46',
      calculatedFare: 0,
      info: 'Daily Cap reached 100 reached for zone 1-1 charged 0 insted of  30',
      totalFare: 175,
      saved: 30,
      dailyCapReached: true
    },
    {
      from: 'zone1',
      to: 'zone1',
      dateTime: '2023-03-21T12:46',
      calculatedFare: 0,
      info: 'Daily Cap reached 100 reached for zone 1-1 charged 0 insted of  25',
      totalFare: 200,
      saved: 25,
      dailyCapReached: true
    }
  ],
  [
    {
      from: 'zone1',
      to: 'zone1',
      dateTime: '2023-03-22T11:47',
      calculatedFare: 25,
      info: 'Off Peak Hours Single Fare',
      totalFare: 25
    }
  ],
  [
    {
      from: 'zone1',
      to: 'zone1',
      dateTime: '2023-03-23T10:47',
      calculatedFare: 25,
      info: 'Off Peak Hours Single Fare',
      totalFare: 25
    }
  ],
  [
    {
      from: 'zone1',
      to: 'zone1',
      dateTime: '2023-03-24T17:47',
      calculatedFare: 30,
      info: 'Off Peak Hours Single Fare',
      totalFare: 30
    }
  ],
  [
    {
      from: 'zone1',
      to: 'zone1',
      dateTime: '2023-03-25T18:12',
      calculatedFare: 30,
      info: 'Off Peak Hours Single Fare',
      totalFare: 30
    }
  ],
  [
    {
      from: 'zone1',
      to: 'zone1',
      dateTime: '2023-03-26T09:12',
      calculatedFare: 30,
      info: 'Off Peak Hours Single Fare',
      totalFare: 30
    },
    {
      from: 'zone1',
      to: 'zone1',
      dateTime: '2023-03-26T10:12',
      calculatedFare: 30,
      info: 'Off Peak Hours Single Fare',
      totalFare: 60
    },
    {
      from: 'zone1',
      to: 'zone1',
      dateTime: '2023-03-26T17:12',
      calculatedFare: 25,
      info: 'Off Peak Hours Single Fare',
      totalFare: 85
    }
  ]
]

export const weeklyTrip= [
  {
    calculatedFare: 100,
    zones: 'zone1-zone1',
    dailyCapLimit: 100,
    dateTime: '2023-03-20T08:44',
    info: 'Daily cap  reached',
    totalCount: 150
  },
  {
    calculatedFare: 100,
    zones: 'zone1-zone1',
    dailyCapLimit: 100,
    dateTime: '2023-03-21T09:46',
    info: 'Daily cap  reached',
    totalCount: 350
  },
  {
    calculatedFare: 25,
    zones: 'zone1-zone1',
    dailyCapLimit: 100,
    dateTime: '2023-03-22T11:47',
    info: 'Daily cap not reached',
    totalCount: 375
  },
  {
    calculatedFare: 25,
    zones: 'zone1-zone1',
    dailyCapLimit: 100,
    dateTime: '2023-03-23T10:47',
    info: 'Daily cap not reached',
    totalCount: 400
  },
  {
    calculatedFare: 30,
    zones: 'zone1-zone1',
    dailyCapLimit: 100,
    dateTime: '2023-03-24T17:47',
    info: 'Daily cap not reached',
    totalCount: 430
  },
  {
    calculatedFare: 30,
    zones: 'zone1-zone1',
    dailyCapLimit: 100,
    dateTime: '2023-03-25T18:12',
    info: 'Daily cap not reached',
    totalCount: 460
  },
  {
    calculatedFare: 40,
    zones: 'zone1-zone1',
    dailyCapLimit: 100,
    dateTime: '2023-03-26T09:12',
    info: 'Weekly Cap of 500 reached charged 40 insted of 85  reached',
    totalCount: 545
  }
]

export const mockData = [
      {
        "from": "zone2",
        "to": "zone1",
        "dateTime": "2023-03-20T08:44"
    },
      {
        "from": "zone1",
        "to": "zone2",
        "dateTime": "2023-03-20T09:30"
    },
      {
        "from": "zone2",
        "to": "zone2",
        "dateTime": "2023-03-20T17:40"
    },
      {
        "from": "zone1",
        "to": "zone1",
        "dateTime": "2023-03-20T18:20"
    },
      {
        "from": "zone2",
        "to": "zone1",
        "dateTime": "2023-03-20T08:20"
    },
    {
        "from": "zone1",
        "to": "zone2",
        "dateTime": "2023-03-21T09:46"
    },
       {
        "from": "zone2",
        "to": "zone1",
        "dateTime": "2023-03-21T10:00"
    },
       {
        "from": "zone2",
        "to": "zone1",
        "dateTime": "2023-03-21T10:00"
    },
       {
        "from": "zone2",
        "to": "zone1",
        "dateTime": "2023-03-21T10:00"
    },
       {
        "from": "zone2",
        "to": "zone1",
        "dateTime": "2023-03-21T10:00"
    },
       {
        "from": "zone1",
        "to": "zone1",
        "dateTime": "2023-03-21T17:50"
    },
       {
        "from": "zone1",
        "to": "zone1",
        "dateTime": "2023-03-21T18:46"
    },
       {
        "from": "zone1",
        "to": "zone2",
        "dateTime": "2023-03-22T11:47"
    },
       {
        "from": "zone2",
        "to": "zone1",
        "dateTime": "2023-03-22T09:21"
    },
       {
        "from": "zone2",
        "to": "zone2",
        "dateTime": "2023-03-22T12:32"
    },
       {
        "from": "zone1",
        "to": "zone2",
        "dateTime": "2023-03-22T16:42"
    },
    {
        "from": "zone1",
        "to": "zone1",
        "dateTime": "2023-03-23T10:47"
    },
    {
        "from": "zone1",
        "to": "zone2",
        "dateTime": "2023-03-23T08:29"
    },
    {
        "from": "zone2",
        "to": "zone2",
        "dateTime": "2023-03-23T12:58"
    },
    {
        "from": "zone1",
        "to": "zone2",
        "dateTime": "2023-03-23T16:34"
    },
    {
        "from": "zone2",
        "to": "zone1",
        "dateTime": "2023-03-23T18:47"
    },
    {
        "from": "zone2",
        "to": "zone1",
        "dateTime": "2023-03-24T17:47"
    },
    {
        "from": "zone1",
        "to": "zone1",
        "dateTime": "2023-03-24T17:47"
    },
    {
        "from": "zone1",
        "to": "zone2",
        "dateTime": "2023-03-24T17:47"
    },
    {
        "from": "zone2",
        "to": "zone1",
        "dateTime": "2023-03-24T17:47"
    },
     {
        "from": "zone2",
        "to": "zone2",
        "dateTime": "2023-03-25T18:12"
    },
     {
        "from": "zone2",
        "to": "zone2",
        "dateTime": "2023-03-25T19:12"
    },
     {
        "from": "zone2",
        "to": "zone2",
        "dateTime": "2023-03-25T20:12"
    },
     {
        "from": "zone2",
        "to": "zone2",
        "dateTime": "2023-03-25T20:30"
    },
     {
        "from": "zone2",
        "to": "zone2",
        "dateTime": "2023-03-25T21:42"
    },
      {
        "from": "zone1",
        "to": "zone2",
        "dateTime": "2023-03-26T09:12"
    },
      {
        "from": "zone1",
        "to": "zone2",
        "dateTime": "2023-03-26T17:12"
    }
]