
var $drop = $("#choosecode");

if ($drop.length){
    $("#codeselector").attr("style","");
    $(".codelink").attr("style","");
    $(".codeheadline").hide();
    $(".othercode").each(function(idx,elem){
        var name = $(elem).attr("data-name");
        $("<option>").attr("value",name).text(name+":").appendTo($drop);
        if(idx){
            $(elem).hide();
        }
    });
    $drop.on("change",function(){
        var target = $drop.val();
        $(".othercode").hide();
        $(".othercode[data-name='"+target+"']").show();
    });
}