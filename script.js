const moveAudio = new Audio('sounds/Move.mp3');
const captureAudio = new Audio('sounds/Capture.mp3');
const confirmAudio = new Audio('sounds/Confirmation.mp3');
const startAudio = new Audio('sounds/Berserk.mp3');
const endAudio = new Audio('sounds/Error.mp3');
const gameOverAudio = new Audio('sounds/gameOver.wav');
const gameFinishAudio = new Audio('sounds/Victory.mp3');
const lowTimeAudio = new Audio('sounds/LowTime.mp3');

var START = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
var _engine, _curmoves = [];
var _history = [[START]], _history2 = null, _historyindex = 0;
var _flip = false, _edit = false, _info = false, _play = null;
var _arrow = false, _menu = false;
var _dragElement = null, _dragActive = false, _startX, _startY, _dragCtrl, _dragLMB, _clickFrom, _clickFromElem;
var _tooltipState = false, _wantUpdateInfo = true;;
var _wname = "White", _bname = "Black", _color = 0, _bodyScale = 1;
var _nncache = null;
var moveAN = ""
var board
var game = new Chess()
var gametest = new Chess()
var orggamedata = getPuzzlesBackUp(gamedata)
var movelist = ""
var currmvindex = 0  
var hintStr = ""  
var pgnEl = $('#pgn')
var index = 0
var cfg = ""
var correct = 0
var answer = ""
var text_move_map = new Map(
	[
		["N","knight"],
		["B","bishop"],
		["Q","queen"],
		["K","king"],
		["R","rook"],
		["n","knight"],
		["b","bishop"],
		["q","queen"],
		["k","king"],
		["r","rook"],
		["x","takes"],
		["O-O","king side castle"],
		["O-O-O","longcastle"],
		["#","checkmate"]
	]
);
var SQUARES = {
           0:"a8",    1:"b8",    2:"c8",    3:"d8",    4:"e8",    5:"f8",    6:"g8",    7:"h8",
          16:"a7",   17:"b7",   18:"c7",   19:"d7",   20:"e7",   21:"f7",   22:"g7",   23:"h7",
          32:"a6",   33:"b6",   34:"c6",   35:"d6",   36:"e6",   37:"f6",   38:"g6",   39:"h6",
          48:"a5",   49:"b5",   50:"c5",   51:"d5",   52:"e5",   53:"f5",   54:"g5",   55:"h5",
          64:"a4",   65:"b4",   66:"c4",   67:"d4",   68:"e4",   69:"f4",   70:"g4",   71:"h4",
          80:"a3",   81:"b3",   82:"c3",   83:"d3",   84:"e3",   85:"f3",   86:"g3",   87:"h3",
          96:"a2",   97:"b2",   98:"c2",   99:"d2",  100:"e2",  101:"f2",  102:"g2",  103:"h2",
         112:"a1",  113:"b1",  114:"c1",  115:"d1",  116:"e1",  117:"f1",  118:"g1",  119:"h1"
    };
	var PIECES = {
		r: "Black Rook",
		n: "Black Knight",
		b: "Black Bishop",
		q: "Black Queen",
		k: "Black King",
		p: "Black Pawn",
		R: "White Rook",
		N: "White Knight",
		B: "White Bishop",
		Q: "White Queen",
		K: "White King",
		P: "White Pawn"
	};

function is_digit(c) {
        return '0123456789'.indexOf(c) !== -1;
    }

function describe(fen) {
        var tokens = fen.split(/\s+/);
        var position = tokens[0];
        var square = 0,
		whitePawns = [],
		  blackPawns = [],
		  whiteRooks = [],
		  blackRooks = [],
		  whiteBishops = [],
		  blackBishops = [],
		  whiteKnights = [],
		  blackKnights =[],
		  blackQueen = [],
		  whiteQueen = [],
		  blackKing = [],
		  whiteKing = []
		//console.log(fen)
		
        for (var i = 0; i < position.length; i++) {
            var piece = position.charAt(i);
			if (piece === '/') {
                square += 8;
            } else if (is_digit(piece)) {
                square += parseInt(piece);
				//alert(square)
            } else {
                //console.log(PIECES[piece] + " " + SQUARES[square] )
				
				if(piece == "p") {
					blackPawns.push(SQUARES[square])
				} else if(piece == "P") {
					whitePawns.push(SQUARES[square])
				} else if(piece == "r") {
					blackRooks.push(SQUARES[square])
				} else if(piece == "R") {
					whiteRooks.push(SQUARES[square])
				} else if(piece == "n") {
					blackKnights.push(SQUARES[square])
				} else if(piece == "N") {
					whiteKnights.push(SQUARES[square])
				} else if(piece == "b") {
					blackBishops.push(SQUARES[square])
				} else if(piece == "B") {
					whiteBishops.push(SQUARES[square])
				} else if(piece == "q") {
					blackQueen.push(SQUARES[square])
				} else if(piece == "Q") {
					whiteQueen.push(SQUARES[square])
				} else if(piece == "k") {
					blackKing.push(SQUARES[square])		
				} else if(piece == "K") {
					whiteKing.push(SQUARES[square])		
				} 
				
                square++;
            }
        }
		var retStr = ""
		if(whitePawns != "") {
			retStr += "White pawn(s): " + whitePawns + "\n"
		}
		if(whiteRooks != "") {
			retStr += "White rook(s): " + whiteRooks + "\n" 
		}
		if(whiteKnights!= "") {
			retStr += "White knight(s): " + whiteKnights + "\n" 
		}
		if(whiteBishops != "") {
			retStr += "White bishops(s): " + whiteBishops + "\n"
		}
		if(whiteQueen != "") {
			retStr += "White Queen(s): " + whiteQueen + "\n"
		}
		if(whiteKing != "") {
			retStr += "White king: " + whiteKing + "\n"			
		}
		retStr += "<br />"
		if(blackPawns != "") {
			retStr += "Black pawn(s): " + blackPawns + "\n" 
		} 
		if(blackRooks != "") {
			retStr += "Black rook(s): " + blackRooks + "\n" 
		} 
		if(blackKnights != "") {
			retStr += "Black knight(s): " + blackKnights + "\n" 
		} 
		if(blackBishops != "") {
			retStr += "Black bishop(s): " + blackBishops + "\n" 
		} 
		if(blackQueen != "") {
			retStr += "Black Queen(s): " + blackQueen + "\n" 
		} 
		if(blackKing != "") {
			retStr += "Black king: " + blackKing + "\n" 	
		}
		retStr += "<br />"	
		return retStr
		
        
    }
function toggleBoard() {
	var x = document.getElementById("toggle");

	if (x.innerHTML === "Show Board") {
		x.innerHTML = "Hide Board";
		var b = document.getElementById("myboard");
		b.style.display = "block"
		var c = document.getElementById("chesskeyboard");
		c.style.display = "none"
	} else {
		x.innerHTML = "Show Board";
		var b = document.getElementById("myboard");
		b.style.display = "none"
		if (isTouchDevice()) {
			var c = document.getElementById("chesskeyboard");
			c.style.display = "block"
		}
	}
}	
function ShowAnswer() {
	alert("Ignore the first move.\nSolution is from second move\n" + answer)
}
function getPuzzlesBackUp(gamedata) {
	var orggamedata = []
	for (var j = 0; j < gamedata.length; j++){

		orggamedata.push(gamedata[j]);

	}
	return orggamedata
}
var getMove = function () {
	makeBestMove()
    //window.setTimeout(makeBestMove, 250);
};
var onDragStart = function(source, piece, position, orientation) {
  if (game.game_over() === true ||
      (game.turn() === 'w' && piece.search(/^b/) !== -1) ||
      (game.turn() === 'b' && piece.search(/^w/) !== -1)) {
    return false;
  }
};

var onDrop = function(source, target) {
  // see if the move is legal
  var move = game.move({
    from: source,
    to: target,
    promotion: 'q' // NOTE: always promote to a queen for example simplicity
  });

  // illegal move
  if (move === null) return 'snapback';
  str = movelist[currmvindex]
	if (move.captured) captureAudio.play()
        else moveAudio.play()
	str = movelist[currmvindex]
	if(source != str[0]+str[1] || target != str[2]+str[3]) {
		game.undo()
		updateStatus();
		return
	}
	currmvindex += 1
	
			
	if(currmvindex == movelist.length ) {
		alert("Solved!")
		//setPos()
		correct = correct+1
		$('#score').text(correct);
		confirmAudio.play();
		// $('#correct').show();
			// setTimeout(() => {
				// $('#correct').hide();
			// }, 200);
		return
	}
	if (move.captured) captureAudio.play();
	else moveAudio.play();
	makeBestMove();
			
  //updateStatus();
	//getMove()
    
};

var makeBestMove = function () {
    if (game.game_over()) {
        alert('Game over');
    }
	console.log(movelist)
	console.log(currmvindex)
	str = movelist[currmvindex]
    var source = str[0] + str[1]
	var target = str[2] + str[3]
	var move = game.move({
		from: source,
		to: target,
		promotion: 'q' // NOTE: always promote to a queen for example simplicity
	  });
	currmvindex += 1
    board.position(game.fen());
	updateStatus();
   
    // if (game.game_over()) {
        // alert('Game over');
    // }
};



// update the board position after the piece snap
// for castling, en passant, pawn promotion
var onSnapEnd = function() {
    board.position(game.fen());
};
function MakeMove() {
	var m = document.getElementById("move");
	var ret = game.move(m.value)
	//console.log(ret)
	if (ret === null) {
		alert("Illegal move!");
		ClearMove()
		return
	}
	
	str = movelist[currmvindex]
	var source = str[0] + str[1]
	var target = str[2] + str[3]
	
	var ms = game.pgn().split(" ")
	ms = ms[ms.length - 1];
	game.undo()
	console.log(m.value)
	console.log(ms)
	if(m.value!= ms) {
		alert("Not correct! Keep trying");
		return
	}
	game.move(m.value)
	currmvindex+=1
	updateStatus();
	//moveAudio.play()
	//getResponseMove();
	if(currmvindex == movelist.length ) {
		alert("Solved!")
		//setPos()
		correct = correct+1
		$('#score').text(correct);
		confirmAudio.play();
		// $('#correct').show();
			// setTimeout(() => {
				// $('#correct').hide();
			// }, 200);
		return
	}
	makeBestMove();
	ClearMove()
	moveAudio.play()
	if (!isTouchDevice()) {
		document.getElementById("move").focus();
	}
	
	//console.log(m.value)
 }
 function isTouchDevice () {
    return 'ontouchstart' in document.documentElement
  }
var updateStatus = function() {

  var status = '';

  var moveColor = 'White';
  if (game.turn() === 'b') {
    moveColor = 'Black';
  }

  // checkmate?
  if (game.in_checkmate() === true) {
    status = 'Game over, ' + moveColor + ' is in checkmate.';
  }

  // draw?
  else if (game.in_draw() === true) {
    status = 'Game over, drawn position';
  }

  // game still on
  else {
    status = moveColor + ' to move';

    // check?
    if (game.in_check() === true) {
      status += ', ' + moveColor + ' is in check';
    }
  }

  
  
  var ms = game.pgn().split("]")
  
  pgnEl.html(game.pgn());
  board.position(game.fen());
};

//https://www.geeksforgeeks.org/how-to-generate-random-number-in-given-range-using-javascript/
function randomNumber(min, max) {  
    return Math.random() * (max - min) + min; 
}  
  
//https://stackoverflow.com/questions/3396088/how-do-i-remove-an-object-from-an-array-with-javascript
var removeByAttr = function(arr, attr, value){
    var i = arr.length;
    while(i--){
       if( arr[i] 
           && arr[i].hasOwnProperty(attr) 
           && (arguments.length > 2 && arr[i][attr] === value ) ){ 

           arr.splice(i,1);

       }
    }
    return arr;
}


function ClearMove () {
	moveAN = ""
	var m = document.getElementById("move");
	m.value = moveAN
}
function ButtonSingleClick (buttonobj) {
	
	
	if(buttonobj.innerHTML == "Rook") {
		moveAN+="R"
	} else if(buttonobj.innerHTML == "Knight") {
		moveAN+="N"
	} else if(buttonobj.innerHTML == "Bishop") {
		moveAN+="B"
	} else if(buttonobj.innerHTML == "Queen") {
		moveAN+="Q"
	} else if(buttonobj.innerHTML == "King") {
		moveAN+="K"
	} else if(buttonobj.innerHTML == "Takes") {
		moveAN+="x"
	} else if(buttonobj.innerHTML == "Long Castle") {
		moveAN="O-O-O"
	} else if(buttonobj.innerHTML == "Short Castle") {
		moveAN="O-O"
	} else if(buttonobj.innerHTML == "Promote") {
		moveAN+="="
	} else {
		moveAN+=buttonobj.innerHTML
	}

	var m = document.getElementById("move");
	m.value = moveAN
	
	
}
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
		console.log(key + ": " + value);
    });
    return vars;
}
function getIndexOfId(id) {
	for (var i = 0; i < gamedata.length; i++) {
		if(gamedata[i].id == id) {
			return i
		}
	}
	return -1
}
function setPos() {
	if (!isTouchDevice()) {
		var c = document.getElementById("chesskeyboard");
		c.style.display = "none"
	}
	params = getUrlVars();
	index = -1
	if("id" in params) {
		id = params["id"];
		index = getIndexOfId(id)
	}
	var length = gamedata.length - 1
	currmvindex = 1  
	if (index = -1) {
		index = 0
		
		index = Math.floor(randomNumber(0, length))
	}
	
	
	if (index == -1) {
		gamedata = getPuzzlesBackUp(orggamedata)
		length = gamedata.length - 1
		index = Math.floor(randomNumber(0, length))
	}
	var fen = gamedata[index].startfen.split(" ")
	//var nfen = fen[0] + " " + fen[1] + " KQkq - 1 1"
	var nfen = gamedata[index].startfen
	game.load(nfen)
	console.log("--------FEN--------------")
	console.log(nfen)
	console.log("---------------------------")
	
	movelist = gamedata[index].moves.split(" ")
	
	console.log("--------SOL----------------")
	console.log(movelist)
	console.log("---------------------------")
	
	for (var i = 0; i < movelist.length; i++) {
		str = movelist[i]
		var source = str[0] + str[1]
		var target = str[2] + str[3]
		var move = game.move({
			from: source,
			to: target,
			promotion: 'q' // NOTE: always promote to a queen for example simplicity
		  });
	}
	console.log("--------ANS--------------")
	var ms = game.pgn().split("]")
	ms = ms[ms.length - 1];
	
	console.log(ms)
	console.log(movelist)
	console.log("---------------------------")
	answer = ms
	for (var i = 0; i < movelist.length; i++) {
		game.undo()
	}
	str = movelist[0]
    var source = str[0] + str[1]
	var target = str[2] + str[3]
	var move = game.move({
		from: source,
		to: target,
		promotion: 'q' // NOTE: always promote to a queen for example simplicity
	  });

	var or = 'black'
	var turn = "Black"
	
	if(game.turn() == 'w') {
		or = 'white'
		turn = "White"
	}
	//alert(index + " " + nfen + " " + game.fen())
	var cfg = {
	  draggable: true,
	  position: game.fen(),
	  onDragStart: onDragStart,
	  onDrop: onDrop,
	  onSnapEnd: onSnapEnd,
	  moveSpeed: 'slow',
	  snapbackSpeed: 'slow',
	  snapSpeed: 'slow',
	  trashSpeed: 'slow',
	  orientation: or
	};
	//document.getElementById("turn").innerHTML = turn + " to play";
	var desiredLink = "https://lichess.org/training/" + gamedata[index].id
			//d.innerHTML += desiredLink.link(desiredLink)
	
	document.getElementById("desc").innerHTML = "Position description: <br />" + describe(game.fen()) + turn + " to play <br />" + "Lichess Puzzle Link:" + desiredLink.link(desiredLink);
	board = ChessBoard('myboard', cfg);
	pgnEl.html(game.pgn());
	
	
}
var input = document.getElementById("move");
    input.addEventListener("keypress", function(event) {
      if (event.keyCode === 13) {
       event.preventDefault();
       document.getElementById("submit").click();
      }
    });

startAudio.play();
setPos()














