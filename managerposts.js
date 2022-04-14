const studentForm = document.getElementById('studentForm');
const studentsContainer = document.querySelector('.students');
const inputTitle = document.getElementById('title');
const inputDetail = document.getElementById('detail');
const inputDate = document.getElementById('date');
const inputName = document. getElementById('name');



const students =JSON.parse(localStorage.getItem('students')) || [];


const addStudent = (title,detail,date,name)=>{

      students.push({

            title,
            detail,
            date,
            name
      })

      localStorage.setItem('students',JSON.stringify(students));

      return {title,detail,date,name};
};


const createStudentElement = ({title,detail,date,name})=>{


      const studentDiv = document.createElement('div');
      const studentTitle = document.createElement('h2');
      const studentDetail = document.createElement('h5');
      const studentDate= document.createElement('p');
      const studentName= document.createElement('h4');



      studentTitle.innerText = title;
      studentDetail.innerText = detail;
      studentDate.innerText = "Date:" +date;
      studentName.innerText = "Author:" +name;



      studentDiv.append(studentTitle,studentDetail,studentDate,studentName);

      studentsContainer.appendChild(studentDiv);
};

students.forEach(createStudentElement);



studentForm.onsubmit = e =>{

      e.preventDefault();

      const newStudent = addStudent(

            inputTitle.value ,
            inputDetail.value,
            inputDate.value,
            inputName.value
      );

      createStudentElement(newStudent);

      inputTitle.value ="";
      inputDetail.value= "";
      inputDate.value="";
      inputName.value="";
}

