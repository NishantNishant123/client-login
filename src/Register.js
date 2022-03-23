import React from 'react'
import Axios from 'axios';
import {useState} from 'react';

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // const [country, setCountry] = useState("");
    // const [position, setPosition] = useState("");
    // const [wage, setWage] = useState(0);
    
    // const [newWage, setNewWage] = useState(0);
    
    
    // const [employeeList, setEmployeeList] = useState([]);
    
    const addRegister = () => {
      console.log(username+""+password);
     
      Axios.post("http://localhost:3001/register",  {
        
          username: username,password:password
        
      }
       
        
      ).then((response) => {
        
        console.log(response);
        // setEmployeeList([
        //   ...employeeList,
        //   { id:response.data.id,
        //     name: name,
        //     age: age,
        //     country: country,
        //     position: position,
        //     wage: wage,
        //   },
        // ]);
    
        // getEmployees();
      }).catch((err)=>{
        console.log(err);
      });
    };
    
    // const getEmployees = () => {
    //   Axios.get("http://localhost:3001/employees").then((response) => {
    //     setEmployeeList(response.data);
    //   });
    // };
    
    // const updateEmployeeWage = (id) => {
    //   Axios.put("http://localhost:3001/update", { wage: newWage, id: id }).then(
    //     (response) => {
    //       setEmployeeList(
    //         employeeList.map((val) => {
    
    //           return val.id == id
    //             ? {
    //                 id: val.id,
    //                 name: val.name,
    //                 country: val.country,
    //                 age: val.age,
    //                 position: val.position,
    //                 wage: newWage,
    //               }
    //             : val;
    //         })
    //       );
    //     }
    //   );
    // };
    
    // const deleteEmployee = (id) => {
    //   Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
    //     setEmployeeList(
    //       employeeList.filter((val) => {
    //         return val.id != id;
    //       })
    //     );
    //   });
    // };
    
    return (
      <div className="App"><h1 align="center">Register Form</h1>
        <div className="information">
          <label>Name:</label>
          <input
            type="text"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <label>Age:</label>
          <input
            type="text"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          {/* <label>Country:</label>
          <input
            type="text"
            onChange={(event) => {
              setCountry(event.target.value);
            }}
          /> */}
          {/* <label>Position:</label>
          <input
            type="text"
            onChange={(event) => {
              setPosition(event.target.value);
            }}
          />
          <label>Wage (year):</label>
          <input
            type="number"
            onChange={(event) => {
              setWage(event.target.value);
            }}
          /> */}
          <button onClick={addRegister}>Add Employee</button>
        </div>
        {/* <div className="employees">
          <button onClick={getEmployees}>Show Employees</button>
    
          {employeeList.map((val, key) => {
            return (
              <li key={val.id}>
              <div className="employee" key={val.id}>
                <div>
                  <h3>Name: {val.name}</h3>
                  <h3>Age: {val.age}</h3>
                  <h3>Country: {val.country}</h3>
                  <h3>Position: {val.position}</h3>
                  <h3>Wage: {val.wage}</h3>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="2000..."
                    onChange={(event) => {
                      setNewWage(event.target.value);
                    }}
                  />
                  <button 
                    onClick={() => {
                      updateEmployeeWage(val.id);
                    }}
                  >
                    {" "}
                    Update
                  </button>
    
                  <button
                    onClick={() => {
                      deleteEmployee(val.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div></li>
            );
          })}
        </div> */}
      </div>
    );
}

export default Register