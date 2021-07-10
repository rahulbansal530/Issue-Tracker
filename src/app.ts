// For fetching json file and storing it in mock 
// import mock from "/New folder/Ps/huv19.0-html-css-final-assignment-master/mock.json";
import mock from "../mock.json";


// fetch value from HTML's id and store in container
//here they will fetch null value
const todoCont: HTMLElement | any = document.getElementById("app1");
const inProgressCont: HTMLElement | any = document.getElementById("app2");
const doneCont: HTMLElement | any = document.getElementById("app3");

//Dataype to store our content
interface ComplaintDetails {
  id: string;
  date:string;
  heading:string;
  description: string;
  designation:string;
  name: string;
  profile:string;
  status: string;
}

// number is datatype

const fetchData = (todo:number,inprogress:number,done:number, con1:any,con2:any,con3:any): void => {
  
  for(let i=0;i<todo;i++)
  {
    let user: ComplaintDetails = {
        id:mock.todo[i].id,
        date:mock.todo[i].date,
        heading:mock.todo[i].heading,
        description:mock.todo[i].description,
        designation:mock.todo[i].designation,
        name:mock.todo[i].name,
        profile:mock.todo[i].profile,
        status:mock.todo[i].status,
        
        }
      showUser(user,con1);
  }
  

  for(let i=0;i<inprogress;i++)
  {
    let user: ComplaintDetails = {
      id:mock.in_progress[i].id,
      date:mock.in_progress[i].date,
      heading:mock.in_progress[i].heading,
      description:mock.in_progress[i].description,
      designation:mock.in_progress[i].designation,
      name:mock.in_progress[i].name,
      profile:mock.in_progress[i].profile,
      status:mock.in_progress[i].status,    
      }
      showUser(user,con2);
  }

  for(let i=0;i<done;i++)
  {
    let user: ComplaintDetails = {
      id:mock.done[i].id,
      date:mock.done[i].date,
      heading:mock.done[i].heading,
      description:mock.done[i].description,
      designation:mock.done[i].designation,
      name:mock.done[i].name,
      profile:mock.done[i].profile,
      status:mock.done[i].status,
          
  }
          showUser(user,con3);
    
      }
};

// Calling show user function

const showUser = (user: ComplaintDetails,con:any): void => {
  //According to priority colour changer
  let color:string="color-red";
  if(user.status=="In Progress")
  color="color-yellow";
  else if(user.status=="Done")
  color="color-green";
  else if(user.status=="Low Priority")
  color="color-orange";
  // Card Layout
  let output: string = `
        <div id="card">
          <div id=card-id-and-date>
            <a id="id">${user.id}</a>
            <a id="date">${user.date}</a>
          </div>
          <div id="issue-name">
            <a>${user.heading}</a>
            </div>
            <div id="card-content">
              <a>${user.description}</a>
            </div>
            <div id=card-assignee-and-status>
              <a id="asignee">Assignee</a>
              <a id="status">Status</a>
            </div>
            <div id="card-profile-and-status">
           <div id="profile">
              <a><img src="../images/user_1.svg"></a>
              <div id="card-name-and-designation">
                <a>${user.name}r</a>
                <a>${user.profile}</a>
              </div>
            </div>
            <a id="priority">
              ${user.status}
            </a>
          </div>
        </div>
    `;


  con.innerHTML += output;
};

// First call here 

fetchData(mock.todo.length,mock.in_progress.length,mock.done.length,todoCont,inProgressCont,doneCont);
