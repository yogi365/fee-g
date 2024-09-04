const employee = [
    {
        id:1,
        days:30,
        salaryId:2
    },
    {
        id:2,
        days:29,
        salaryId:1
    }
]

const salary = [
    {
        salaryId:1,
        gross:{
            base:58000,
            hra:15000
        },
        deduction:{
            tds:5000,
            pf:1500
        }
    },

    {
        salaryId:2,
        gross:{
            base:88000,
            hra:25000
        },
        deduction:{
            tds:10000,
            pf:1500
        }
    }
]

function calculateSalary(){
    employee.forEach(emp=>{
        const salaryObject = salary.find(salary=>{
            return salary.salaryId == emp.salaryId;
        })

        let totalGross = salaryObject.gross.base+salaryObject.gross.hra;
        let totalDeduction = salaryObject.deduction.tds + salaryObject.deduction.pf;
        let totalSalary = totalGross-totalDeduction;

        let date = new Date();
        let month = date.getMonth();
        let year = date.getFullYear();

        let currentMonthDays = new Date(month,year,0).getDate();

        let oneDaySalary = totalSalary/currentMonthDays;
        let thisMonthSalary = oneDaySalary * emp.days;
        console.log(`Salary of ${emp.id} is ${thisMonthSalary.toFixed(2)}`)
        
    })
}
calculateSalary()
