window.onload = function() {

	var oDiv = document.getElementById('imgBox');
	oDiv.onmouseover = function() {
		this.className = 'box txtShow';
	};
	oDiv.onmouseout = function() {
		this.className = 'box';
	}

	var oDiv2 = document.getElementById('imgBox2');
	oDiv2.onmouseover = function() {
		this.className = 'box2 txtShow';
	};
	oDiv2.onmouseout = function() {
		this.className = 'box2';
	}
	var oDiv3 = document.getElementById('imgBox3');
	oDiv3.onmouseover = function() {
		this.className = 'box3 txtShow';
	};
	oDiv3.onmouseout = function() {
		this.className = 'box3';
	}

	var main = document.getElementById("main");
	var conter = document.getElementById('conter');
	var shangyiye = document.getElementById('shangyiye');
	var xiayiye = document.getElementById('xiayiye');
	var buttons = document.getElementById('buttons').getElementsByTagName('span');
	var index = 1;
	var bianhuan;

	function showButton() {
		for(var i = 0; i < 6; i++) {
			if(buttons[i].className == 'yuandian') {
				buttons[i].className = '';
				break;
			}
		}
		buttons[index - 1].className = 'yuandian';
	}

	function lod(ok) {
		var next = parseInt(conter.style.left) + ok;
		var time = 400;
		var cishu = 10;
		var speed = ok / (time / cishu);

		function trans() {
			if((speed > 0 && parseInt(conter.style.left) < next) || (speed < 0 && parseInt(conter.style.left) > next)) {
				conter.style.left = parseInt(conter.style.left) + speed + 'px';
				setTimeout(trans, cishu);
			} else {
				conter.style.left = next + 'px';
				if(next > -1617) {
					conter.style.left = -6468 + 'px';
				}
				if(next < -6468) {
					conter.style.left = -1617 + 'px';
				}
			}
		}
		trans();
	}

	function pu() {
		bianhuan = setInterval(function() {
			xiayiye.onclick();
		}, 4851)
	}
	pu();
	xiayiye.onclick = function() {
		lod(-1617);
		if(index == 4) {
			index = 1;
		} else {
			index += 1;
		}
		showButton();
	}
	shangyiye.onclick = function() {
		lod(1617);
		if(index == 1) {
			index = 4;
		} else {
			index -= 1;
		}
		showButton();
	}
	for(var i = 0; i < 6; i++) {
		buttons[i].onclick = function() {
			var xingde = parseInt(this.getAttribute('index'));
			var ok = -1617 * (xingde - index);
			lod(ok);
			index = xingde;
			showButton();
		}
	}

}