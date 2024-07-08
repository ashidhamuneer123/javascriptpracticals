const students = [
    { id: 1, name: 'Alice', score: 85, class: 'A' },
    { id: 2, name: 'Bob', score: 92, class: 'B' },
    { id: 3, name: 'Charlie', score: 78, class: 'A' },
    { id: 4, name: 'David', score: 95, class: 'C' },
    { id: 5, name: 'Eva', score: 89, class: 'D' },
    { id: 6, name: 'Freddy', score: 90, class: 'C' },
  ];
  
  // Filter students in class A
  const classAStudents = students.filter(student => student.class === 'A');
  //filter students having score >=90
  const score90Students=students.filter(student => student.score>=90)
  //filter students name starting with letter D
  const nameD=students.filter(student=>student.name.startsWith("D"))
  
  // Display name and score of students in class A
  console.log('Students in Class A:');
  classAStudents.forEach(student => {
    console.log(`${student.name}: ${student.score}`);
  });

  //Display names of students with score >90

  score90Students.forEach(student=>{
    console.log(`${student.name}`)
  })

  ////Display names of students starts with letter D

  nameD.forEach(student=>{
    console.log(`${student.name}`)
  })


  //average score of class A students

  const clsAstu=students.filter((student)=>student.class==='A');
  console.log(clsAstu);
    let scr=0;
    const scoreA=clsAstu.forEach((stu)=>{
      scr += stu.score;
    })
  
 console.log(scr);
  const stuLen=clsAstu.length;
  console.log(stuLen);
  const averageScoreA=scr/stuLen;
  console.log(averageScoreA);


  const classCounts = students.reduce((count , student) => {
    const className = student.class;
    // Initialize count for the class if it doesn't exist yet
    if (!count[className]) {
      count[className] = 0;
    }
    
    // Increment the count for the current class
    count[className]++;
    return count;
  }, {});
  
  console.log(classCounts); // Output: {A: 3, B: 1, C: 2}


  let maxScore=0;
  students.forEach((student)=>{
    if(student.score>maxScore){
      maxScore=student.score;
    }
  })
  students.forEach((student)=>{
    if(student.score==maxScore){
      console.log(`student with highest score :${student.name}`);
    }
  })
 

  students.sort((a,b)=>b.score-a.score)
  console.log(students[0].name);
 


  