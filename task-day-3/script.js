// 1). For the given JSON iterate over all for loops(for, for in, for of, forEach)

// (a).FOR IN LOOP


let data1 = [
  {
    "name": "raja",
    "age": 22,
    "city": "machilipatnam"
  },
  {
    "name": "rahul",
    "age": 23,
    "city": "karnataka"
  },
  {
    'name': "harish",
    "age": 20,
    "city": "chennai"
  }
]

for (var i in data1) {
  console.log(data1[i])
}



// (b).foreach loop



let data2 = [
  {
    "name": "raja",
    "age": 22,
    "city": "machilipatnam"
  },
  {
    "name": "dinesh",
    "age": 25,
    "city": "bangalore"
  },
  {
    'name': "harish",
    "age": 20,
    "city": "chennai"
  }
]

data2.forEach(element => {
  console.log(element)
})



// (c).for of loop


let data3 = [
  {
    "name": "raja",
    "age": 22,
    "city": "machilipatnam"
  },
  {
    "name": "dinesh",
    "age": 25,
    "city": "bangalore"
  },
  {
    'name': "harish",
    "age": 20,
    "city": "chennai"
  }
]

for (let i of data3) {
  console.log(i)
}





// (D).for loop



let data = [
  {
    "name": "raja",
    "age": 22,
    "city": "machilipatnam"
  },
  {
    "name": "dinesh",
    "age": 25,
    "city": "bangalore"
  },
  {
    'name': "harish",
    "age": 20,
    "city": "chennai"
  }
]

for (let i = 0; i < data.length; i++) {
  console.log(data[i])
}







// 2). Create your own resume data in JSON format



let resumedata = [
  {
    "name": "raja",
    "age": 22,
    "city": "machilipatnam",
    "qualification": "BE Mechanical engineering",
    "percentage": "6.5 CGPA",
    "institution": {
      "school": "A Little Flower the Leader",
      "intermediate": "Narayana Jr college",
      "Engineering ": "lingaya's institute of managment and technology"
    }
  },
  {
    "name": "harish R",
    "age": 26,
    "city": "chennai",
    "qualification": "BE civil engineering",
    "percentage": "0 CGPA",
    "institution": {
      "school": "netaji popular school",
      "PU": "new expert college",
      "degree college": "RNSIT college of engineering"
    }
  },
  {
    "name": "manoj",
    "age": 24,
    "city": "bangalore",
    "qualification": "BE computer science engineering",
    "percentage": "9.5 CGPA",
    "institution": {
      "school": "tilak memorial english school",
      "PU": "shanthinekatan pu college",
      "degree college": "jss college of engineering"
    }
  }
]

for (let i = 0; i < resumedata.length; i++) {
  console.log(resumedata[i])
}


