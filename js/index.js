$(function(){
	var mg = /^[\w\d]{6,14}$/;
	var mg1 = /^1[3|4|5|7|8][0-9]\d{8}$/;
	$('#mg_input1').blur(function(){
		if(mg1.test($('#mg_input1').val())){
			$('#ma1').text('输入正确');
			$('#ma1').css('color', 'green');
		}else {
			$('#ma1').text('请输入正确手机格式');
			$('#ma1').css('color', 'red');
		}
	})
	$("#mg_input2").blur(function() {
		if (mg.test($("#mg_input2").val())) {
			$('#ma2').text('输入正确')
			$('#ma2').css('color', 'green')
		} else {
			$('#ma2').text('密码6-14位')
			$('#ma2').css('color', 'red')
		}
	});
	$('#mg_denglu').click(function(){
		$.ajax({
						type:"post",
						url:"http://10.115.11.224/supermarket/data/login.php",
						async:true,
						data:{'user_phone':$('#mg_btn2').val(),'user_pass_word':$('#mg_btn3').val()},
						dataType:'jsonp',
						jsonp:'callback',
						jsonpCallback:'success_JsonpCallback',
						success:function(data){
							debugger;
							if(data.msg=='success'){
								
								window.location.href='page/home page.html'
							}
							if(data.msg=='error'){
//								$('#masking').show(),
//								$('#auto').show(),
//								$('#auto').html(data.reason)
//								$('#auto').click(function(){
//									$('#masking').hide(),
//								$('#auto').hide()
//								})
                            masking.style.display='block',
                            auto.style.display='block',
                            auto.innerHTML=data.reason
                            setTimeout(function(){
                            	 masking.style.display='none',
                            	 auto.style.dispaly='none'
                            },2000)
								
								
							}
							
							
							
						},
						error:function(){
							
						}
						
					});
	})
	

})