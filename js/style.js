$(document).ready(function(){

	/*전체선택*/
	$("#all").click(function(){
		if($("#all").prop("checked")){
		$("input[name=all_chk]").prop("checked",true);
		}else{
			$("input[name=all_chk]").prop("checked",false);
		}
	});

	var length01 = $("input[name=all_chk]").length;
	$("input[name=all_chk]").click(function(){
		var length02 = $("input[name=all_chk]:checked").length;

		if(length02 == length01){
			$("#all").prop("checked",true);
		}else {
			$("#all").prop("checked",false);
		}
	});

	/********** POP UP **********/
	/* btn.AddTeacher 클릭했을 때 */	
	$(".teacher_open").click(function(){$(".teacher_info").addClass("on");});
	/* 1번 팝업창의 btn.X 클릭했을 때 */
	$(".teacher_info .btn_x").click(function(){$(".teacher_info").removeClass("on");});
	/* btn.cancel을 클릭했을때 */
	$(".teacher_info .btn_cancel").click(function(){$(".teacher_info").removeClass("on");});
	/* btn.add을 클릭했을때 -> 선생님 선택여부에 따라 */
	$(".teacher_info .btn_add").click(function(){
		var addTeacher = $(".teacher_info input[type='radio']:checked").length
		if(addTeacher == 1){
			$(".select_confirm").addClass("on");
		}else{
			$(".noSelect_alert").addClass("on");
		}
	});
	/* 2번 팝업창의 버튼을 클릭했을때*/
	$(".noSelect_alert .btn_no").click(function(){$(".noSelect_alert").removeClass("on");})
	$(".noSelect_alert .btn_yes").click(function(){$(".noSelect_alert").removeClass("on");})

	/* 3번 팝업창의 버튼을 클릭했을때*/
	$(".select_confirm .btn_no").click(function(){$(".select_confirm").removeClass("on");})
	$(".select_confirm .btn_yes").click(function(){$(".teacher_info, .select_confirm").removeClass("on");})
	





});