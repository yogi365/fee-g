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
    
}
calculateSalary()
var d = new Date();
var month = d.getMonth();
var year =  d.getFullYear();
console.log(year)
console.log(month)
var d = new Date(9,2024,0).getDate();
    console.log(d);