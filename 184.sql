-- Write your MySQL query statement below
select Department.name as Department, Employee.name as Employee, salary as Salary
from Employee, Department
where Employee.departmentId=Department.id and (salary,departmentId) in (select max(salary), departmentId
    from Employee
    group by departmentId)