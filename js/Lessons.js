//The JSON Data Array For Lessons.
let lessons = [
  {
    SubjectName: "Maths",
    Location: "London",
    Price: 50.0,
    Space: 5,
    Image: "img/maths.svg",
  },
  {
    SubjectName: "English",
    Location: "Manchester",
    Price: 30.0,
    Space: 5,
    Image: "img/english.png",
  },
  {
    SubjectName: "Science",
    Location: "New York",
    Price: 75.0,
    Space: 5,
    Image: "img/science.png",
  },
  {
    SubjectName: "Computer Science",
    Location: "Birmingham",
    Price: 100.0,
    Space: 5,
    Image: "img/cs.jpg",
  },
  {
    SubjectName: "History",
    Location: "London",
    Price: 85.0,
    Space: 5,
    Image: "img/history.png",
  },
  {
    SubjectName: "Geography",
    Location: "New York",
    Price: 85.0,
    Space: 5,
    Image: "img/geography.png",
  },
  {
    SubjectName: "Religious Education",
    Location: "Leeds",
    Price: 80.0,
    Space: 5,
    Image: "img/Re.png",
  },
  {
    SubjectName: "Phyical Education",
    Location: "Reading",
    Price: 110.0,
    Space: 5,
    Image: "img/PhyicalEducation.png",
  },
  {
    SubjectName: "Business",
    Location: "Cape Town",
    Price: 145.0,
    Space: 5,
    Image: "img/business.png",
  },
  {
    SubjectName: "Information Technology",
    Location: "Amsterdam",
    Price: 25.0,
    Space: 5,
    Image: "img/IT.png",
  },
];

//Store Data to the Local Storage
localStorage.setItem("Lessons", JSON.stringify(lessons));

/* 

case 9:
                            if (this.sortOption === 'name') {
                                this.items.sort(function (x, y) {
                                    if (x.name.toLowerCase() < y.name.toLowerCase()) {
                                        return -1;
                                    }
                                    else if (x.name.toLowerCase() > y.name.toLowerCase()) {
                                        return 1;
                                    }
                                    else {
                                        return 0;
                                    }
                                });
                            }
                            else {
                                this.items.sort((x, y) => x.id - y.id);
                            }

                            return this.items;

*/
