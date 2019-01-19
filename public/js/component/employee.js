require(["../require-config"],function(){
	require(["jquery","nav","bootstrap"],function(){
		class Employee {
			constructor(){
				this.init()
			}
			init(){
				//调整导航栏的状态
				$(".nav-manage").addClass("active").prev().removeClass("active");
				//先给操作按钮添加事件
				$("#modifySpan").on("click",function(){
					$('#modifyModal').modal('toggle')
				});
			}
		}
		return new Employee();
	})
})
