 $(function(){
 // Xu ly click vao nut dieu huong

 //Them mot the html vao trong vi tri bat ky
 	$('.slideanh').append("<img src='' class='anh'>");
 	var dem=1;
 	$('.phai').click(function(){
 		// soluonganh se luu ve so luong cai anh trong HTML
 		// dung boi cac thuoc tinh quan he parent,prev...khi ta kiem tra website dang lam de 
 		// lam duoc
 		var soluonganh = $(this).parent().prev().children().length;
 		soluonganh = soluonganh - 1;
 		// .slideanh img:nth-child la chi vi tri cua the ".slideanh img". 
 		// $('.slideanh img:nth-child(' + dem +')').attr('src') la lay attr cua ".slideanh img"
		//{src:$('.slideanh img:nth-child(' + dem +')').attr('src')} la gan cai sau do cho src
 		

 		// $(this) la click chinh no roi truy xuat den ".parent la bo me cua nut $('.phai')"
 		// ".prev() la truoc bo me cua $('.phai')", ".children('.anh') la con cua $('.phai')" .Cai nay de
 		// khi kich vao thanh phan thi chinh no se thay doi ,khong phu thuoc thang nao ca.
 		$(this).parent().prev().children('.anh').attr({src:$('.slideanh img:nth-child(' + dem +')').attr('src')});
 		// Neu dem =3 thi no se gan 0 vao dem va cu the lap lai
 		if(dem == soluonganh){dem = 0;}
 		dem = dem + 1; 
 	})
 	// Jquery cho quick view

 	// Them class hien len vao ".quickviewto va .den" khi click vao .quickview
 	$('.quickview').click(function(){
 		// Cai nay no cung tuong tu cai tren de tim duoc $(".quickviewto") tu parent, next...
 		// Cai nay muon lam duoc phai vao trang web minh dang lam roi bam kiem tra, roi nhin xem
 		// cai minh can o dau roi dung cai thuoc tinh parent,next... nay
 		$(this).parent().parent().next().next().addClass('hienlen');
 		$('.den').addClass('hienlen');
 	})
 	// Xoa class hien len vao ".quickviewto va .den" khi click vao "i.nutx, .den" 
 	$('i.nutx, .den').click(function(){
 		$('.quickviewto').removeClass('hienlen');
 		$('.den').removeClass('hienlen');
 	})
 	$(document).keyup(function(e) {
    if (e.keyCode == 27) {
    	$('.quickviewto').removeClass('hienlen');
 		$('.den').removeClass('hienlen');
    	}
	});

})  
 