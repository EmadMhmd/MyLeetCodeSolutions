# Write your MySQL query statement below

Select firstName, lastName, city, state
From Person As P left Join Address As A
on P.personId = A.personId 