var datadesc = new Map();
datadesc.set("main evaluation","Main evaluation")
datadesc.set("Isolated","Isolated pawns")
datadesc.set("Opposed","Opponent opposing pawn")
datadesc.set("Rank","Rank of square")
datadesc.set("File","File of square")
datadesc.set("Phalanx","Friendly pawn on adjacent file and same rank")
datadesc.set("Supported","Pawns supporting pawn")
datadesc.set("Backward","Behind all pawns")
datadesc.set("Doubled","Opponent pawn is doubled")
datadesc.set("Connected","Pawn is supported")
datadesc.set("Middle game evaluation","Middle game evaluation")
datadesc.set("End game evaluation","End game evaluation")
datadesc.set("Scale factor","Scale the endgame evaluation")
datadesc.set("Phase","Phase value for tapered eval")
datadesc.set("Imbalance","Material imbalance like Bishop pair")
datadesc.set("Bishop count","Number of bishops")
datadesc.set("Bishop pair","Has bishop pair")
datadesc.set("Pinned direction","Pieces pinned to King")
datadesc.set("Mobility","Attacking more squares")
datadesc.set("Mobility area","Attacking more squares")
datadesc.set("Mobility bonus","Attacking more square")
datadesc.set("Knight attack","Attacking Knight")
datadesc.set("Bishop xray attack","Bishop xray attack")
datadesc.set("Rook xray attack","Rook xray attack")
datadesc.set("Queen attack","Attacking Queen")
datadesc.set("Outpost","Knight or bishop outposts")
datadesc.set("Outpost square","Knight or bishop outposts")
datadesc.set("Reachable outpost","Outposts for Knight or bishop")
datadesc.set("Minor behind pawn","Knight or bishop when behind a pawn")
datadesc.set("Bishop pawns","Number of pawns on the same color square as the bishop")
datadesc.set("Rook on pawn","Rook aligned with enemy pawns on the same rank")
datadesc.set("Rook on file","Rook on an open or semi-open file")
datadesc.set("Trapped rook","Rook blocked by the king")
datadesc.set("Weak queen","Queen in pin")
datadesc.set("Space area","Safe squares")
datadesc.set("Pawn attack","Squares attcked by pawns")
datadesc.set("King attack","Squares attacked by King")
datadesc.set("Attack","Squares under attack")
datadesc.set("Non pawn material","non pawn materials")
datadesc.set("Safe pawn","Safe pawns")
datadesc.set("Threat safe pawn","Threat safe pawn")
datadesc.set("Weak enemies","Enemies not defended by a pawn and under our attack")
datadesc.set("Minor threat","Threat for knight and bishop attacking pieces")
datadesc.set("Rook threat","Attacked by rook pieces")
datadesc.set("Hanging","Twice attacked pieces")
datadesc.set("King threat","Threat by king")
datadesc.set("Pawn push threat","Open pawns")
datadesc.set("Rank threat","Rank threat")
datadesc.set("Passed square","Passed pawns")
datadesc.set("Candidate passed","Potential passed pawn")
datadesc.set("King proximity","King proximity")
datadesc.set("Passed block","Free to advance pawn")
datadesc.set("Passed file","Passed pawn file bonus")
datadesc.set("Passed rank","Passed pawn rank bonus")
datadesc.set("Passed mg","middlegame bonuses for passed pawns")
datadesc.set("Passed eg","Passed pawns")
datadesc.set("Pawnless flank","endgame bonuses for passed pawns")
datadesc.set("Strength square","King has shelter")
datadesc.set("Storm square","Enemy pawns storm")
datadesc.set("Shelter strength","King has shelter")
datadesc.set("Shelter storm","King has shelter")
datadesc.set("King danger","King in danger")
datadesc.set("King pawn distance","Minimal distance of king to pawns")
datadesc.set("Close enemies","Enemies close to king")
datadesc.set("Check","Possible checks by knight, bishop, rook or queen")
datadesc.set("Safe check","safe enemy's checks which are possible on next move")
datadesc.set("Queen count","number of queens")
datadesc.set("King attackers count","Attacking king")
datadesc.set("King attackers weight","Pieces attacking King")
datadesc.set("King attacks","number of attacks on King")
datadesc.set("Weak bonus","Weak squares in king ring")
datadesc.set("Weak squares","Attacked weak squares defended at most once by our queen or king")
datadesc.set("Initiative","initiative correction value for position")
datadesc.set("Unsafe checks","Unsafe checks or pinned opponent pieces")
datadesc.set("Tempo","Tempo")
datadesc.set("Pawn count","umber of pawns")
datadesc.set("Connected bonus","connected pawns")
datadesc.set("Mobility bonus","Mobile pieces")
datadesc.set("Piece value bonus","Material values for middlegame and engame")
datadesc.set("Psqt bonus","Better pieces")
datadesc.set("Piece value mg","Piece square table bonuses")
datadesc.set("Piece value eg","Piece square table bonuses")
datadesc.set("Psqt mg","Pieces on right squares")
datadesc.set("Psqt eg","Pieces on right squares")
datadesc.set("King protector","distance from the own king")
datadesc.set("Knight count","Knight count")
datadesc.set("Imbalance total","material imbalance")
datadesc.set("Weak unopposed pawn","pawn is weak and unopposed")
datadesc.set("Rook count","number of rooks")
datadesc.set("Opposite bishops","bishops of opposite colors")
datadesc.set("King distance","distance to our king")
datadesc.set("Long diagonal bishop","bishop on a long diagonal")
datadesc.set("Queen attack diagonal","Queen attacking diagonal")
datadesc.set("Pinned","absolute pin")
datadesc.set("King ring","square occupied by king and 8 squares around king")
datadesc.set("Slider on queen","safe slider attack threats on opponent queen")
datadesc.set("Knight on queen","safe knight attack threats on opponent queen")
datadesc.set("Outpost total","knights and bishops outposts")
datadesc.set("Pieces mg","pieces of a given color and type")
datadesc.set("Pieces eg","pieces of a given color and type")
datadesc.set("Restricted","restricting their piece moves")
datadesc.set("Threats mg","Middlegame threats")
datadesc.set("Threats eg","Endgame threats")
datadesc.set("Knight defender","Squares defended by knight near king")
datadesc.set("Bishop defender","Squares defended by bishop near king")
datadesc.set("Endgame shelter","endgame component to the blockedstorm")
datadesc.set("King mg","attacks on enemy king")
datadesc.set("King eg","attacks on enemy king")
datadesc.set("Attacks on space","Attacks on squares")
datadesc.set("Space","Controls space")
datadesc.set("Double attacked pawn","double attacks on unsupported pawns")
datadesc.set("Pawns mg","middlegame evaluation for pawns")
datadesc.set("Pawns eg","middlegame evaluation for pawns")

_staticEvalData = (function () {
var data = [], curindex = null;
data.push({"name":"Main evaluation","group":"","text":"<b>$</b>. An evaluation function is used to heuristically determine the relative value of a positions used in general case when no specialized evaluation or tablebase evaluation is available. In Stockfish it is never applied for positions where king of either side is in check. Resulting value is computed by combining [[Middle game evaluation]] and [[End game evaluation]]. We use <a class=\"external\" href=\"https://www.chessprogramming.org/Tapered_Eval\">Tapered Eval</a>, a technique used in evaluation to make a smooth transition between the phases of the game. [[Phase]] is a coeficient of simple linear combination. Before using  [[End game evaluation]] in this formula we also scale it down using [[Scale factor]].","code":"function $$(pos) {\n  var mg = $middle_game_evaluation(pos);\n  var eg = $end_game_evaluation(pos);\n  var p = $phase(pos), t = $tempo(pos);\n  eg = eg * $scale_factor(pos, eg) / 64;\n  return ((((mg * p + eg * (128 - p)) << 0) / 128) << 0) + t;\n}","links":[["https://www.chessprogramming.org/Evaluation","Evaluation in cpw"],["https://www.chessprogramming.org/Tapered_Eval","Tapered Eval in cpw"],["https://www.chessprogramming.org/Game_Phases","Game Phases in cpw"],["https://www.chessprogramming.org/Tempo","Tempo in cpw"]],"eval":true,"squares":0,"highlight":0,"forwhite":false});
data.push({"name":"Isolated","group":"Pawns","text":"<b>$</b> checks if pawn is isolated. In chess, an isolated pawn is a pawn which has no friendly pawn on an adjacent file.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  if (board(pos, square.x, square.y) != \"P\") return 0;\n  for (var y = 0 ; y < 8; y++) {\n    if (board(pos, square.x - 1, y) == \"P\") return 0;\n    if (board(pos, square.x + 1, y) == \"P\") return 0;\n  }\n  return 1;\n}","links":[["https://en.wikipedia.org/wiki/Isolated_pawn","Isolated pawn"]],"eval":true,"squares":0,"highlight":2,"forwhite":true,"graph":true,"elo":{"value":"14.8","error":"4.2","link":"http://tests.stockfishchess.org/tests/view/5a7b374d0ebc5902971a9a58"}});
data.push({"name":"Opposed","group":"Pawns","text":"<b>$</b> flag is set if there is opponent opposing pawn on the same file to prevent it from advancing.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  if (board(pos, square.x, square.y) != \"P\") return 0;\n  for (var y = 0; y < square.y; y++) {\n    if (board(pos, square.x, y) == \"p\") return 1;\n  }\n  return 0;\n}","links":[["https://www.chessprogramming.org/Evaluation","Evaluation"],["https://www.chessprogramming.org/Tapered_Eval","Tapered Eval"],["https://www.chessprogramming.org/Game_Phases","Game Phases"]],"eval":true,"squares":0,"highlight":2,"forwhite":true,"graph":false});
data.push({"name":"Rank","group":"Helpers","text":"<b>$</b> calculates rank of square.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  return 8 - square.y;\n}","links":[],"eval":true,"squares":2,"highlight":0,"forwhite":true});
data.push({"name":"File","group":"Helpers","text":"<b>$</b> calculates file of square.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  return 1 + square.x;\n}","links":[],"eval":true,"squares":2,"highlight":0,"forwhite":true});
data.push({"name":"Phalanx","group":"Pawns","text":"<b>$</b> flag is set if there is friendly pawn on adjacent file and same rank.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  if (board(pos, square.x, square.y) != \"P\") return 0;\n  if (board(pos, square.x - 1, square.y) == \"P\") return 1;\n  if (board(pos, square.x + 1, square.y) == \"P\") return 1;\n  return 0;\n}","links":[],"eval":true,"squares":0,"highlight":2,"forwhite":true,"graph":false});
data.push({"name":"Supported","group":"Pawns","text":"<b>$</b> counts number of pawns supporting this pawn.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  if (board(pos, square.x, square.y) != \"P\") return 0;\n  return (board(pos, square.x - 1, square.y + 1) == \"P\" ? 1 : 0)\n       + (board(pos, square.x + 1, square.y + 1) == \"P\" ? 1 : 0);\n}","links":[],"eval":true,"squares":1,"highlight":2,"forwhite":true,"graph":false});
data.push({"name":"Backward","group":"Pawns","text":"A pawn is <b>$</b> when it is behind all pawns of the same color on the adjacent files and cannot be safely advanced.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  if (board(pos, square.x, square.y) != \"P\") return 0;\n  for (var y = square.y; y < 8; y++) {\n    if (board(pos, square.x - 1, y) == \"P\"\n     || board(pos, square.x + 1, y) == \"P\") return 0;\n  }\n  if ($isolated(pos, square)) return 0;\n  if (board(pos, square.x - 1, square.y - 2) == \"p\"\n   || board(pos, square.x + 1, square.y - 2) == \"p\"\n   || board(pos, square.x    , square.y - 1) == \"p\") return 1;\n  return 0;\n}","links":[],"eval":true,"squares":0,"highlight":2,"forwhite":true,"graph":true,"elo":null});
data.push({"name":"Doubled","group":"Pawns","text":"<b>$</b> checks if pawn is doubled. In chess, an doubled pawn is a pawn which has another friendly pawn on same file but in Stockfish we attach doubled pawn penalty only for pawn which has another friendly pawn on square directly behind that pawn and is not supported.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  if (board(pos, square.x, square.y) != \"P\") return 0;\n  if (board(pos, square.x, square.y + 1) != \"P\") return 0;\n  if (board(pos, square.x - 1, square.y + 1) == \"P\") return 0;\n  if (board(pos, square.x + 1, square.y + 1) == \"P\") return 0;\n  return 1;\n}","links":[["https://en.wikipedia.org/wiki/Doubled_pawn","Doubled pawn"]],"eval":true,"squares":0,"highlight":2,"forwhite":true,"graph":true,"elo":{"value":"2.25","error":"2.9","link":"http://tests.stockfishchess.org/tests/view/5acf80740ebc59547e5380fe"}});
data.push({"name":"Connected","group":"Pawns","text":"<b>$</b> checks if pawn is [[Supported]] or [[Phalanx]].","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  if ($supported(pos, square) || $phalanx(pos, square)) return 1;\n  return 0;\n}","links":[],"eval":true,"squares":0,"highlight":2,"forwhite":true,"graph":true,"elo":{"value":"29.34","error":"4.4","link":"http://tests.stockfishchess.org/tests/view/5a7a1ab60ebc5902971a99ed"}});
data.push({"name":"Middle game evaluation","group":"","text":"<b>$</b>. Evaluates position for the middlegame and the opening phases.","code":"function $$(pos) {\n  var v = 0;\n  v += $piece_value_mg(pos) - $piece_value_mg(colorflip(pos));\n  v += $psqt_mg(pos) - $psqt_mg(colorflip(pos));\n  v += $imbalance_total(pos);\n  v += $pawns_mg(pos) - $pawns_mg(colorflip(pos));\n  v += $pieces_mg(pos) - $pieces_mg(colorflip(pos));\n  v += $mobility_mg(pos) - $mobility_mg(colorflip(pos));\n  v += $threats_mg(pos) - $threats_mg(colorflip(pos));\n  v += $passed_mg(pos) - $passed_mg(colorflip(pos));\n  v += $space(pos) - $space(colorflip(pos));\n  v += $king_mg(pos) - $king_mg(colorflip(pos));\n  return v;\n}","links":[],"eval":true,"squares":0,"highlight":0,"forwhite":false});
data.push({"name":"End game evaluation","group":"","text":"<b>$</b>. Evaluates position for the endgame phase.","code":"function $$(pos, noinitiative) {\n  var v = 0;\n  v += $piece_value_eg(pos) - $piece_value_eg(colorflip(pos));\n  v += $psqt_eg(pos) - $psqt_eg(colorflip(pos));\n  v += $imbalance_total(pos);\n  v += $pawns_eg(pos) - $pawns_eg(colorflip(pos));\n  v += $pieces_eg(pos) - $pieces_eg(colorflip(pos));\n  v += $mobility_eg(pos) - $mobility_eg(colorflip(pos));\n  v += $threats_eg(pos) - $threats_eg(colorflip(pos));\n  v += $passed_eg(pos) - $passed_eg(colorflip(pos));\n  v += $king_eg(pos) - $king_eg(colorflip(pos));\n  if (!noinitiative) v += $initiative_total(pos, v);\n  return v;\n}","links":[],"eval":true,"squares":0,"highlight":0,"forwhite":false,"graph":false});
data.push({"name":"Scale factor","group":"","text":"<b>$</b>. The scale factors are used to scale the endgame evaluation score down.","code":"function $$(pos, eg) {\n  if (eg == null) eg = $end_game_evaluation(pos);\n  var pos_w = eg > 0 ? pos : colorflip(pos);\n  var pos_b = eg > 0 ? colorflip(pos) : pos;\n  var sf = 64;\n  var pc_w = $pawn_count(pos_w);\n  var pc_b = $pawn_count(pos_b);\n  var npm_w = $non_pawn_material(pos_w);\n  var npm_b = $non_pawn_material(pos_b);\n  var bishopValueMg = 830, bishopValueEg = 918, rookValueMg = 1289;\n  if (pc_w == 0 && npm_w - npm_b <= bishopValueMg) sf = npm_w < rookValueMg ? 0 : npm_b <= bishopValueMg ? 4 : 14;\n  if (sf == 64) {\n    var ob = $opposite_bishops(pos);\n    if (ob && npm_w == bishopValueMg && npm_b == bishopValueMg) {\n      sf = 16 + 4 * ($candidate_passed(pos) + $candidate_passed(colorflip(pos)));\n    } else {\n      sf = Math.min(40 + (ob ? 2 : 7) * pc_w, sf);\n    }\n  }\n  return sf;\n}","links":[["https://www.chessprogramming.org/Bishops_of_Opposite_Colors","Bishops of Opposite Colors in cpw"]],"eval":true,"squares":0,"highlight":0,"forwhite":true,"graph":false,"elo":null});
data.push({"name":"Phase","group":"","text":"<b>$</b>. We define phase value for tapered eval based on the amount of non-pawn material on the board.","code":"function $$(pos) {\n  var midgameLimit = 15258, endgameLimit  = 3915;\n  var npm = $non_pawn_material(pos) + $non_pawn_material(colorflip(pos));\n  npm = Math.max(endgameLimit, Math.min(npm, midgameLimit));\n  return (((npm - endgameLimit) * 128) / (midgameLimit - endgameLimit)) << 0;\n}","links":[["https://www.chessprogramming.org/Game_Phases","Game Phases in cpw"],["https://www.chessprogramming.org/Tapered_Eval","Tapered Eval in cpw"]],"eval":true,"squares":0,"highlight":0,"forwhite":false});
data.push({"name":"Imbalance","group":"Imbalance","text":"<b>$</b> calculates the imbalance by comparing the piece count of each piece type for both colors. Evaluate the material imbalance. We use a place holder for the bishop pair \"extended piece\", which allows us to be more flexible in defining bishop pair bonuses.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  var qo = [[0],[40,38],[32,255,-62],[0,104,4,0],[-26,-2,47,105,-208],[-189,24,117,133,-134,-6]];\n  var qt = [[0],[36,0],[9,63,0],[59,65,42,0],[46,39,24,-24,0],[97,100,-42,137,268,0]];\n  var j = \"XPNBRQxpnbrq\".indexOf(board(pos, square.x, square.y));\n  if (j < 0 || j > 5) return 0;\n  var bishop = [0, 0], v = 0;\n  for (var x = 0; x < 8; x++) {\n    for (var y = 0; y < 8; y++) {\n      var i = \"XPNBRQxpnbrq\".indexOf(board(pos, x, y));\n      if (i < 0) continue;\n      if (i == 9) bishop[0]++;\n      if (i == 3) bishop[1]++;\n      if (i % 6 > j) continue;\n      if (i > 5) v += qt[j][i-6];\n            else v += qo[j][i];\n    }\n  }\n  if (bishop[0] > 1) v += qt[j][0];\n  if (bishop[1] > 1) v += qo[j][0];\n  return v;\n}","links":[],"eval":true,"squares":1,"highlight":0,"forwhite":true,"graph":true,"elo":null});
data.push({"name":"Bishop count","group":"Helpers","text":"<b>$</b> counts number of our bishops.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  if (board(pos, square.x, square.y) == \"B\") return 1;\n  return 0;\n}","links":[],"eval":true,"squares":1,"highlight":2,"forwhite":true});
data.push({"name":"Bishop pair","group":"Imbalance","text":"<b>$</b>. The player with two bishops is said to have the bishop pair.","code":"function $$(pos, square) {\n  if ($bishop_count(pos) < 2) return 0;\n  if (square == null) return 1438;\n  return board(pos, square.x, square.y) == \"B\" ? 1 : 0;\n}","links":[["https://www.chessprogramming.org/Bishop_Pair","Bishop Pair on cpw"]],"eval":true,"squares":0,"highlight":2,"forwhite":true,"graph":true,"elo":null});
data.push({"name":"Pinned direction","group":"Attack","text":"<b>$</b>. Helper function for detecting blockers for king. For our pinned pieces result is positive for enemy blockers negative and value encodes direction of pin. 1 - horizontal, 2 - topleft to bottomright, 3 - vertical, 4 - topright to bottomleft","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  if (\"PNBRQK\".indexOf(board(pos, square.x, square.y).toUpperCase()) < 0) return 0;\n  var color = 1;\n  if (\"PNBRQK\".indexOf(board(pos, square.x, square.y)) < 0) color = -1;\n  for (var i = 0; i < 8; i++) {\n    var ix = (i + (i > 3)) % 3 - 1;\n    var iy = (((i + (i > 3)) / 3) << 0) - 1;\n    var king = false;\n    for (var d = 1; d < 8; d++) {\n      var b = board(pos, square.x + d * ix, square.y + d * iy);\n      if (b == \"K\") king = true;\n      if (b != \"-\") break;\n    }\n    if (king) {\n      for (var d = 1; d < 8; d++) {\n        var b = board(pos, square.x - d * ix, square.y - d * iy);\n        if (b == \"q\"\n         || b == \"b\" && ix * iy != 0\n         || b == \"r\" && ix * iy == 0) return Math.abs(ix + iy * 3) * color;\n        if (b != \"-\") break;\n      }\n    }\n  }\n  return 0;\n}","links":[["https://en.wikipedia.org/wiki/Pin_(chess)","Pin in wikipedia"],["https://www.chessprogramming.org/Pin","Pin in cpw"]],"eval":true,"squares":1,"highlight":2,"forwhite":true,"graph":false,"elo":null});
data.push({"name":"Mobility","group":"Mobility","text":"<b>$</b>. Number of attacked squares in the [[Mobility area]]. For queen squares defended by opponent knight, bishop or rook are ignored. For minor pieces squares occupied by our  queen are ignored.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  var v = 0;  \n  var b = board(pos, square.x, square.y);\n  if (\"NBRQ\".indexOf(b) < 0) return 0;\n  for (var x = 0; x < 8; x++) {\n    for(var y = 0; y < 8; y++) {\n      var s2 = {x:x, y:y};\n      if (!$mobility_area(pos, s2)) continue;\n      if (b == \"N\" && $knight_attack(pos, s2, square) && board(pos, x, y) != 'Q') v++;\n      if (b == \"B\" && $bishop_xray_attack(pos, s2, square) && board(pos, x, y) != 'Q') v++;\n      if (b == \"R\" && $rook_xray_attack(pos, s2, square)) v++;\n      if (b == \"Q\" && $queen_attack(pos, s2, square)) v++;\n    }\n  }\n  return v;\n}","links":[],"eval":true,"squares":1,"highlight":2,"forwhite":true,"graph":false});
data.push({"name":"Mobility area","group":"Mobility","text":"<b>$</b>. Do not include in mobility area squares protected by enemy pawns, or occupied by our blocked pawns or king. Pawns blocked or on ranks 2 and 3 will be excluded from the mobility area.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  if (board(pos, square.x, square.y) == \"K\") return 0;\n  if (board(pos, square.x, square.y) == \"Q\") return 0;\n  if (board(pos, square.x - 1, square.y - 1) == \"p\") return 0;\n  if (board(pos, square.x + 1, square.y - 1) == \"p\") return 0;\n  if (board(pos, square.x, square.y) == \"P\" &&\n     ($rank(pos, square) < 4 || board(pos, square.x, square.y - 1) != \"-\")) return 0;\n  return 1;\n}","links":[],"eval":true,"squares":1,"highlight":0,"forwhite":true,"graph":false,"elo":null});
data.push({"name":"Mobility bonus","group":"Mobility","text":"<b>$</b> attach bonuses for middlegame and endgame by piece type and [[Mobility]].","code":"function $$(pos, square, mg) {\n  if (square == null) return sum(pos, $$, mg);\n  var bonus = mg ? [\n    [-62,-53,-12,-4,3,13,22,28,33],\n    [-48,-20,16,26,38,51,55,63,63,68,81,81,91,98],\n    [-58,-27,-15,-10,-5,-2,9,16,30,29,32,38,46,48,58],\n    [-39,-21,3,3,14,22,28,41,43,48,56,60,60,66,67,70,71,73,79,88,88,99,102,102,106,109,113,116]\n  ] : [\n    [-81,-56,-30,-14,8,15,23,27,33],\n    [-59,-23,-3,13,24,42,54,57,65,73,78,86,88,97],\n    [-76,-18,28,55,69,82,112,118,132,142,155,165,166,169,171],\n    [-36,-15,8,18,34,54,61,73,79,92,94,104,113,120,123,126,133,136,140,143,148,166,170,175,184,191,206,212]\n  ];\n  var i = \"NBRQ\".indexOf(board(pos, square.x, square.y));\n  if (i < 0) return 0;\n  return bonus[i][$mobility(pos, square)];\n}","links":[],"eval":false,"squares":0,"highlight":0,"forwhite":true,"graph":true,"elo":null});
data.push({"name":"Knight attack","group":"Attack","text":"<b>$</b> counts number of attacks on square by knight.","code":"function $$(pos, square, s2) {\n  if (square == null) return sum(pos, $$);\n  var v = 0;\n  for (var i = 0; i < 8; i++) {\n    var ix = ((i > 3) + 1) * (((i % 4) > 1) * 2 - 1);\n    var iy = (2 - (i > 3)) * ((i % 2 == 0) * 2 - 1);\n    var b = board(pos, square.x + ix, square.y + iy);\n    if (b == \"N\"\n    && (s2 == null || s2.x == square.x + ix && s2.y == square.y + iy)\n    && !$pinned(pos, {x:square.x + ix, y:square.y + iy})) v++;\n  }\n  return v;\n}","links":[],"eval":true,"squares":1,"highlight":2,"forwhite":true,"graph":false});
data.push({"name":"Bishop xray attack","group":"Attack","text":"<b>$</b> counts number of attacks on square by bishop. Includes x-ray attack through queens.","code":"function $$(pos, square, s2) {\n  if (square == null) return sum(pos, $$);\n  var v = 0;\n  for (var i = 0; i < 4; i++) {\n    var ix = ((i > 1) * 2 - 1);\n    var iy = ((i % 2 == 0) * 2 - 1);\n    for (var d = 1; d < 8; d++) {\n      var b = board(pos, square.x + d * ix, square.y + d * iy);\n      if (b == \"B\"\n      && (s2 == null || s2.x == square.x + d * ix && s2.y == square.y + d * iy)) {\n        var dir = $pinned_direction(pos, {x:square.x+d*ix, y:square.y+d*iy});\n        if (dir == 0 || Math.abs(ix+iy*3) == dir) v++;\n      }\n      if (b != \"-\" && b != \"Q\" && b != \"q\") break;\n    }\n  }\n  return v;\n}","links":[],"eval":true,"squares":1,"highlight":2,"forwhite":true,"graph":false});
data.push({"name":"Rook xray attack","group":"Attack","text":"<b>$</b> counts number of attacks on square by rook. Includes x-ray attack through queens and our rook.","code":"function $$(pos, square, s2) {\n  if (square == null) return sum(pos, $$);\n  var v = 0;\n  for (var i = 0; i < 4; i++) {\n    var ix = (i == 0 ? -1 : i == 1 ? 1 : 0);\n    var iy = (i == 2 ? -1 : i == 3 ? 1 : 0);\n    for (var d = 1; d < 8; d++) {\n      var b = board(pos, square.x + d * ix, square.y + d * iy);\n      if (b == \"R\"\n      && (s2 == null || s2.x == square.x + d * ix && s2.y == square.y + d * iy)) {\n        var dir = $pinned_direction(pos, {x:square.x+d*ix, y:square.y+d*iy});\n        if (dir == 0 || Math.abs(ix+iy*3) == dir) v++;\n      }\n      if (b != \"-\" && b != \"R\" && b != \"Q\" && b != \"q\") break;\n    }\n  }\n\n  return v;\n}","links":[],"eval":true,"squares":1,"highlight":2,"forwhite":true,"graph":false});
data.push({"name":"Queen attack","group":"Attack","text":"<b>$</b> counts number of attacks on square by queen.","code":"function $$(pos, square, s2) {\n  if (square == null) return sum(pos, $$);\n  var v = 0;\n  for (var i = 0; i < 8; i++) {\n    var ix = (i + (i > 3)) % 3 - 1;\n    var iy = (((i + (i > 3)) / 3) << 0) - 1;\n    for (var d = 1; d < 8; d++) {\n      var b = board(pos, square.x + d * ix, square.y + d * iy);\n      if (b == \"Q\"\n      && (s2 == null || s2.x == square.x + d * ix && s2.y == square.y + d * iy)) {\n        var dir = $pinned_direction(pos, {x:square.x+d*ix, y:square.y+d*iy});\n        if (dir == 0 || Math.abs(ix+iy*3) == dir) v++;\n      }\n      if (b != \"-\") break;\n    }\n  }\n  return v;\n}","links":[],"eval":true,"squares":1,"highlight":2,"forwhite":true,"graph":false});
data.push({"name":"Outpost","group":"Pieces","text":"<b>$</b>. Outpost for knight or bishop.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  if (board(pos, square.x, square.y) != \"N\"\n   && board(pos, square.x, square.y) != \"B\") return 0;\n  if (!$outpost_square(pos, square)) return 0;\n  return 1;\n}","links":[],"eval":true,"squares":1,"highlight":2,"forwhite":true,"graph":false});
data.push({"name":"Outpost square","group":"Pieces","text":"<b>$</b>. Outpost squares for knight or bishop.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  if ($rank(pos, square) < 4 || $rank(pos, square) > 6) return 0;\n  if (board(pos, square.x - 1, square.y + 1) != \"P\"\n   && board(pos, square.x + 1, square.y + 1) != \"P\") return 0;\n  for (var y = 0; y < square.y; y++) {\n    if (board(pos, square.x - 1, y) == \"p\") return 0;\n    if (board(pos, square.x + 1, y) == \"p\") return 0;\n  }\n  return 1;\n}","links":[],"eval":true,"squares":1,"highlight":2,"forwhite":true,"graph":true,"elo":null});
data.push({"name":"Reachable outpost","group":"Pieces","text":"<b>$</b>. Knights and bishops which can reach an outpost square in one move.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  if (board(pos, square.x, square.y) != \"B\"\n   && board(pos, square.x, square.y) != \"N\") return 0;\n  var v = 0;\n  for (var x = 0; x < 8; x++) {\n    for (var y = 2; y < 5; y++) {\n      if ((board(pos, square.x, square.y) == \"N\"\n        && \"PNBRQK\".indexOf(board(pos, x, y)) < 0\n        && $knight_attack(pos, {x:x,y:y}, square)\n        && $outpost_square(pos, {x:x,y:y}))\n       || (board(pos, square.x, square.y) == \"B\"\n        && \"PNBRQK\".indexOf(board(pos, x, y)) < 0\n        && $bishop_xray_attack(pos, {x:x,y:y}, square)\n        && $outpost_square(pos, {x:x,y:y}))) {\n        var support = board(pos, x - 1, y + 1) == \"P\" || board(pos, x + 1, y + 1) == \"P\" ? 2 : 1;\n        v = Math.max(v, support);\n      }\n    }\n  }\n  return v;\n}","links":[],"eval":true,"squares":1,"highlight":2,"forwhite":true,"graph":false});
data.push({"name":"Minor behind pawn","group":"Pieces","text":"<b>$</b>. Knight or bishop when behind a pawn.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  if (board(pos, square.x, square.y) != \"B\"\n   && board(pos, square.x, square.y) != \"N\") return 0;\n  if (board(pos, square.x, square.y - 1).toUpperCase() != \"P\") return 0;\n  return 1;\n}","links":[],"eval":true,"squares":1,"highlight":2,"forwhite":true,"graph":true,"elo":{"value":"-0.35","error":"4.5","link":"http://tests.stockfishchess.org/tests/view/5a723b850ebc590f2c86e9e5"}});
data.push({"name":"Bishop pawns","group":"Pieces","text":"<b>$</b>. Number of pawns on the same color square as the bishop multiplied by one plus the number of our blocked pawns in the center files C, D, E or F.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  if (board(pos, square.x, square.y) != \"B\") return 0;\n  var c = (square.x + square.y) % 2, v = 0;\n  var blocked = 0;\n  for (var x = 0; x < 8; x++) {\n    for (var y = 0; y < 8; y++) {\n      if (board(pos, x, y) == \"P\" && c == (x + y) % 2) v++;\n      if (board(pos, x, y) == \"P\"\n       && x > 1 && x < 6\n       && board(pos, x, y - 1) != \"-\") blocked++;\n    }\n  }\n  return v * (blocked + 1);\n}","links":[],"eval":true,"squares":1,"highlight":2,"forwhite":true,"graph":true,"elo":{"value":"10.57","error":"4.6","link":"http://tests.stockfishchess.org/tests/view/5a7262390ebc590f2c86e9fc"}});
data.push({"name":"Rook on pawn","group":"Pieces","text":"<b>$</b>. Rook aligned with enemy pawns on the same rank/file.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  if (board(pos, square.x, square.y) != \"R\") return 0;\n  if ($rank(pos, square) < 5) return 0;\n  var v = 0;  \n  for (var x = 0; x < 8; x++) {\n    if (board(pos, x, square.y) == \"p\") v++;\n  }\n  for (var y = 0; y < 8; y++) {\n    if (board(pos, square.x, y) == \"p\") v++;\n  }\n  return v;\n}","links":[],"eval":true,"squares":1,"highlight":2,"forwhite":true,"graph":true,"elo":{"value":"2.61","error":"4.6","link":"http://tests.stockfishchess.org/tests/view/5a73024b0ebc5902971a9658"}});
data.push({"name":"Rook on file","group":"Pieces","text":"<b>$</b>. Rook when on an open or semi-open file.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  if (board(pos, square.x, square.y) != \"R\") return 0;\n  var open = 1;\n  for (var y = 0; y < 8; y++) {\n    if (board(pos, square.x, y) == \"P\") return 0;\n    if (board(pos, square.x, y) == \"p\") open = 0;\n  }\n  return open + 1;\n}","links":[],"eval":true,"squares":1,"highlight":2,"forwhite":true,"graph":true,"elo":{"value":"13.59","error":"4.2","link":"http://tests.stockfishchess.org/tests/view/5a78c23c0ebc5902971a991b"}});
data.push({"name":"Trapped rook","group":"Pieces","text":"<b>$</b>. Penalize rook when trapped by the king, even more if the king cannot castle.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  if (board(pos, square.x, square.y) != \"R\") return 0;\n  if ($rook_on_file(pos, square)) return 0;\n  if ($mobility(pos, square)> 3) return 0;\n  var kx = 0, ky = 0;\n  for (var x = 0; x < 8; x++) {\n    for (var y = 0; y < 8; y++) {\n      if (board(pos, x, y) == \"K\") { kx = x; ky = y; }\n    }\n  }\n  if ((kx < 4) != (square.x < kx)) return 0;\n  return 1;\n}","links":[],"eval":true,"squares":1,"highlight":2,"forwhite":true,"graph":true,"elo":{"value":"2.92","error":"3.7","link":"http://tests.stockfishchess.org/tests/view/5a876e560ebc590297cc82d9"}});
data.push({"name":"Weak queen","group":"Pieces","text":"<b>$</b>. Penalty if any relative pin or discovered attack against the queen.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  if (board(pos, square.x, square.y) != \"Q\") return 0;\n  for (var i = 0; i < 8; i++) {\n    var ix = (i + (i > 3)) % 3 - 1;\n    var iy = (((i + (i > 3)) / 3) << 0) - 1;\n    var count = 0;\n    for (var d = 1; d < 8; d++) {\n      var b = board(pos, square.x + d * ix, square.y + d * iy);\n      if (b == \"r\" && (ix == 0 || iy == 0) && count == 1) return 1;\n      if (b == \"b\" && (ix != 0 && iy != 0) && count == 1) return 1;\n      if (b != \"-\") count++;\n    }\n  }\n  return 0;\n}","links":[],"eval":true,"squares":1,"highlight":2,"forwhite":true,"graph":true,"elo":{"value":"6.36","error":"4.6","link":"http://tests.stockfishchess.org/tests/view/5a73900b0ebc5902971a96a8"}});
data.push({"name":"Space area","group":"Space","text":"<b>$</b>. Number of safe squares available for minor pieces on the central four files on ranks 2 to 4. Safe squares one, two or three squares behind a friendly pawn are counted twice.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  var v = 0;\n  var rank = $rank(pos, square);\n  var file = $file(pos, square);\n  if ((rank >= 2 && rank <= 4 && file >= 3 && file <= 6)\n   && (board(pos, square.x ,square.y) != \"P\")\n   && (board(pos, square.x - 1 ,square.y - 1) != \"p\")\n   && (board(pos, square.x + 1 ,square.y - 1) != \"p\")) {\n    v++;\n    if (board(pos, square.x, square.y - 1) == \"P\"\n     || board(pos, square.x, square.y - 2) == \"P\"\n     || board(pos, square.x, square.y - 3) == \"P\") v++;\n  }   \n  return v;\n}","links":[],"eval":true,"squares":1,"highlight":2,"forwhite":true,"graph":false});
data.push({"name":"Pawn attack","group":"Attack","text":"<b>$</b> counts number of attacks on square by pawn. Pins or en-passant attacks are not considered here.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  var v = 0;\n  if (board(pos, square.x - 1, square.y + 1) == \"P\") v++;\n  if (board(pos, square.x + 1, square.y + 1) == \"P\") v++;\n  return v;\n}","links":[],"eval":true,"squares":1,"highlight":2,"forwhite":true,"graph":false,"elo":null});
data.push({"name":"King attack","group":"Attack","text":"<b>$</b> counts number of attacks on square by king.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  for (var i = 0; i < 8; i++) {\n    var ix = (i + (i > 3)) % 3 - 1;\n    var iy = (((i + (i > 3)) / 3) << 0) - 1;\n    if (board(pos, square.x + ix, square.y + iy) == \"K\") return 1;\n  }\n  \n \n  return 0;\n}","links":[],"eval":true,"squares":1,"highlight":2,"forwhite":true});
data.push({"name":"Attack","group":"Attack","text":"<b>$</b> counts number of attacks on square by all pieces. For bishop and rook x-ray attacks are included. For pawns pins or en-passant are ignored.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  var v = 0;\n  v += $pawn_attack(pos, square);\n  v += $king_attack(pos, square);\n  v += $knight_attack(pos, square);\n  v += $bishop_xray_attack(pos, square);\n  v += $rook_xray_attack(pos, square);\n  v += $queen_attack(pos, square);\n  return v;\n}","links":[],"eval":true,"squares":1,"highlight":0,"forwhite":true});
data.push({"name":"Non pawn material","group":"Material","text":"<b>$</b>. Middlegame value of non-pawn material.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  var i = \"NBRQ\".indexOf(board(pos, square.x, square.y));\n  if (i >= 0) return $piece_value_bonus(pos, square, true);\n  return 0;\n}","links":[],"eval":true,"squares":1,"highlight":0,"forwhite":true,"graph":false});
data.push({"name":"Safe pawn","group":"Threats","text":"<b>$</b>. Check if our pawn is not attacked or is defended.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  if (board(pos, square.x, square.y) != \"P\") return 0;\n  if ($attack(pos, square)) return 1;\n  if (!$attack(colorflip(pos), {x:square.x,y:7-square.y})) return 1;\n  return 0;\n}","links":[],"eval":true,"squares":1,"highlight":2,"forwhite":true});
data.push({"name":"Threat safe pawn","group":"Threats","text":"<b>$</b>. Non-pawn enemies attacked by a [[Safe pawn]].","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  if (\"nbrq\".indexOf(board(pos, square.x, square.y)) < 0) return 0;\n  if (!$pawn_attack(pos, square)) return 0;\n  if ($safe_pawn(pos, {x:square.x - 1, y:square.y + 1})\n   || $safe_pawn(pos, {x:square.x + 1, y:square.y + 1})) return 1;\n  return 0;\n}","links":[],"eval":true,"squares":1,"highlight":2,"forwhite":true,"graph":true,"elo":{"value":14.95,"error":4.6,"link":"http://tests.stockfishchess.org/tests/view/5a74bb6f0ebc5902971a9701"}});
data.push({"name":"Weak enemies","group":"Threats","text":"<b>$</b>. Enemies not defended by a pawn and under our attack.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  if (\"pnbrqk\".indexOf(board(pos, square.x, square.y)) < 0) return 0;\n  if (board(pos, square.x - 1, square.y - 1) == \"p\") return 0;\n  if (board(pos, square.x + 1, square.y - 1) == \"p\") return 0;\n  if (!$attack(pos, square)) return 0;\n  if ($attack(pos, square) <= 1\n   && $attack(colorflip(pos),{x:square.x,y:7-square.y}) > 1) return 0\n  return 1;\n}","links":[],"eval":true,"squares":1,"highlight":2,"forwhite":true,"graph":false});
data.push({"name":"Minor threat","group":"Threats","text":"<b>$</b>. Threat type for knight and bishop attacking pieces.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  var type = \"pnbrqk\".indexOf(board(pos, square.x, square.y));\n  if (type < 0) return 0;\n  if (!$knight_attack(pos, square) && !$bishop_xray_attack(pos, square)) return 0;\n  if ((board(pos, square.x, square.y) == \"p\"\n       || !(board(pos, square.x - 1, square.y - 1) == \"p\"\n         || board(pos, square.x + 1, square.y - 1) == \"p\"\n         || ($attack(pos, square) <= 1 && $attack(colorflip(pos),{x:square.x,y:7-square.y}) > 1)))\n    && !$weak_enemies(pos, square)) return 0;\n  return type + 1;\n}","links":[],"eval":true,"squares":1,"highlight":2,"forwhite":true,"graph":true});
data.push({"name":"Rook threat","group":"Threats","text":"<b>$</b>. Threat type for attacked by rook pieces.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  var type = \"pnbrqk\".indexOf(board(pos, square.x, square.y));\n  if (type < 0) return 0;\n  if (!$weak_enemies(pos, square)) return 0;\n  if (!$rook_xray_attack(pos, square)) return 0;\n  return type + 1;\n}","links":[],"eval":true,"squares":1,"highlight":2,"forwhite":true,"graph":true,"elo":{"value":"10.98","error":"4.2","link":"http://tests.stockfishchess.org/tests/view/5a7a14000ebc5902971a99e6"}});
data.push({"name":"Hanging","group":"Threats","text":"<b>$</b>. [[Weak enemies]] not defended by opponent or non-pawn [[weak enemies]] attacked twice.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  if (!$weak_enemies(pos, square)) return 0;\n  if (board(pos, square.x, square.y) != \"p\" && $attack(pos, square) > 1) return 1;\n  if (!$attack(colorflip(pos), {x:square.x,y:7-square.y})) return 1;\n  return 0;\n}","links":[],"eval":true,"squares":1,"highlight":2,"forwhite":true,"graph":true,"elo":{"value":"2.78","error":"4.6","link":"http://tests.stockfishchess.org/tests/view/5a74c1ef0ebc5902971a9707"}});
data.push({"name":"King threat","group":"Threats","text":"<b>$</b>. Threat by king.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  if (\"pnbrq\".indexOf(board(pos, square.x, square.y)) < 0) return 0;\n  if (!$weak_enemies(pos, square)) return 0;\n  if (!$king_attack(pos, square)) return 0;\n  return 1;\n}","links":[],"eval":true,"squares":1,"highlight":2,"forwhite":true,"graph":true,"elo":{"value":"4.69","error":"4.2","link":"http://tests.stockfishchess.org/tests/view/5a7a4dea0ebc5902971a99ff"}});
data.push({"name":"Pawn push threat","group":"Threats","text":"<b>$</b>. Bonus if some pawns can safely push and attack an enemy piece.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  if (\"pnbrqk\".indexOf(board(pos, square.x, square.y)) < 0) return 0;\n  for (var ix = -1; ix <= 1; ix += 2) {\n    if (board(pos, square.x + ix, square.y + 2) == \"P\"\n     && board(pos, square.x + ix, square.y + 1) == \"-\"\n     && board(pos, square.x + ix - 1, square.y) != \"p\"\n     && board(pos, square.x + ix + 1, square.y) != \"p\"\n     && ($attack(pos, {x:square.x+ix,y:square.y+1})\n         || !$attack(colorflip(pos),{x:square.x+ix,y:6-square.y}))\n     ) return 1;\n\n    if (square.y == 3\n     && board(pos, square.x + ix, square.y + 3) == \"P\"\n     && board(pos, square.x + ix, square.y + 2) == \"-\"\n     && board(pos, square.x + ix, square.y + 1) == \"-\"\n     && board(pos, square.x + ix - 1, square.y) != \"p\"\n     && board(pos, square.x + ix + 1, square.y) != \"p\"\n     && ($attack(pos, {x:square.x+ix,y:square.y+1})\n         || !$attack(colorflip(pos),{x:square.x+ix,y:6-square.y}))\n     ) return 1;\n  }\n  return 0;\n}","links":[],"eval":true,"squares":1,"highlight":2,"forwhite":true,"graph":true,"elo":{"value":"7.89","error":"4.5","link":"http://tests.stockfishchess.org/tests/view/5a74f1300ebc5902971a9717"}});
data.push({"name":"Rank threat","group":"Threats","text":"<b>$</b>. Threat bonus depending on rank only applied if multiple threats from minors or rooks are present.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  return (($minor_threat(pos, square) > 1)\n        + ($rook_threat(pos, square) > 1)\n  ) * square.y;\n}","links":[],"eval":true,"squares":1,"highlight":2,"forwhite":true,"graph":true,"elo":{"value":"1.56","error":"4.6","link":"http://tests.stockfishchess.org/tests/view/5a74bd040ebc5902971a9703"}});
data.push({"name":"Passed square","group":"Passed pawns","text":"<b>$</b> checks if you put own pawn on square it is passed. Pawn is passed if there are no opposing pawns in front of it on the same file nor on an adjacent file.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  for (var y = 0 ; y < square.y; y++) {\n    if (board(pos, square.x - 1, y) == \"p\") return 0;\n    if (board(pos, square.x    , y) == \"p\") return 0;\n    if (board(pos, square.x + 1, y) == \"p\") return 0;\n    if (board(pos, square.x    , y) == \"P\") return 0;\n  }\n  return 1;\n}","links":[["https://en.wikipedia.org/wiki/Passed_pawn","Passed pawn"]],"eval":true,"squares":1,"highlight":0,"forwhite":true,"graph":false});
data.push({"name":"Candidate passed","group":"Passed pawns","text":"<b>$</b> checks if pawn is passed or candidate passer. Pawn is passed if there are no opposing pawns in front of it on the same file nor on an adjacent file. Include also not passed pawns which could become passed after one or two pawn pushes when are not attacked more times than defended.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  if (board(pos, square.x, square.y) != \"P\") return 0;\n  var ty1 = 8, ty2 = 8, oy = 8;\n  for (var y = square.y - 1; y >= 0; y--) {\n    if (board(pos, square.x    , y) == \"p\") ty1 = y;\n    if (board(pos, square.x - 1, y) == \"p\"\n     || board(pos, square.x + 1, y) == \"p\") ty2 = y;\n  }\n  if (ty1 == 8 && ty2 >= square.y - 1) return 1;\n  if (ty2 < square.y - 2 || ty1 < square.y - 1) return 0;\n  if (ty2 >= square.y && ty1 == square.y - 1 && square.y < 4) {\n    if (board(pos, square.x - 1, square.y + 1) == \"P\"\n     && board(pos, square.x - 1, square.y    ) != \"p\"\n     && board(pos, square.x - 2, square.y - 1) != \"p\") return 1;\n    if (board(pos, square.x + 1, square.y + 1) == \"P\"\n     && board(pos, square.x + 1, square.y    ) != \"p\"\n     && board(pos, square.x + 2, square.y - 1) != \"p\") return 1;\n  }\n  if (board(pos, square.x, square.y - 1) == \"p\") return 0;\n  var lever = (board(pos, square.x - 1, square.y - 1) == \"p\" ? 1 : 0)\n             + (board(pos, square.x + 1, square.y - 1) == \"p\" ? 1 : 0);\n  var leverpush = (board(pos, square.x - 1, square.y - 2) == \"p\" ? 1 : 0)\n                + (board(pos, square.x + 1, square.y - 2) == \"p\" ? 1 : 0);\n  var phalanx = (board(pos, square.x - 1, square.y) == \"P\" ? 1 : 0)\n              + (board(pos, square.x + 1, square.y) == \"P\" ? 1 : 0);\n  if (lever - $supported(pos, square) > 1) return 0;\n  if (leverpush - phalanx  > 0) return 0;\n  if (lever > 0 && leverpush > 0) return 0;\n  return 1;\n}","links":[["https://en.wikipedia.org/wiki/Passed_pawn","Passed pawn"]],"eval":true,"squares":0,"highlight":2,"forwhite":true,"graph":false,"elo":null});
data.push({"name":"King proximity","group":"Passed pawns","text":"<b>$</b> is endgame bonus based on the king's proximity. If block square is not the queening square then consider also a second push.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  if (!$candidate_passed(pos, square)) return 0;\n  var r = $rank(pos, square)-1;\n  var rr = r > 2 ? (r-2)*(r-2)+2 : 0;\n  var v = 0;\n  if (rr <= 0) return 0;\n  for (var x = 0; x < 8; x++) {\n    for (var y = 0; y < 8; y++) {\n      if (board(pos, x, y) == \"k\") {\n        v += Math.min(Math.max(Math.abs(y - square.y + 1),\n                      Math.abs(x - square.x)),5) * 5 * rr;\n      }\n      if (board(pos, x, y) == \"K\") {\n        v -= Math.min(Math.max(Math.abs(y - square.y + 1),\n                      Math.abs(x - square.x)),5) * 2 * rr;\n        if (square.y > 1) {\n          v -= Math.min(Math.max(Math.abs(y - square.y + 2),\n                      Math.abs(x - square.x)),5) * rr;\n        }\n      }\n    }\n  }\n  return v;\n}","links":[["https://en.wikipedia.org/wiki/Isolated_pawn","Isolated pawn"]],"eval":true,"squares":1,"highlight":2,"forwhite":true,"graph":true,"elo":null});
data.push({"name":"Passed block","group":"Passed pawns","text":"<b>$</b> adds bonus if passed pawn is free to advance. Bonus is adjusted based on attacked and defended status of block square and entire path in front of pawn.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  if (!$candidate_passed(pos, square)) return 0;\n  if ($rank(pos, square) < 4) return 0;\n  if (board(pos, square.x, square.y - 1) != \"-\") return 0;\n  var r = $rank(pos, square) - 1;\n  var rr = r > 2 ? (r-2)*(r-2)+2 : 0;\n  var pos2 = colorflip(pos);\n  var defended = 0, unsafe = 0, wunsafe = 0, defended1 = 0, unsafe1 = 0;\n  for (var y = square.y - 1; y >= 0; y--) {\n    if ($attack(pos, {x:square.x,y:y})) defended++;\n    if (\"pnbrqk\".indexOf(board(pos, square.x, y)) >= 0\n     || $attack(pos2, {x:square.x,y:7-y})) unsafe++;\n    if (\"pnbrqk\".indexOf(board(pos, square.x-1, y)) >= 0\n     || $attack(pos2, {x:square.x-1,y:7-y})) wunsafe++;\n    if (\"pnbrqk\".indexOf(board(pos, square.x+1, y)) >= 0\n     || $attack(pos2, {x:square.x+1,y:7-y})) wunsafe++;\n    if (y == square.y - 1) {\n      defended1 = defended;\n      unsafe1 = unsafe;\n    }\n  }\n  for (var y = square.y + 1; y < 8; y++) {\n    if (board(pos, square.x, y) == \"R\"\n     || board(pos, square.x, y) == \"Q\") defended1 = defended = square.y;\n    if (board(pos, square.x, y) == \"r\"\n     || board(pos, square.x, y) == \"q\") unsafe1 = unsafe = square.y;\n  }\n  var k = (unsafe == 0 && wunsafe == 0 ? 35 : unsafe == 0 ? 20 : unsafe1 == 0 ? 9 : 0)\n        + (defended1 != 0 ? 5 : 0);\n  return k * rr;\n}","links":[["https://en.wikipedia.org/wiki/Isolated_pawn","Isolated pawn"]],"eval":true,"squares":1,"highlight":2,"forwhite":true,"graph":true,"elo":null});
data.push({"name":"Passed file","group":"Passed pawns","text":"<b>$</b> is a bonus according to the file of a passed pawn.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  if (!$candidate_passed(pos, square)) return 0;\n  var file = $file(pos, square);\n  return Math.min(file, 9 - file);\n}","links":[["https://en.wikipedia.org/wiki/Isolated_pawn","Isolated pawn"]],"eval":true,"squares":1,"highlight":2,"forwhite":true,"graph":true,"elo":{"value":"4.08","error":"4.1","link":"http://tests.stockfishchess.org/tests/view/5a84ed040ebc590297cc8144"}});
data.push({"name":"Passed rank","group":"Passed pawns","text":"<b>$</b> is a bonus according to the rank of a passed pawn.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  if (!$candidate_passed(pos, square)) return 0;\n  return $rank(pos, square) - 1;\n}","links":[["https://en.wikipedia.org/wiki/Isolated_pawn","Isolated pawn"]],"eval":true,"squares":1,"highlight":2,"forwhite":true,"graph":true,"elo":{"value":"73.24","error":"4.9","link":"http://tests.stockfishchess.org/tests/view/5a84edbb0ebc590297cc8146"}});
data.push({"name":"Passed mg","group":"Passed pawns","text":"<b>$</b> middlegame bonuses for passed pawns.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  if (!$candidate_passed(pos, square)) return 0;\n  var v = 0;\n  v += [0,5,12,10,57,163,271][$passed_rank(pos, square)];\n  v += $passed_block(pos, square);\n  if (!$passed_square(pos,{x:square.x,y:square.y-1})\n    || board(pos, square.x, square.y-1).toUpperCase() == \"P\") v = (v / 2) << 0;\n  v += [0,-1,0,-9,-30][$passed_file(pos, square)];\n  return v;\n}","links":[["https://en.wikipedia.org/wiki/Isolated_pawn","Isolated pawn"]],"eval":true,"squares":1,"highlight":2,"forwhite":true,"graph":false,"elo":null});
data.push({"name":"Passed eg","group":"Passed pawns","text":"<b>$</b> endgame bonuses for passed pawns.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  if (!$candidate_passed(pos, square)) return 0;\n  var v = 0;\n  v += $king_proximity(pos, square);\n  v += [0,18,23,31,62,167,250][$passed_rank(pos, square)];\n  v += $passed_block(pos, square);\n  if (!$passed_square(pos,{x:square.x,y:square.y-1})\n    || board(pos, square.x, square.y-1).toUpperCase() == \"P\") v = (v / 2) << 0;\n  v += [0,7,9,-8,-14][$passed_file(pos, square)];\n  return v;\n}","links":[["https://en.wikipedia.org/wiki/Isolated_pawn","Isolated pawn"]],"eval":true,"squares":1,"highlight":2,"forwhite":true,"graph":false,"elo":null});
data.push({"name":"Pawnless flank","group":"King","text":"<b>$</b>. Penalty when our king is on a pawnless flank.","code":"function $$(pos) {\n  var pawns=[0,0,0,0,0,0,0,0], kx = 0;\n  for (var x = 0; x < 8; x++) {\n    for (var y = 0; y < 8; y++) {\n      if (board(pos, x, y).toUpperCase() == \"P\") pawns[x]++;\n      if (board(pos, x, y) == \"k\") kx = x;\n    }\n  }\n  var sum;\n  if (kx == 0) sum = pawns[0] + pawns[1] + pawns[2];\n  else if (kx < 3) sum = pawns[0] + pawns[1] + pawns[2] + pawns[3];\n  else if (kx < 5) sum = pawns[2] + pawns[3] + pawns[4] + pawns[5];\n  else if (kx < 7) sum = pawns[4] + pawns[5] + pawns[6] + pawns[7];\n  else  sum = pawns[5] + pawns[6] + pawns[7];\n  return sum == 0 ? 1 : 0;\n}","links":[],"eval":true,"squares":0,"highlight":0,"forwhite":true,"graph":true,"elo":{"value":"1.29","error":"4.5","link":"http://tests.stockfishchess.org/tests/view/5a73a7000ebc5902971a96b6"}});
data.push({"name":"Strength square","group":"King","text":"<b>$</b>. King shelter strength for each square on board.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  var v = 5;\n  var kx = Math.min(6, Math.max(1, square.x));\n  var weakness =\n      [[-6,81,93,58,39,18,25],\n      [-43,61,35,-49,-29,-11,-63],\n      [-10,75,23,-2,32,3,-45],\n      [-39,-13,-29,-52,-48,-67,-166]];\n  for (var x = kx - 1; x <= kx +1; x++) {\n    var us = 0;\n    for (var y = 7; y >= square.y; y--) {\n      if (board(pos, x, y) == \"p\") us = y;\n    }\n    var f = Math.min(x, 7 - x);\n    v += weakness[f][us] || 0;\n  }\n  return v;\n}","links":[],"eval":true,"squares":1,"highlight":0,"forwhite":true,"graph":false,"elo":null});
data.push({"name":"Storm square","group":"King","text":"<b>$</b>. Enemy pawns storm for each square on board.","code":"function $$(pos, square, eg) {\n  if (square == null) return sum(pos, $$);\n  var v = 0, ev = 0;\n  var kx = Math.min(6, Math.max(1, square.x));\n  var unblockedstorm = [\n    [89,107,123,93,57,45,51],\n    [44,-18,123,46,39,-7,23],\n    [4,52,162,37,7,-14,-2],\n    [-10,-14,90,15,2,-7,-16]];\n  for (var x = kx - 1; x <= kx +1; x++) {\n    var us = 0, them = 0;\n    for (var y = 7; y >= square.y; y--) {\n      if (board(pos, x, y) == \"p\") us = y;\n      if (board(pos, x, y) == \"P\") them = y;\n    }\n    var f = Math.min(x, 7 - x);\n    if (us > 0 && them == us + 1) {\n      v += 82 * (them == 2); ev += 82 * (them == 2);\n    }\n    else v += unblockedstorm[f][them];\n  }\n  if ((square.x == 0 || square.x == 7)\n   && (square.y == 0 || square.y == 1)\n   && board(pos, square.x, square.y + 1) == \"P\") v -= 369;\n  return eg ? ev : v;\n}","links":[],"eval":true,"squares":1,"highlight":0,"forwhite":true,"graph":false,"elo":null});
data.push({"name":"Shelter strength","group":"King","text":"<b>$</b>. King shelter bonus for king position. If we can castle use the penalty after the castling if ([[Shelter strength]] + [[Shelter storm]]) is smaller.","code":"function $$(pos, square) {\n  var w = 0, s = 1024, tx = null;\n  for (var x = 0; x < 8; x++) {\n    for (var y = 0; y < 8; y++) {\n      if (board(pos, x, y) == \"k\"\n       || pos.c[2] && x == 6 && y == 0\n       || pos.c[3] && x == 2 && y == 0) {\n        var w1 = $strength_square(pos, {x:x,y:y});\n        var s1 = $storm_square(pos, {x:x,y:y});\n        if (s1 - w1 < s - w) { w = w1; s = s1; tx=Math.max(1,Math.min(6,x)); }\n      }\n    }\n  }\n  if (square == null) return w;\n  if (tx != null && board(pos, square.x, square.y) == \"p\" && square.x >= tx-1 && square.x <= tx+1) {\n    for (var y = square.y-1; y >= 0; y--) if (board(pos, square.x, y) == \"p\") return 0;\n    return 1;\n  }\n  return 0;\n}","links":[],"eval":true,"squares":0,"highlight":2,"forwhite":true,"graph":true,"elo":null});
data.push({"name":"Shelter storm","group":"King","text":"<b>$</b>. Shelter strom penalty for king position. If we can castle use the penalty after the castling if ([[Shelter weakness]] + [[Shelter storm]]) is smaller.","code":"function $$(pos, square) {\n  var w = 0, s = 1024, tx = null;\n  for (var x = 0; x < 8; x++) {\n    for (var y = 0; y < 8; y++) {\n      if (board(pos, x, y) == \"k\"\n       || pos.c[2] && x == 6 && y == 0\n       || pos.c[3] && x == 2 && y == 0) {\n        var w1 = $strength_square(pos, {x:x,y:y});\n        var s1 = $storm_square(pos, {x:x,y:y});\n        if (s1 - w1 < s - w) { w = w1; s = s1; tx=Math.max(1,Math.min(6,x)); }\n      }\n    }\n  }\n  if (square == null) return s;\n  if (tx != null && board(pos, square.x, square.y).toUpperCase() == \"P\" && square.x >= tx-1 && square.x <= tx+1) {\n    for (var y = square.y-1; y >= 0; y--) if (board(pos, square.x, y) == board(pos, square.x, square.y)) return 0;\n    return 1;\n  }\n  return 0;\n}","links":[],"eval":true,"squares":0,"highlight":2,"forwhite":true,"graph":true,"elo":null});
data.push({"name":"King danger","group":"King","text":"<b>$</b>. The initial value is based on the number and types of the enemy's attacking pieces, the number of attacked and undefended squares around our king and the quality of the pawn shelter.","code":"function $$(pos) {\n  var count = $king_attackers_count(pos);\n  var weight = $king_attackers_weight(pos);\n  var kingattacks = $king_attacks(pos);\n  var weak = $weak_bonus(pos);\n  var pins_uchcks = $unsafe_checks(pos);\n  var tropism = $close_enemies(pos);\n  var noqueen = ($queen_count(pos) > 0 ? 0 : 1);\n  var v = count * weight\n        + 69 * kingattacks\n        + 185 * weak\n        - 100 * ($knight_defender(colorflip(pos)) > 0)\n        -  35 * ($bishop_defender(colorflip(pos)) > 0)\n        + 150 * pins_uchcks\n        + ((5 * tropism * tropism / 16) << 0)\n        - 873 * noqueen\n        - ((6 * ($shelter_strength(pos) - $shelter_storm(pos)) / 8) << 0)\n        + $mobility_mg(pos) - $mobility_mg(colorflip(pos))\n        - 7\n        + 780 * ($safe_check(pos, null, 3) > 0 ? 1 : 0)\n        + 1080 * ($safe_check(pos, null, 2) > 0 ? 1 : 0)\n        + 635 * ($safe_check(pos, null, 1) > 0 ? 1 : 0)\n        + 790 * ($safe_check(pos, null, 0) > 0 ? 1 : 0);\n  if (v > 100) return v;\n  return 0;\n}","links":[],"eval":true,"squares":0,"highlight":0,"forwhite":true,"graph":true,"elo":null});
data.push({"name":"King pawn distance","group":"King","text":"<b>$</b>. Minimal distance of our king to our pawns.","code":"function $$(pos, square) {\n  var v = 8, kx = 0, ky = 0, px = 0, py = 0;\n  for (var x = 0; x < 8; x++) {\n    for (var y = 0; y < 8; y++) {\n      if (board(pos, x, y) == \"K\") {\n        kx = x;\n        ky = y;\n      }\n    }\n  }\n  for (var x = 0; x < 8; x++) {\n    for (var y = 0; y < 8; y++) {\n      var dist = Math.max(Math.abs(x-kx),Math.abs(y-ky));\n      if (board(pos, x, y) == \"P\" && dist < v) { px = x; py = y; v = dist; }\n    }\n  }\n  if (v < 8 && (square == null || square.x == px && square.y == py)) return v;\n  return 0;\n}","links":[],"eval":true,"squares":0,"highlight":2,"forwhite":true,"graph":true,"elo":{"value":"3.71","error":"4.2","link":"http://tests.stockfishchess.org/tests/view/5a7dacfd0ebc5902971a9bc3"}});
data.push({"name":"Close enemies","group":"King","text":"<b>$</b>. King tropism: firstly, find squares that opponent attacks in our king flank. Secondly, add the squares which are attacked twice in that flank.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  if (square.y > 4) return 0;\n  for (var x = 0; x < 8; x++) {\n    for (var y = 0; y < 8; y++) {\n      if (board(pos, x, y) == \"k\") {\n        if (x == 0 && square.x > 2) return 0;\n        if (x < 3 && square.x > 3) return 0;\n        if (x >= 3 && x < 5 && (square.x < 2 || square.x > 5)) return 0;\n        if (x >= 5 && square.x < 4) return 0;\n        if (x == 7 && square.x < 5) return 0;\n      }\n    }\n  }\n  var a = $attack(pos, square);\n  if (!a) return 0;\n  return a > 1 ? 2 : 1;\n}","links":[],"eval":true,"squares":1,"highlight":0,"forwhite":true,"graph":true,"elo":{"value":"2.19","error":"4.6","link":"http://tests.stockfishchess.org/tests/view/5a7399f10ebc5902971a96b3"}});
data.push({"name":"Check","group":"King","text":"<b>$</b>. Possible checks by knight, bishop, rook or queen. Defending queen is not considered as check blocker.","code":"function $$(pos, square, type) {\n  if (square == null) return sum(pos, $$);\n  if ($rook_xray_attack(pos, square)\n  && (type == null || type == 2 || type == 4)\n   || $queen_attack(pos, square)\n  && (type == null || type == 3)) {\n    for (var i = 0; i < 4; i++) {\n      var ix = (i == 0 ? -1 : i == 1 ? 1 : 0);\n      var iy = (i == 2 ? -1 : i == 3 ? 1 : 0);\n      for (var d = 1; d < 8; d++) {\n        var b = board(pos, square.x + d * ix, square.y + d * iy);\n        if (b == \"k\") return 1;\n        if (b != \"-\" && b != \"q\") break;\n      }\n    }\n  }\n  if ($bishop_xray_attack(pos, square)\n  && (type == null || type == 1 || type == 4)\n   || $queen_attack(pos, square)\n  && (type == null || type == 3)) {\n    for (var i = 0; i < 4; i++) {\n      var ix = ((i > 1) * 2 - 1);\n      var iy = ((i % 2 == 0) * 2 - 1);\n      for (var d = 1; d < 8; d++) {\n        var b = board(pos, square.x + d * ix, square.y + d * iy);\n        if (b == \"k\") return 1;\n        if (b != \"-\" && b != \"q\") break;\n      }\n    }\n  }\n  if ($knight_attack(pos, square)\n  && (type == null || type == 0 || type == 4)) {\n    if (board(pos, square.x + 2, square.y + 1) == \"k\"\n     || board(pos, square.x + 2, square.y - 1) == \"k\"\n     || board(pos, square.x + 1, square.y + 2) == \"k\"\n     || board(pos, square.x + 1, square.y - 2) == \"k\"\n     || board(pos, square.x - 2, square.y + 1) == \"k\"\n     || board(pos, square.x - 2, square.y - 1) == \"k\"\n     || board(pos, square.x - 1, square.y + 2) == \"k\"\n     || board(pos, square.x - 1, square.y - 2) == \"k\") return 1;\n  }\n  return 0;\n}","links":[],"eval":true,"squares":1,"highlight":2,"forwhite":true,"graph":false});
data.push({"name":"Safe check","group":"King","text":"<b>$</b>. Analyse the safe enemy's checks which are possible on next move. Enemy queen safe checks: we count them only if they are from squares from which we can't give a rook check, because rook checks are more valuable. Enemy bishops checks: we count them only if they are from squares from which we can't give a queen check, because queen checks are more valuable.","code":"function $$(pos, square, type) {\n  if (square == null) return sum(pos, $$, type);\n  if (\"PNBRQK\".indexOf(board(pos, square.x, square.y)) >= 0) return 0;\n  if (!$check(pos, square, type)) return 0;\n  var pos2 = colorflip(pos);\n  if (type == 3 && $safe_check(pos, square, 2)) return 0;\n  if (type == 1 && $safe_check(pos, square, 3)) return 0;\n  if ((!$attack(pos2, {x:square.x,y:7-square.y})\n    || ($weak_squares(pos, square) && $attack(pos, square) > 1))\n    && (type != 3 || !$queen_attack(pos2, {x:square.x,y:7-square.y}))) return 1;\n  return 0;\n}","links":[],"eval":true,"squares":1,"highlight":2,"forwhite":true,"graph":false,"elo":null});
data.push({"name":"Queen count","group":"Helpers","text":"<b>$</b> counts number of our queens.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  if (board(pos, square.x, square.y) == \"Q\") return 1;\n  return 0;\n}","links":[],"eval":true,"squares":1,"highlight":2,"forwhite":true});
data.push({"name":"King attackers count","group":"King","text":"<b>$</b> is the number of pieces of the given color which attack a square in the kingRing of the enemy king. For pawns we count number of attacked squares in kingRing.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  if (\"PNBRQ\".indexOf(board(pos, square.x, square.y)) < 0) return 0;\n  if (board(pos, square.x, square.y) == \"P\") {\n    var v = 0;\n    for (var dir = -1; dir <= 1; dir += 2) {\n      var fr = board(pos, square.x + dir * 2, square.y) == \"P\";\n      if (square.x + dir >= 0 && square.x + dir <= 7\n       && $king_ring(pos, {x:square.x+dir,y:square.y-1}, true)) v = v + (fr ? 0.5 : 1);\n    }\n    return v;\n  }\n  for (var x = 0; x < 8; x++) {\n    for (var y = 0; y < 8; y++) {\n      var s2 = {x:x,y:y};\n      if ($king_ring(pos, s2)) {\n        if ($knight_attack(pos, s2, square)\n         || $bishop_xray_attack(pos, s2, square)\n         || $rook_xray_attack(pos, s2, square)\n         || $queen_attack(pos, s2, square)) return 1;\n      }\n    }\n  }\n  return 0;\n}","links":[],"eval":true,"squares":1,"highlight":2,"forwhite":true,"graph":false,"elo":null});
data.push({"name":"King attackers weight","group":"King","text":"<b>$</b> is the sum of the \"weights\" of the pieces of the given color which attack a square in the kingRing of the enemy king.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  if ($king_attackers_count(pos, square)) {\n    return [0,77,55,44,10][\"PNBRQ\".indexOf(board(pos, square.x, square.y))];\n  }\n  return 0;\n}","links":[],"eval":true,"squares":1,"highlight":2,"forwhite":true,"graph":false,"elo":null});
data.push({"name":"King attacks","group":"King","text":"<b>$</b> is the number of attacks by the given color to squares directly adjacent to the enemy king. Pieces which attack more than one square are counted multiple times. For instance, if there is a white knight on g5 and black's king is on g8, this white knight adds 2.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  if (\"NBRQ\".indexOf(board(pos, square.x, square.y)) < 0) return 0;\n  if ($king_attackers_count(pos, square) == 0) return 0;\n  var kx = 0, ky = 0, v = 0;\n  for (var x = 0; x < 8; x++) {\n    for (var y = 0; y < 8; y++) {\n      if (board(pos, x, y) == \"k\") { kx = x; ky = y; }\n    }\n  }\n  for (var x = kx - 1; x <= kx + 1; x++) {\n    for (var y = ky - 1; y <= ky + 1; y++) {\n      var s2 = {x:x,y:y};\n      if (x >= 0 && y >= 0 && x <= 7 && y <= 7 && (x != kx || y != ky)) {\n        v += $knight_attack(pos, s2, square);\n        v += $bishop_xray_attack(pos, s2, square);\n        v += $rook_xray_attack(pos, s2, square);\n        v += $queen_attack(pos, s2, square);\n      }\n    }\n  }\n  return v;\n}","links":[],"eval":true,"squares":1,"highlight":2,"forwhite":true,"graph":false,"elo":null});
data.push({"name":"Weak bonus","group":"King","text":"<b>$</b>. Weak squares in king ring.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  if (!$weak_squares(pos, square)) return 0;\n  if (!$king_ring(pos, square)) return 0;\n  return 1;\n}","links":[],"eval":true,"squares":1,"highlight":2,"forwhite":true,"graph":false});
data.push({"name":"Weak squares","group":"King","text":"<b>$</b>. Attacked squares defended at most once by our queen or king.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  if ($attack(pos, square)) {\n    var pos2 = colorflip(pos);\n    var attack = $attack(pos2, {x:square.x,y:7-square.y});\n    if (attack >= 2) return 0;\n    if (attack == 0) return 1;\n    if ($king_attack(pos2, {x:square.x,y:7-square.y})\n     || $queen_attack(pos2, {x:square.x,y:7-square.y})) return 1;\n  }\n  return 0;\n}","links":[],"eval":true,"squares":1,"highlight":2,"forwhite":true,"graph":false});
data.push({"name":"Initiative","group":"Initiative","text":"<b>$</b> computes the initiative correction value for the position, i.e., second order bonus/malus based on the known attacking/defending status of the players.","code":"function $$(pos, square) {\n  if (square != null) return 0;\n  var pawns = 0, kx = [0, 0], ky = [0, 0], flanks = [0, 0];\n  for (var x = 0; x < 8; x++) {\n    var open = [0, 0];\n    for (var y = 0; y < 8; y++) {\n      if (board(pos, x, y).toUpperCase() == \"P\" ) {\n        open[board(pos, x, y) == \"P\" ? 0 : 1] = 1;\n        pawns++\n      }\n      if (board(pos, x, y).toUpperCase() == \"K\" ) {\n        kx[board(pos, x, y) == \"K\" ? 0 : 1] = x;\n        ky[board(pos, x, y) == \"K\" ? 0 : 1] = y;\n      }\n    }\n    if (open[0] + open[1] > 0) flanks[x < 4 ? 0 : 1] = 1;\n  }\n  var pos2 = colorflip(pos);\n  var passedCount = $candidate_passed(pos) + $candidate_passed(pos2);\n  var bothFlanks = flanks[0] && flanks[1] ? 1 : 0;\n  var kingDistance = Math.abs(kx[0] - kx[1]) - Math.abs(ky[0] - ky[1]);\n  var purePawn = ($non_pawn_material(pos) + $non_pawn_material(pos2)) == 0 ? 1 : 0;\n  return 9 * passedCount + 11 * pawns + 9 * kingDistance + 18 * bothFlanks + 49 * purePawn - 103;\n}","links":[],"eval":true,"squares":0,"highlight":0,"forwhite":false,"graph":true,"elo":null});
data.push({"name":"Unsafe checks","group":"King","text":"<b>$</b>. Unsafe checks or pinned opponent pieces.\n","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  if ($pinned_direction(colorflip(pos), {x:square.x,y:7-square.y})) return 1;\n  if (!$mobility_area(pos, square)) return 0;\n  if ($check(pos, square, 0) && $safe_check(pos, null, 0) == 0) return 1;\n  if ($check(pos, square, 1) && $safe_check(pos, null, 1) == 0) return 1;\n  if ($check(pos, square, 2) && $safe_check(pos, null, 2) == 0) return 1;\n  return 0;\n}","links":[],"eval":true,"squares":1,"highlight":2,"forwhite":true,"graph":true,"elo":null});
data.push({"name":"Tempo","group":"","text":"<b>$</b>. In chess, tempo refers to a \"turn\" or single move. When a player achieves a desired result in one fewer move, the player \"gains a tempo\"; and conversely when a player takes one more move than necessary, the player \"loses a tempo\". We add small bonus for having the right to move.","code":"function $$(pos, square) {\n  if (square != null) return 0;\n  return 28 * (pos.w ? 1 : -1);\n}","links":[["https://en.wikipedia.org/wiki/Tempo_(chess)","Tempo (chess) in wikipedia"],["https://www.chessprogramming.org/Tempo","Tempo in cpw"]],"eval":true,"squares":0,"highlight":0,"forwhite":false,"graph":false,"elo":null});
data.push({"name":"Pawn count","group":"Helpers","text":"<b>$</b> counts number of our pawns.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  if (board(pos, square.x, square.y) == \"P\") return 1;\n  return 0;\n}","links":[],"eval":true,"squares":1,"highlight":2,"forwhite":true});
data.push({"name":"Connected bonus","group":"Pawns","text":"<b>$</b> is bonus for connected pawns.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  if (!$connected(pos, square)) return 0;\n  var seed = [0, 7, 8, 12, 29, 48, 86];\n  var op = $opposed(pos, square);\n  var ph = $phalanx(pos, square);\n  var su = $supported(pos, square);\n  var r = $rank(pos, square);\n  if (r < 2 || r > 7) return 0;\n  return ((seed[r - 1] * (ph ? 3 : 2) / (op ? 2 : 1)) >> 0) + 17 * su;\n}","links":[],"eval":true,"squares":1,"highlight":2,"forwhite":true,"graph":false,"elo":null});
data.push({"name":"Mobility mg","group":"Mobility","text":"<b>$</b>. [[Mobility bonus]] for middlegame.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  return $mobility_bonus(pos, square, true);\n}","links":[],"eval":true,"squares":1,"highlight":2,"forwhite":true});
data.push({"name":"Mobility eg","group":"Mobility","text":"<b>$</b>. [[Mobility bonus]] for endgame.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  return $mobility_bonus(pos, square, false);\n}","links":[],"eval":true,"squares":1,"highlight":2,"forwhite":true});
data.push({"name":"Piece value bonus","group":"Material","text":"<b>$</b>. Material values for middlegame and engame.","code":"function $$(pos, square, mg) {\n  if (square == null) return sum(pos, $$);\n  var a = mg ? [128, 782, 830, 1289, 2529]\n             : [213, 865, 918, 1378, 2687];\n  var i = \"PNBRQ\".indexOf(board(pos, square.x, square.y));\n  if (i >= 0) return a[i];\n  return 0;\n}","links":[],"eval":false,"squares":0,"highlight":0,"forwhite":true,"graph":true,"elo":null});
data.push({"name":"Psqt bonus","group":"Material","text":"<b>$</b>. Piece square table bonuses. For each piece type on a given square a (middlegame, endgame) score pair is assigned.","code":"function $$(pos, square, mg) {\n  if (square == null) return sum(pos, $$, mg);\n  var bonus = mg ? [\n    [[-169,-96,-80,-79],[-79,-39,-24,-9],[-64,-20,4,19],[-28,5,41,47],[-29,13,42,52],[-11,28,63,55],[-67,-21,6,37],[-200,-80,-53,-32]],\n    [[-44,-4,-11,-28],[-18,7,14,3],[-8,24,-3,15],[1,8,26,37],[-7,30,23,28],[-17,4,-1,8],[-21,-19,10,-6],[-48,-3,-12,-25]],\n    [[-24,-13,-7,2],[-18,-10,-5,9],[-21,-7,3,-1],[-13,-5,-4,-6],[-24,-12,-1,6],[-24,-4,4,10],[-8,6,10,12],[-22,-24,-6,4]],\n    [[3,-5,-5,4],[-3,5,8,12],[-3,6,13,7],[4,5,9,8],[0,14,12,5],[-4,10,6,8],[-5,6,10,8],[-2,-2,1,-2]],\n    [[272,325,273,190],[277,305,241,183],[198,253,168,120],[169,191,136,108],[145,176,112,69],[122,159,85,36],[87,120,64,25],[64,87,49,0]]\n  ] : [\n    [[-105,-74,-46,-18],[-70,-56,-15,6],[-38,-33,-5,27],[-36,0,13,34],[-41,-20,4,35],[-51,-38,-17,19],[-64,-45,-37,16],[-98,-89,-53,-16]],\n    [[-63,-30,-35,-8],[-38,-13,-14,0],[-18,0,-7,13],[-26,-3,1,16],[-24,-6,-10,17],[-26,2,1,16],[-34,-18,-7,9],[-51,-40,-39,-20]],\n    [[-2,-6,-3,-2],[-10,-7,1,0],[10,-4,2,-2],[-5,2,-8,8],[-8,5,4,-9],[3,-2,-10,7],[1,2,17,-8],[12,-6,13,7]],\n    [[-69,-57,-47,-26],[-55,-31,-22,-4],[-39,-18,-9,3],[-23,-3,13,24],[-29,-6,9,21],[-38,-18,-12,1],[-50,-27,-24,-8],[-75,-52,-43,-36]],\n    [[0,41,80,93],[57,98,138,131],[86,138,165,173],[103,152,168,169],[98,166,197,194],[87,164,174,189],[40,99,128,141],[5,60,75,75]]\n  ];\n  var pbonus = mg ? \n    [[0,0,0,0,0,0,0,0],[0,-5,10,13,21,17,6,-3],[-11,-10,15,22,26,28,4,-24],[-9,-18,8,22,33,25,-4,-16],\n     [6,-3,-10,1,12,6,-12,1],[-6,-8,5,11,-14,0,-12,-14],[-10,6,-5,-11,-2,-14,12,-1],[0,0,0,0,0,0,0,0]]:\n    [[0,0,0,0,0,0,0,0],[-10,-3,7,-1,7,6,1,-20],[-6,-6,-1,-1,-1,2,-2,-5],[4,-5,-4,-5,-6,-13,-3,-7],\n     [18,2,2,-9,-13,-8,11,9],[25,17,19,29,29,8,4,12],[-1,-6,18,22,22,17,2,9],[0,0,0,0,0,0,0,0]];\n  var i = \"PNBRQK\".indexOf(board(pos, square.x, square.y));\n  if (i < 0) return 0;\n  if (i == 0) return pbonus[7 - square.y][square.x];\n  else return bonus[i-1][7 - square.y][Math.min(square.x, 7 - square.x)];\n}","links":[],"eval":false,"squares":0,"highlight":0,"forwhite":true,"graph":true,"elo":null});
data.push({"name":"Piece value mg","group":"Material","text":"<b>$</b>. Material - middlegame.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  return $piece_value_bonus(pos, square, true);\n}","links":[],"eval":true,"squares":1,"highlight":0,"forwhite":true});
data.push({"name":"Piece value eg","group":"Material","text":"<b>$</b>. Material - endgame.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  return $piece_value_bonus(pos, square, false);\n}","links":[],"eval":true,"squares":1,"highlight":0,"forwhite":true});
data.push({"name":"Psqt mg","group":"Material","text":"<b>$</b>. Piece square table bonuses - middlegame.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  return $psqt_bonus(pos, square, true);\n}","links":[],"eval":true,"squares":1,"highlight":0,"forwhite":true});
data.push({"name":"Psqt eg","group":"Material","text":"<b>$</b>. Piece square table bonuses - endgame.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  return $psqt_bonus(pos, square, false);\n}\n\n","links":[],"eval":true,"squares":1,"highlight":0,"forwhite":true});
data.push({"name":"Initiative total","group":"Initiative","text":"<b>$</b>. No description available.","code":"function $$(pos, v) {\n  if (v == null) v = $end_game_evaluation(pos, true);\n  return (v > 0 ? 1 : v < 0 ? -1 : 0)\n         * Math.max($initiative(pos), -Math.abs(v));\n}","links":[],"eval":false,"squares":0,"highlight":0,"forwhite":false,"graph":false});
data.push({"name":"King protector","group":"Pieces","text":"<b>$</b> add penalties and bonuses for pieces, depending on the distance from the own king.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  if (board(pos, square.x, square.y) != \"N\"\n   && board(pos, square.x, square.y) != \"B\") return 0;\n  return $king_distance(pos, square);\n}","links":[],"eval":false,"squares":0,"highlight":2,"forwhite":true,"graph":true,"elo":{"value":"5.82","error":"4.1","link":"http://tests.stockfishchess.org/tests/view/5a7af24e0ebc5902971a9a3c"}});
data.push({"name":"Knight count","group":"Helpers","text":"<b>$</b> counts number of our knights.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  if (board(pos, square.x, square.y) == \"N\") return 1;\n  return 0;\n}","links":[],"eval":true,"squares":1,"highlight":2,"forwhite":true,"graph":false});
data.push({"name":"Imbalance total","group":"Imbalance","text":"<b>$</b>. Second-degree polynomial material imbalance by Tord Romstad.","code":"function $$(pos, square) {\n  var v = 0;\n  v += $imbalance(pos) - $imbalance(colorflip(pos));\n  v += $bishop_pair(pos) - $bishop_pair(colorflip(pos));\n  return (v / 16) << 0;\n}","links":[],"eval":true,"squares":0,"highlight":0,"forwhite":false,"graph":false});
data.push({"name":"Weak unopposed pawn","group":"Pawns","text":"<b>$</b>. Check if our pawn is weak and unopposed.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  if ($opposed(pos, square)) return 0;\n  var v = 0;\n  if ($isolated(pos, square)) v++;\n  if ($backward(pos, square)) v++;\n  return v;\n}","links":[],"eval":true,"squares":1,"highlight":2,"forwhite":true,"graph":true,"elo":{"value":"1.25","error":"4.5","link":"http://tests.stockfishchess.org/tests/view/5a74e8d40ebc5902971a9715"}});
data.push({"name":"Rook count","group":"Helpers","text":"<b>$</b> counts number of our rooks.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  if (board(pos, square.x, square.y) == \"R\") return 1;\n  return 0;\n}","links":[],"eval":true,"squares":1,"highlight":2,"forwhite":true,"graph":false});
data.push({"name":"Opposite bishops","group":"Helpers","text":"<b>$</b> determines if we have bishops of opposite colors.","code":"function $$(pos) {\n  if ($bishop_count(pos) != 1) return 0;\n  if ($bishop_count(colorflip(pos)) != 1) return 0;\n  var color = [0, 0];\n  for (var x = 0; x < 8; x++) {\n    for (var y = 0; y < 8; y++) {\n      if (board(pos, x, y) == \"B\") color[0] = (x + y) % 2;\n      if (board(pos, x, y) == \"b\") color[1] = (x + y) % 2;\n    }\n  }\n  return color[0] == color[1] ? 0 : 1;\n}","links":[["https://www.chessprogramming.org/Bishops_of_Opposite_Colors","Bishops of Opposite Colors in cpw"]],"eval":true,"squares":0,"highlight":0,"forwhite":false,"graph":false});
data.push({"name":"King distance","group":"Helpers","text":"<b>$</b> counts distance to our king.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  for (var x = 0; x < 8; x++) {\n    for (var y = 0; y < 8; y++) {\n      if (board(pos, x, y) == \"K\") {\n        return Math.max(Math.abs(x - square.x), Math.abs(y - square.y));\n      }\n    }\n  }\n  return 0;\n}","links":[],"eval":true,"squares":1,"highlight":2,"forwhite":true,"graph":false,"elo":null});
data.push({"name":"Long diagonal bishop","group":"Pieces","text":"<b>$</b>. Bonus for bishop on a long diagonal which can \"see\" both center squares.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  if (board(pos, square.x, square.y) != \"B\") return 0;\n  if (square.x - square.y != 0 && square.x - (7 - square.y) != 0) return 0;\n  var x1 = square.x, y1 = square.y;\n  if (Math.min(x1,7-x1) > 2) return 0;\n  for (var i = Math.min(x1,7-x1); i < 4; i++) {\n    if (board(pos, x1, y1) == \"p\") return 0;\n    if (board(pos, x1, y1) == \"P\") return 0;\n    if (x1 < 4) x1++; else x1--;\n    if (y1 < 4) y1++; else y1--;\n  }\n  return 1;\n}","links":[],"eval":true,"squares":1,"highlight":2,"forwhite":true,"graph":true,"elo":{"value":"-1.15","error":"2.9","link":"http://tests.stockfishchess.org/tests/view/5a75acec0ebc5902971a975f"}});
data.push({"name":"Queen attack diagonal","group":"Attack","text":"<b>$</b> counts number of attacks on square by queen only with diagonal direction.","code":"function $$(pos, square, s2) {\n  if (square == null) return sum(pos, $$);\n  var v = 0;\n  for (var i = 0; i < 8; i++) {\n    var ix = (i + (i > 3)) % 3 - 1;\n    var iy = (((i + (i > 3)) / 3) << 0) - 1;\n    if (ix == 0 || iy == 0) continue;\n    for (var d = 1; d < 8; d++) {\n      var b = board(pos, square.x + d * ix, square.y + d * iy);\n      if (b == \"Q\"\n      && (s2 == null || s2.x == square.x + d * ix && s2.y == square.y + d * iy)) {\n        var dir = $pinned_direction(pos, {x:square.x+d*ix, y:square.y+d*iy});\n        if (dir == 0 || Math.abs(ix+iy*3) == dir) v++;\n      }\n      if (b != \"-\") break;\n    }\n  }\n  return v;\n}","links":[],"eval":true,"squares":1,"highlight":2,"forwhite":true,"graph":false});
data.push({"name":"Pinned","group":"Attack","text":"<b>$</b>. In chess, absolute pin is a situation brought on by a sliding attacking piece in which a defending piece cannot move because moving away the pinned piece would illegally expose the king to check.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  if (\"PNBRQK\".indexOf(board(pos, square.x, square.y)) < 0) return 0;\n  return $pinned_direction(pos, square) > 0 ? 1 : 0;\n}","links":[["https://en.wikipedia.org/wiki/Pin_(chess)","Pin in wikipedia"],["https://www.chessprogramming.org/Pin","Pin in cpw"]],"eval":true,"squares":1,"highlight":2,"forwhite":true,"graph":false});
data.push({"name":"King ring","group":"Helpers","text":"<b>$</b> is square occupied by king and 8 squares around king. Squares defended by two pawns are removed from king ring.","code":"function $$(pos, square, full) {\n  if (square == null) return sum(pos, $$);\n  if (!full\n   && board(pos, square.x + 1, square.y - 1) == \"p\"\n   && board(pos, square.x - 1, square.y - 1) == \"p\") return 0;\n  for (var ix = -2; ix <= 2; ix++) {\n    for (var iy = -2; iy <= 1; iy++) {\n      if (board(pos, square.x + ix, square.y + iy) == \"k\"\n      && (iy >= -1 || square.y + iy == 0)\n      && (ix >= -1 && ix <= 1 || square.x + ix == 0 || square.x + ix == 7)) return 1;\n    }\n  }\n  return 0;\n}","links":[],"eval":true,"squares":1,"highlight":2,"forwhite":true,"graph":false,"elo":null});
data.push({"name":"Slider on queen","group":"Threats","text":"<b>$</b>. Add a bonus for safe slider attack threats on opponent queen.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  var pos2 = colorflip(pos);\n  if ($queen_count(pos2) != 1) return 0;\n  if (board(pos, square.x - 1, square.y - 1) == \"p\") return 0;\n  if (board(pos, square.x + 1, square.y - 1) == \"p\") return 0;\n  if ($attack(pos, square) <= 1) return 0;\n  if (!$mobility_area(pos, square)) return 0;\n  var diagonal = $queen_attack_diagonal(pos2, {x:square.x, y:7-square.y});\n  if (diagonal && $bishop_xray_attack(pos, square)) return 1;\n  if (!diagonal\n   && $rook_xray_attack(pos, square)\n   && $queen_attack(pos2, {x:square.x, y:7-square.y})) return 1;\n  return 0;\n}","links":[],"eval":true,"squares":1,"highlight":2,"forwhite":true,"graph":true});
data.push({"name":"Knight on queen","group":"Threats","text":"<b>$</b>. Add a bonus for safe knight attack threats on opponent queen.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  var pos2 = colorflip(pos);\n  var qx = -1, qy = -1;\n  for (var x = 0; x < 8; x++) {\n    for (var y = 0; y < 8; y++) {\n      if (board(pos, x, y) == \"q\") {\n        if (qx >= 0 || qy >= 0) return 0;\n        qx = x;\n        qy = y;\n      }\n    }\n  }\n  if ($queen_count(pos2) != 1) return 0;\n  if (board(pos, square.x - 1, square.y - 1) == \"p\") return 0;\n  if (board(pos, square.x + 1, square.y - 1) == \"p\") return 0;\n  if ($attack(pos, square) <= 1 && $attack(pos2, {x:square.x, y:7-square.y}) > 1) return 0;\n  if (!$mobility_area(pos, square)) return 0;\n  if (!$knight_attack(pos, square)) return 0;\n  if (Math.abs(qx-square.x) == 2 && Math.abs(qy-square.y) == 1) return 1;\n  if (Math.abs(qx-square.x) == 1 && Math.abs(qy-square.y) == 2) return 1;\n  return 0;\n}","links":[],"eval":true,"squares":1,"highlight":2,"forwhite":true,"graph":true});
data.push({"name":"Outpost total","group":"Pieces","text":"<b>$</b>. Middlegame and endgame bonuses for knights and bishops outposts, bigger if outpost piece is supported by a pawn.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  if (board(pos, square.x, square.y) != \"N\"\n   && board(pos, square.x, square.y) != \"B\") return 0;\n  var knight = board(pos, square.x, square.y) == \"N\";\n  var reachable = 0;\n  if (!$outpost(pos, square)) {\n    reachable = $reachable_outpost(pos, square);\n    if (!reachable) return 0;\n  }\n  return (knight ? 2 : 1) / (reachable ? 2 : 1);\n}","links":[],"eval":true,"squares":1,"highlight":0,"forwhite":true,"graph":true,"elo":{"value":"12.05","error":"4.2","link":"http://tests.stockfishchess.org/tests/view/5a774a8b0ebc5902971a9877"}});
data.push({"name":"Pieces mg","group":"Pieces","text":"<b>$</b>. Middlegame bonuses and penalties to the pieces of a given color and type. Mobility not included here.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  if (\"NBRQ\".indexOf(board(pos, square.x, square.y)) < 0) return 0;\n  var v = 0;\n  v += 36 * $outpost_total(pos, square);\n  v += 18 * $minor_behind_pawn(pos, square);\n  v -= 3 * $bishop_pawns(pos, square);\n  v += 10 * $rook_on_pawn(pos, square);\n  v += [0,18,44][$rook_on_file(pos, square)];\n  v -= $trapped_rook(pos, square) * 47 * (pos.c[0] || pos.c[1] ? 1 : 2);\n  v -= 49 * $weak_queen(pos, square);\n  v -= 7 * $king_protector(pos, square);\n  v += 45 * $long_diagonal_bishop(pos, square);\n  return v;\n}","links":[],"eval":true,"squares":1,"highlight":2,"forwhite":true,"graph":false,"elo":null});
data.push({"name":"Pieces eg","group":"Pieces","text":"<b>$</b>. Endgame bonuses and penalties to the pieces of a given color and type. Mobility not included here.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  if (\"NBRQ\".indexOf(board(pos, square.x, square.y)) < 0) return 0;\n  var v = 0;\n  v += 12 * $outpost_total(pos, square);\n  v += 3 * $minor_behind_pawn(pos, square);\n  v -= 7 * $bishop_pawns(pos, square);\n  v += 32 * $rook_on_pawn(pos, square);\n  v += [0,7,20][$rook_on_file(pos, square)];\n  v -= $trapped_rook(pos, square) * 4 * (pos.c[0] || pos.c[1] ? 1 : 2);\n  v -= 15 * $weak_queen(pos, square);\n  v -= 8 * $king_protector(pos, square);\n  return v;\n}","links":[],"eval":true,"squares":1,"highlight":2,"forwhite":true,"graph":false,"elo":null});
data.push({"name":"Restricted","group":"Threats","text":"<b>$</b>. Bonus for restricting their piece moves.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  if ($attack(pos, square) == 0) return 0;\n  var pos2 = colorflip(pos);\n  if (!$attack(pos2, {x:square.x,y:7-square.y})) return 0;\n  if ($pawn_attack(pos2, {x:square.x,y:7-square.y}) > 0) return 0;\n  if ($attack(pos2, {x:square.x,y:7-square.y}) > 1 && $attack(pos, square) == 1) return 0;\n  return 1;\n}","links":[],"eval":true,"squares":1,"highlight":2,"forwhite":true,"graph":true,"elo":null});
data.push({"name":"Threats mg","group":"Threats","text":"<b>$</b>. Middlegame threats bonus.","code":"function $$(pos) {\n  var v = 0;\n  v += 69 * $hanging(pos);\n  v += $king_threat(pos) > 0 ? 24 : 0;\n  v += 48 * $pawn_push_threat(pos);\n  v += 13 * $rank_threat(pos);\n  v += 173 * $threat_safe_pawn(pos);\n  v += 59 * $slider_on_queen(pos);\n  v += 16 * $knight_on_queen(pos);\n  v += 7 * $restricted(pos);\n  for (var x = 0; x < 8; x++) {\n    for (var y = 0; y < 8; y++) {\n      var s = {x:x,y:y};\n      v += [0,0,39,57,68,62,0][$minor_threat(pos, s)];\n      v += [0,0,38,38,0,51,0][$rook_threat(pos, s)];\n    }\n  }\n  return v;\n}","links":[],"eval":true,"squares":0,"highlight":0,"forwhite":true,"graph":false,"elo":null});
data.push({"name":"Threats eg","group":"Threats","text":"<b>$</b>. Endgame threats bonus.","code":"function $$(pos) {\n  var v = 0;\n  v += 36 * $hanging(pos);\n  v += $king_threat(pos) > 0 ? 89 : 0;\n  v += 39 * $pawn_push_threat(pos);\n  v += 94 * $threat_safe_pawn(pos);\n  v += 18 * $slider_on_queen(pos);\n  v += 12 * $knight_on_queen(pos);\n  v += 7 * $restricted(pos);\n  for (var x = 0; x < 8; x++) {\n    for (var y = 0; y < 8; y++) {\n      var s = {x:x,y:y};\n      v += [0,31,42,44,112,120,0][$minor_threat(pos, s)];\n      v += [0,24,71,61,38,38,0][$rook_threat(pos, s)];\n    }\n  }\n  return v;\n}","links":[],"eval":true,"squares":0,"highlight":0,"forwhite":true,"graph":false,"elo":null});
data.push({"name":"Knight defender","group":"King","text":"<b>$</b>. Squares defended by knight near our king.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  if ($knight_attack(pos, square) && $king_attack(pos, square)) return 1;\n  return 0;\n}","links":[],"eval":true,"squares":1,"highlight":2,"forwhite":true,"graph":false,"elo":null});
data.push({"name":"Bishop defender","group":"King","text":"<b>$</b>. Squares defended by bishop near our king.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  if ($bishop_xray_attack(pos, square) && $king_attack(pos, square)) return 1;\n  return 0;\n}","links":[],"eval":true,"squares":1,"highlight":2,"forwhite":true,"graph":false,"elo":null});
data.push({"name":"Endgame shelter","group":"King","text":"<b>$</b>. Add an endgame component to the blockedstorm penalty so that the penalty applies more uniformly through the game.","code":"function $$(pos, square) {\n  var w = 0, s = 1024, tx = null;\n  for (var x = 0; x < 8; x++) {\n    for (var y = 0; y < 8; y++) {\n      if (board(pos, x, y) == \"k\"\n       || pos.c[2] && x == 6 && y == 0\n       || pos.c[3] && x == 2 && y == 0) {\n        var w1 = $strength_square(pos, {x:x,y:y});\n        var s1 = $storm_square(pos, {x:x,y:y});\n        var e1 = $storm_square(pos, {x:x,y:y}, true);\n        if (s1 - w1 < s - w) { w = w1; s = s1; e = e1; }\n      }\n    }\n  }\n  if (square == null) return e;\n  return 0;\n}","links":[],"eval":true,"squares":0,"highlight":2,"forwhite":true,"graph":true,"elo":null});
data.push({"name":"King mg","group":"King","text":"<b>$</b> assigns middlegame bonuses and penalties for attacks on enemy king.","code":"function $$(pos) {\n  var v = 0;\n  var kd = $king_danger(pos);\n  v -= $shelter_strength(pos);\n  v += $shelter_storm(pos);\n  v += (kd * kd / 4096) << 0;\n  v += 8 * $close_enemies(pos);\n  v += 17 * $pawnless_flank(pos);\n  return v;\n}","links":[],"eval":true,"squares":0,"highlight":0,"forwhite":true,"graph":false,"elo":null});
data.push({"name":"King eg","group":"King","text":"<b>$</b> assigns endgame bonuses and penalties for attacks on enemy king.","code":"function $$(pos) {\n  var v = 0;\n  v -= 16 * $king_pawn_distance(pos);\n  v += $endgame_shelter(pos);\n  v += 95 * $pawnless_flank(pos);\n  v += ($king_danger(pos) / 16) << 0;\n  return v;\n}","links":[],"eval":true,"squares":0,"highlight":0,"forwhite":true,"graph":false,"elo":null});
data.push({"name":"Attacks on space","group":"Space","text":"<b>$</b>. Every square in our space area that is attacked by enemy. Only safe squares one, two or three squares behind a friendly pawn are counted.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  if ($space_area(pos, square) < 2) return 0;\n  if (!$attack(colorflip(pos), {x:square.x,y:7-square.y})) return 0;\n  return 1;\n}","links":[],"eval":true,"squares":1,"highlight":2,"forwhite":true,"graph":false,"elo":null});
data.push({"name":"Space","group":"Space","text":"<b>$</b> computes the space evaluation for a given side. The [[Space area]] bonus is multiplied by a weight: number of our pieces minus two times number of open files. The aim is to improve play on game opening.","code":"function $$(pos, square) {\n  if ($non_pawn_material(pos) + $non_pawn_material(colorflip(pos)) < 12222) return 0;\n  var weight = -1;\n  for (var x = 0; x < 8; x++) {\n    for (var y = 0; y < 8; y++) {\n      if (\"PNBRQK\".indexOf(board(pos, x, y)) >= 0) weight++;\n    }\n  }\n  return (($space_area(pos, square) * weight * weight / 16) << 0) - 4 * $attacks_on_space(pos, square);\n}","links":[],"eval":true,"squares":0,"highlight":2,"forwhite":true,"graph":true,"elo":null});
data.push({"name":"Double attacked pawn","group":"Pawns","text":"<b>$</b>. Bonus for double attacks on unsupported pawns.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  if (board(pos, square.x, square.y) != \"p\") return 0;\n  if (board(pos, square.x - 1, square.y + 1) != \"P\") return 0;\n  if (board(pos, square.x + 1, square.y + 1) != \"P\") return 0;\n  if (board(pos, square.x - 1, square.y - 1) == \"p\") return 0;\n  if (board(pos, square.x + 1, square.y - 1) == \"p\") return 0;\n  return 1;\n}","links":[],"eval":true,"squares":1,"highlight":2,"forwhite":true,"graph":true,"elo":null});
data.push({"name":"Pawns mg","group":"Pawns","text":"<b>$</b> is middlegame evaluation for pawns.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  var v = 0;\n  v -= $isolated(pos, square) ? 5 : 0;\n  v -= $backward(pos, square) ? 9 : 0;\n  v -= $doubled(pos, square) ? 11 : 0;\n  v += $connected(pos, square) ?  $connected_bonus(pos, square) : 0;\n  v -= 13 * $weak_unopposed_pawn(pos, square);\n  return v;\n}","links":[],"eval":true,"squares":1,"highlight":2,"forwhite":true,"graph":false,"elo":null});
data.push({"name":"Pawns eg","group":"Pawns","text":"<b>$</b> is endgame evaluation for pawns.","code":"function $$(pos, square) {\n  if (square == null) return sum(pos, $$);\n  var v = 0;\n  v -= $isolated(pos, square) ? 15 : 0;\n  v -= $backward(pos, square) ? 24 : 0;\n  v -= $doubled(pos, square) ? 56 : 0;\n  v += $connected(pos, square) ?  $connected_bonus(pos, square) * ($rank(pos, square) - 3) / 4 << 0 : 0;\n  v -= 27 * $weak_unopposed_pawn(pos, square);\n  v += 20 * $double_attacked_pawn(pos, square);\n  return v;\n}","links":[],"eval":true,"squares":1,"highlight":2,"forwhite":true,"graph":false,"elo":null});




for (var i = 0; i < data.length; i++) eval("$" + data[i].name.toLowerCase().replace(/ /g, "_") + " = " + data[i].code + ";");
return data; })();
var PAWNVALUE = 206;
var _staticEvalListCache = [], _staticEvalListCacheSize = 20;
function getThreatsAndAttacks(n2) {
	for (var x=0; i<8; x++) {
		for (var y=0; y<8; y++) {
          
          //if (_flip) { x = 7-x; y = 7-y; }
          var sqeval = 0;
          if (n2 == "king_danger") {
            sqeval = $unsafe_checks(pos,{x:x,y:y});
            if (sqeval == 0) sqeval = $unsafe_checks(colorflip(pos),{x:x,y:7-y});
            if (sqeval == 0) sqeval = $weak_bonus(pos,{x:x,y:y});
            if (sqeval == 0) sqeval = $weak_bonus(colorflip(pos),{x:x,y:7-y});
            var showKDarrows = function(p,flipy) {
              for (var x2 = 0; x2 < 8; x2++) for (var y2 = 0; y2 < 8; y2++) {
                if ("PNBRQ".indexOf(board(p, x, y)) < 0) continue;
                var s = {x:x,y:y}, s2 = {x:x2,y:y2}, a = false;
                if ($king_ring(p, s2)) {
                  if ($pawn_attack(p, s2) && Math.abs(x-x2)==1 && y-y2==flipy?1:-1
                   || $knight_attack(p, s2, s)
                   || $bishop_xray_attack(p, s2, s)
                   || $rook_xray_attack(p, s2, s)
                   || $queen_attack(p, s2, s)) a = false;
                }
                if (!a && $knight_attack(p,s2,s) && $safe_check(p, s2, 0) > 0) a = true;
                if (!a && $bishop_xray_attack(p,s2,s) && $safe_check(p, s2, 1) > 0) a = true;
                if (!a && $rook_xray_attack(p,s2,s) && $safe_check(p, s2, 2) > 0) a = true;
                if (!a && $queen_attack(p,s2,s) && $safe_check(p, s2, 3) > 0) a = true;
                if (a) {
                  //if (!flipy) showArrow3({from:s,to:s2}); else showArrow3({from:{x:x,y:7-y},to:{x:x2,y:7-y2}});
                  if (!flipy) console.log("from: "+s + " to:" +s2); else console.log("from: "+{x:x,y:7-y} + " to:" +{x:x2,y:7-y2});
                  //finalArrow3();
                }
              }
            };
            //showKDarrows(parseFEN(game.fen());,false);
            //showKDarrows(colorflip(pos),true);
          } else {
            try {
              sqeval = func(pos,{x:x,y:y});
              if (sqeval == 0 && sei.forwhite) sqeval = func(colorflip(pos),{x:x,y:7-y});
              if (sqeval == 0) sqeval = func(pos,{x:x,y:y},true);
              if (sqeval == 0 && sei.forwhite) sqeval = func(colorflip(pos),{x:x,y:7-y},true);
            } catch (e) {}
          }
          
        }
	}
}
function getStaticEvalList_new(pos1) {
	var data = _staticEvalData;
	var pos = parseFEN(pos1);
   
	var arrayLength = data.length;
	for (var i = 0; i < arrayLength; i++) {
		console.log(data[i].name);
		n2 = data[i].name.toLowerCase().replace(/ /g, "_");
		try {
		  //alert("1.2")
		  //console.log("func = $" + n2 + ";")
		 
			eval("func = $" + n2 + ";");
			cureval = func(pos);
			console.log(cureval)
			if (data[i].forwhite) curevalflip = func(colorflip(pos));
			//console.log(curevalflip)
		  }
		  catch (e) {
			cureval = curevalflip = "[ERROR: " + e.message + "]";
		  }
		  var evalInPawns = data[i].name == "Main evaluation"
                 || data[i].name == "Middle game evaluation"
                 || data[i].name == "End game evaluation" ? " (" + (cureval / PAWNVALUE).toFixed(2) + ")" : "";
		
					 
		  var whiteEvalString = data[i].name + (data[i].forwhite ? " (white)" : "") +  " = <b>" + cureval + evalInPawns+ "</b>";
		  var blackEvalString = data[i].forwhite ? data[i].name +  " (black) = <b>" + curevalflip + "</b><br/>" : "";
		  var totalEvalString = data[i].forwhite ? data[i].name + " (total) = <b>" + (cureval - curevalflip) + "</b>" : "";
		  console.log(whiteEvalString)	
		  console.log(blackEvalString)	
		  console.log(totalEvalString)
			if (data[i].squares || data[i].highlight > 0) {
				 console.log(data[i].squares)	
				 console.log(data[i].highlight)	
			}
	}
}
function getStaticEvalList(pos1) {
  var pos = parseFEN(pos1);
  var posfen = pos1
  for (var si = 0; si < _staticEvalListCache.length; si++)
    if (_staticEvalListCache[si][0] == posfen) return _staticEvalListCache[si][1];
    
  var data = _staticEvalData;
  var grouplist = [], midindex = null, endindex = null, maincode = null;
  for (var i = 0; i < data.length; i++) {
    if (data[i].name == "Middle game evaluation") midindex = i;
    if (data[i].name == "End game evaluation") endindex = i;
    if (data[i].name == "Main evaluation") maincode = data[i].code;
  }
  if (midindex == null || endindex == null || maincode == null) return;
  var zero = function() {return 0;};
  for (var i = 0; i < data.length; i++) {
    var n = data[i].name.toLowerCase().replace(/ /g, "_");
    while (i != midindex && i != endindex && maincode.indexOf("$" + n + "(") >= 0) {
      try {
        maincode = maincode.replace("$" + n + "(", "(function(){return " + eval("$" + n + "(pos)")+ ";})(");
      }
      catch (e) {
        alert(e.message);
        return [];
      }
    }
    if (data[midindex].code.indexOf("$" + n + "(") < 0
     && data[endindex].code.indexOf("$" + n + "(") < 0) continue;
    var code = data[i].code, list = [];
    for (var j = 0; j < data.length; j++) {
      if (!data[j].graph || data[j].group != data[i].group || i == j) continue;
      var n2 = data[j].name.toLowerCase().replace(/ /g, "_");
      code = code.replace("$" + n2 + "(", "$g-" + n2 + "(").replace("$" + n2 + "(", "$g-" + n2 + "(");
      list.push(n2);
    }
    if (data[i].graph) list.push(n);
    for (var j = 0; j < list.length; j++) {
      var n2 = list[j];
      if (code.indexOf("$g-" + n2 + "(") < 0 && !data[i].graph) continue;
      var mw = 0, mb = 0, ew = 0, eb = 0, func = null;
      try {
        eval("func = " + code.replace("$g-"+n2+"(","$"+n2+"(")
                             .replace("$g-"+n2+"(","$"+n2+"(")
                             .replace(/\$g\-[a-z_]+\(/g, "zero(") + ";");
        if (data[midindex].code.indexOf("$" + n + "(pos") >= 0) mw = func(pos);
        if (data[midindex].code.indexOf("$" + n + "(colorflip(pos)") >= 0) mb = func(colorflip(pos));
        if (data[endindex].code.indexOf("$" + n + "(pos") >= 0) ew = func(pos);
        if (data[endindex].code.indexOf("$" + n + "(colorflip(pos)") >= 0) eb = func(colorflip(pos));
      }
      catch (e) {
        alert(e.message);
        return [];
      }
      var evals = [mw - mb, ew - eb];
      var index = grouplist.map(function(e) { return e.elem; }).indexOf(n2);
      if (index < 0) {
        grouplist.push({group:data[i].group,elem:n2,item:evals,hidden:false,mc:pos.m[1]});
      } else {
        grouplist[index].item[0] += evals[0];
        grouplist[index].item[1] += evals[1];
		//console.log("=======================")
		//console.log(n2)
		//console.log("middle game")
		//console.log(evals[0])
		//console.log("end game")
		//console.log(evals[1])
      }        
    }

  }
  grouplist.sort(function(a,b) {return (a.group > b.group) ? 1 : ((b.group > a.group) ? -1 : 0);} );
  maincode = maincode.replace("function $$(pos)","function $$(PMG,PEG)")
                     .replace("$middle_game_evaluation(pos)","PMG")
                     .replace("$end_game_evaluation(pos)","PEG")  
  var mainfunc = eval("(" + maincode + ")");
  for (var i = 0; i < grouplist.length; i++) {
    grouplist[i].item.push(mainfunc(grouplist[i].item[0], grouplist[i].item[1]) - mainfunc(0, 0));
  }
  grouplist.push({group:"Tempo",elem:"tempo",item:[mainfunc(0, 0),mainfunc(0, 0),mainfunc(0, 0)],hidden:false,mc:pos.m[1]});
  
  _staticEvalListCache.push([posfen, grouplist]);
  if (_staticEvalListCache.length > _staticEvalListCacheSize) _staticEvalListCache.shift();
  return grouplist;
}
function bounds(x, y) {
  return x >= 0 && x <= 7 && y >= 0 && y <= 7;
}

function board(pos, x, y) {
  if (x >= 0 && x <= 7 && y >= 0 && y <= 7) return pos.b[x][y];
  return "x";
}

function colorflip(pos) {
  var board = new Array(8);
  for (var i = 0; i < 8; i++) board[i] = new Array(8);
  for (x = 0; x < 8; x++) for (y = 0; y < 8; y++) {
    board[x][y] = pos.b[x][7-y];
    var color = board[x][y].toUpperCase() == board[x][y];
    board[x][y] = color ? board[x][y].toLowerCase() : board[x][y].toUpperCase();
  }
  return {b:board, c:[pos.c[2],pos.c[3],pos.c[0],pos.c[1]], e:pos.e == null ? null : [pos.e[0],7-pos.e[1]], w:!pos.w, m:[pos.m[0],pos.m[1]]};
}

function sum(pos, func, param) {
  var sum = 0;
  for (var x = 0; x < 8; x++) for(var y = 0; y < 8; y++) sum += func(pos, {x:x, y:y}, param);
  return sum;
}

function parseMoveNumber(fen) {
  var a = fen.replace(/^\s+/,'').split(' ');
  return (a.length > 5 && !isNaN(a[5]) && a[5] != '') ? parseInt(a[5]) : 1;
}

function parseFEN(fen) {
  var board = new Array(8);
  for (var i = 0; i < 8; i++) board[i] = new Array(8);
  var a = fen.replace(/^\s+/,'').split(' '), s = a[0], x, y;
  for (x = 0; x < 8; x++) for (y = 0; y < 8; y++) {
    board[x][y] = '-';
  }
  x = 0, y = 0;
  for (var i = 0; i < s.length; i++) {
    if (s[i] == ' ') break;
    if (s[i] == '/') {
      x = 0;
      y++;
    } else {
      if (!bounds(x, y)) continue;
      if ('KQRBNP'.indexOf(s[i].toUpperCase()) != -1) {
        board[x][y] = s[i];
        x++;
      } else if ('0123456789'.indexOf(s[i]) != -1) {
        x += parseInt(s[i]);
      } else x++;
    }
  }
  var castling, enpassant, whitemove = !(a.length > 1 && a[1] == 'b');  
  if (a.length > 2) {
    castling = [ a[2].indexOf('K') != -1, a[2].indexOf('Q') != -1,
                 a[2].indexOf('k') != -1, a[2].indexOf('q') != -1];
  } else {
    castling = [ true, true, true, true ];
  }
  if (a.length > 3 && a[3].length == 2) {
    var ex = 'abcdefgh'.indexOf(a[3][0]);
    var ey = '87654321'.indexOf(a[3][1]);
    enpassant = (ex >= 0 && ey >= 0) ? [ex, ey] : null;
  } else {
    enpassant = null;
  }
  var movecount = [(a.length > 4 && !isNaN(a[4]) && a[4] != '') ? parseInt(a[4]) : 0,
                   (a.length > 5 && !isNaN(a[5]) && a[5] != '') ? parseInt(a[5]) : 1];
  return {b:board, c:castling, e:enpassant, w:whitemove, m:movecount};
}

function generateFEN(pos) {
  var s = '', f = 0, castling = pos.c, enpassant = pos.e, board = pos.b;
  for (var y = 0; y < 8; y++) {
    for (var x = 0; x < 8; x++) {
      if (board[x][y] == '-') {
        f++;
      } else {
        if (f > 0) s += f, f = 0;
        s += board[x][y];
      }
    }
    if (f > 0) s += f, f = 0;
    if (y < 7) s += '/';
  }
  s += ' ' + (pos.w ? 'w' : 'b')
     + ' ' + ((castling[0] || castling[1] || castling[2] || castling[3])
           ? ((castling[0] ? 'K' : '') + (castling[1] ? 'Q' : '') +
             (castling[2] ? 'k' : '') + (castling[3] ? 'q' : ''))
           : '-')
     + ' ' + (enpassant == null ? '-' : ('abcdefgh'[enpassant[0]] + '87654321'[enpassant[1]]))
     + ' ' + pos.m[0] + ' ' + pos.m[1];
  return s;
}

function isWhiteCheck(pos) {
  var kx = null, ky = null;
  for (var x = 0; x < 8; x++) {
    for (var y = 0; y < 8; y++) {
      if (pos.b[x][y] == 'K') { kx = x; ky = y; }
    }
  }
  if (kx == null || ky == null) return false;
  if (  board(pos, kx + 1, ky - 1) == 'p'
     || board(pos, kx - 1, ky - 1) == 'p'
     || board(pos, kx + 2, ky + 1) == 'n'
     || board(pos, kx + 2, ky - 1) == 'n'
     || board(pos, kx + 1, ky + 2) == 'n'
     || board(pos, kx + 1, ky - 2) == 'n'
     || board(pos, kx - 2, ky + 1) == 'n'
     || board(pos, kx - 2, ky - 1) == 'n'
     || board(pos, kx - 1, ky + 2) == 'n'
     || board(pos, kx - 1, ky - 2) == 'n'
     || board(pos, kx - 1, ky - 1) == 'k'
     || board(pos, kx    , ky - 1) == 'k'
     || board(pos, kx + 1, ky - 1) == 'k'
     || board(pos, kx - 1, ky    ) == 'k'
     || board(pos, kx + 1, ky    ) == 'k'
     || board(pos, kx - 1, ky + 1) == 'k'
     || board(pos, kx    , ky + 1) == 'k'
     || board(pos, kx + 1, ky + 1) == 'k') return true; 
  for (var i = 0; i < 8; i++) {
    var ix = (i + (i > 3)) % 3 - 1;
    var iy = (((i + (i > 3)) / 3) << 0) - 1;
    for (var d = 1; d < 8; d++) {
      var b = board(pos, kx + d * ix, ky + d * iy);
      var line = ix == 0 || iy == 0;
      if (b == 'q' || b == 'r' && line || b == 'b' && !line) return true;
      if (b != "-") break;
    }
  }
  return false;
}