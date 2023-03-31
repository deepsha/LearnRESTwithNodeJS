import mongoose from "mongoose";
import { EmployeeSchema } from '../model/employee';

const Employee = mongoose.model('Employee', EmployeeSchema);
//to add new employee
export const addNewEmployee = (req, res) => {
    let newEmployee = new Employee(req.body);
    newEmployee.save().then(()=>{
        res.status(200).json(newEmployee);
    }).catch((err)=>{
        console.log(err);
        res.status(500).send('Server error');
    })
};

// to fetch all employees
export const getEmployeeAll = async (req, res) => {
    try{
        const data = await Employee.find();
        res.json(data)   
     }
    catch(error){
        console.log(err);
        res.status(500).send('Server error');
    }
  };
// to get single employee by id
export const getEmployeeById = async (req, res) => {
    try{
        const data = await Employee.findById(req.params.empId);
        
        if(data === null)
            res.send('data for enquiry is not found');
        else
            res.json(data) ;
             
    }
    catch(error){
        console.log(err);
        res.status(500).send('Server error');
    }
};

//to update employee by id
export const updateEmployee = async (req,res) => {
    try{
        const employeeId = req.params.empId;        
        const options = { new: true };
        const data = await Employee.findByIdAndUpdate(employeeId,req.body,options);
        if(data === null)
            res.send('data for update is not found');
        else
            res.json(data) ;
    }
    catch(error){
        console.log(err);
        res.status(500).send('Server error');
    }

};
//to delete employee by id
export const deleteEmployee = async (req,res) => {
    try{
        const data= await Employee.findByIdAndDelete(req.params.empId);
        if(data === null)
            res.send('data for update is not found');
        else
            res.send(`Data for ${data.firstName} is deleted`);
    }catch{
        res.status(500).send('Server error');
    }
};

// to get single employee by departname
export const getEmployeeByDep = async (req, res) => {
    try{
        const dept = req.params.depName;
        console.log(dept)
        const data = await Employee.findOne({ 'department': 'dept' }) ;
        if(data === null)
            res.send('data for enquiry is not found');
        else
            res.json(data) ;
             
    }
    catch(error){
        console.log(error);
        res.status(500).send('Server error');
    }
};