# Using readline() 
import re
file1 = open('D:/blindchess/simple_chess_puzzles/puzzles_new.txt', 'r') 
filestr = "var gamedata = []\n"
while True: 
   
  
    # Get next line from file 
    line = file1.readline() 
  
    # if line is empty 
    # end of file is reached 
    if not line: 
        break
    x = line.split("/")
    if len(x) == 8:
        #print("--------")
        #print("FEN: " + line)
        filestr = filestr + "gamedata.push({\"startfen\":\"" + line.strip() + "\",\"moves\":\""
    if line.startswith('1.'):
        l = line.replace('1.', '')
        l = l.replace('.', '')
        
        l = re.sub(" \d+", "", l)
        #print("Sol: " + l.strip())
        filestr = filestr + l.strip() + "\"})\n"
        #print("--------")
#print(filestr)
file1.close() 
file2 = open("D:/blindchess/simple_chess_puzzles/matepuzzles.js", 'w') 

# Writing a string to file 
file2.write(filestr) 
  

file2.close() 
