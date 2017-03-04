
var $drop = $("#choosecode");

if ($drop.length){
    $("#codeselector").attr("style","");
    $(".codelink").attr("style","");
    $(".codeheadline").hide();
    $("<option>").attr("value","NONE").text(" --- Choose another implementation --- ").appendTo($drop);
    $(".othercode").each(function(idx,elem){
        var name = $(elem).attr("data-name");
        $("<option>").attr("value",name).text(name).appendTo($drop);
        $(elem).hide();
    });
    $drop.on("change",function(){
        var target = $drop.val();
        if (target === "NONE"){
            $(".sidebyside").removeClass("comparing");
        } else {
            $(".othercode").hide();
            $(".othercode[data-name='"+target+"']").show();
            $(".sidebyside").addClass("comparing");
        }
    });
    $(".hider").on("click",function(){
        $drop.val("NONE");
        $(".sidebyside").removeClass("comparing");
    });
}