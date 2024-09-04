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
        const salaryObject = salary.find(salaryObject=> 
            salaryObject.salaryId == emp.salaryId)
        let gross = salaryObject.gross.base+salaryObject.gross.hra;
        let workingSalary = (gross/30)* emp.days;
        let deduction = salaryObject.deduction.tds + salaryObject.deduction.pf;
        let totalSalary = workingSalary-deduction;
        console.log(totalSalary.toFixed(2))
        
    })
}
calculateSalary()