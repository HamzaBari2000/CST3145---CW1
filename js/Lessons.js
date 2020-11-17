//The JSON Data Array For Lessons.
let lessons = [
  {
    id: 1,
    SubjectName: "Maths",
    Location: "London",
    Price: 50.0,
    Space: 5,
    Image: "img/maths.svg",
  },
  {
    id: 2,
    SubjectName: "English",
    Location: "Manchester",
    Price: 30.0,
    Space: 5,
    Image: "img/english.png",
  },
  {
    id: 3,
    SubjectName: "Science",
    Location: "New York",
    Price: 75.0,
    Space: 5,
    Image: "img/science.png",
  },
  {
    id: 4,
    SubjectName: "Computer Science",
    Location: "Birmingham",
    Price: 100.0,
    Space: 5,
    Image: "img/cs.jpg",
  },
  {
    id: 5,
    SubjectName: "History",
    Location: "London",
    Price: 85.0,
    Space: 5,
    Image: "img/history.png",
  },
  {
    id: 6,
    SubjectName: "Geography",
    Location: "New York",
    Price: 85.0,
    Space: 5,
    Image: "img/geography.png",
  },
  {
    id: 7,
    SubjectName: "Religious Education",
    Location: "Leeds",
    Price: 80.0,
    Space: 5,
    Image: "img/Re.png",
  },
  {
    id: 8,
    SubjectName: "Phyical Education",
    Location: "Reading",
    Price: 110.0,
    Space: 5,
    Image: "img/PhyicalEducation.png",
  },
  {
    id: 9,
    SubjectName: "Business",
    Location: "Cape Town",
    Price: 145.0,
    Space: 5,
    Image: "img/business.png",
  },
  {
    id: 10,
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
