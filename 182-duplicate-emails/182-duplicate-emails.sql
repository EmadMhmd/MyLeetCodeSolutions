# Write your MySQL query statement below
Select email From Person Group By Email Having count(id) > 1 