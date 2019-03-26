$(function() {
	$(window).scroll(function() {
		if ($(this).scrollTop() > $('#nav').height()) {
			$('#img').addClass('now');
			$('#zimu1').addClass('now1');
			$('#p1').addClass('now2');
			$('#logo1').addClass('now3');
			$('#div1').addClass('now3');
			$('#div2').addClass('now3');
			$('#div3').addClass('now3');
			$('#shuzi1').addClass('now3');
		}
	});
	$(window).scroll(function() {
		if ($(this).scrollTop() > $('#mid').height()) {
			$('#box1').addClass('now4');
			$('#box2').addClass('now4');
			$('#box3').addClass('now4');
			$('#box4').addClass('now4');
			$('#logo3').addClass('now5');
			$('#bfs1').addClass('now6');
			$('#bfs2').addClass('now7');
			$('#bfs3').addClass('now8');
			$('#bfs4').addClass('now9');
			$('#bfs5').addClass('now0');
		}
	});
	$(window).scroll(function() {
		if ($(this).scrollTop() > $('#btm').height()) {
			$('#one').addClass('now4');
			$('#two').addClass('now4');
			$('#three').addClass('now4');
			$('#four').addClass('now4');
			$('#five').addClass('now5');
		}
	});
});
