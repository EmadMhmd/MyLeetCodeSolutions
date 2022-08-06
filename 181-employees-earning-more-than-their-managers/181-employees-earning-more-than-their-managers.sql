# Write your MySQL query statement below
Select Name As Employee
From Employee As Emp
Where Salary > (Select Max(Salary) from Employee Where id = Emp.managerId)