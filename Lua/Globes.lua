--[[
There is (A) White Globes,There Is Two Times More Red Globes,And 3 Green Globes Less Than The Red Globes.
How many globes are there in total?
(Also,there cant be more than or 1000 white globes,or less than or 2 white globes.)
]]--
io.write("How many White Globes Are There?\n")
local a = io.read()
local whiteGlobes = toNumber(a)
io.write('\n')
io.write("There are "..a.." White Globes.")
io.write('\n')
local redGlobes = whiteGlobes * 2
io.write("There are "..tostring(redGlobes).." Red Globes.\n")
local greenGlobes = redGlobes - 3
io.write("There are "..tostring(greenGlobes).." Green Globes.\n")
local totalGlobes = whiteGlobes + redGlobes + greenGlobes
io.write("There are "..tostring(totalGlobes).." Total Globes.")
  
