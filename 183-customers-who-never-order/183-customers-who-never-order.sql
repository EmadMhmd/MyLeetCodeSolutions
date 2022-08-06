# Write your MySQL query statement below
Select name As Customers
From Customers As c
Where (Select Count(*) From Orders As o Where o.customerId = c.id) = 0 