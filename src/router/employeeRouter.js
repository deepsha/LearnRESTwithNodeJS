
import { addNewEmployee, 
    getEmployeeAll, 
    getEmployeeById,updateEmployee,deleteEmployee,getEmployeeByDep
   } from '../controller/employeeController';

const routes = (app) => {

    app.route('/employee')
    .get((req,res, next) => {
        // middleware
        console.log(`Request type: ${req.method}`)
        next();  
    }, getEmployeeAll)
    .post(addNewEmployee);

    app.route('/employee/:empId')
    // get specific employee
    .get(getEmployeeById)
    // update a employee
    .put(updateEmployee)
    // to delete a employee
    .delete(deleteEmployee);


    app.route('/employee/dep/:depName')
    // get specific employee
    .get(getEmployeeByDep);
    
}

export default routes;
