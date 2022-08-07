# Write your MySQL query statement below
Select name
From Customer
Where IFNULL(referee_id, 0) != 2