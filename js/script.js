		$(document).ready(function(){
			/* Add item */
			$('#submitItem').submit(function(){
				$('#uncheckedSection > ul').prepend('<li><input type="checkbox" class="item-checkbox" name="checked"><span class="unchecked-item">' + $("#addItemTextbox").val() + '</span><span class="delete-button">-</span></li>');
				$('#addItemTextbox').val('');
			  return false;
			});
		/* Display delete button on hover */
		$('ul').on("mouseenter","li", function() {
			$(this).children('.delete-button').css("display","block");
		});
		$('ul').on("mouseleave","li", function() {
			$(this).children('.delete-button').css("display","none");
		});
		/* Delete item when delete button click */
		$('body').on("click","li .delete-button", function() {
				$(this).parent().remove();
		});
		/* Move unchecked-item to checkedSection */
		$("body").on("click","#uncheckedSection > ul > li .item-checkbox", function() {
			$("#checkedSection > ul").append($(this).parent().removeClass("unchecked-item").addClass("checked-item"));
		});
		/* Move checked-item to uncheckedSection */
		$("body").on("click", "#checkedSection > ul > li .item-checkbox", function() { $("#uncheckedSection > ul").append($(this).parent());
			$(this).parent().removeClass("checked-item").addClass("unchecked-item");
		});
		/* Delete all checked-items */ 
		$("#deleteCheckedSection > div").on("click","#deleteCheckedLink", function() {
			$("#checkedSection > ul > li").remove();
		});
		/* Sort items */
		$('#uncheckedSection > ul').sortable({ axis: "y" });
		$('#checkedSection > ul').sortable({ axis: "y" });
	});