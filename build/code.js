
var $drop = $("#choosecode");

if ($drop.length){
    $(".sidebyside").height("850px"); // to prevent it from being a mile long
    $("#codeselector").attr("style","");
    $(".codelink").attr("style","");
    $(".codeheadline").hide();
    $("<option>").attr("value","NONE").text(" --- Choose another implementation --- ").appendTo($drop);
    window.onhashchange = function(e){
        var target = decodeURI(window.location.hash.replace("#","") || "NONE");
        if (target === "NONE"){
            $(".sidebyside").removeClass("comparing");
        } else {
            $(".othercode").hide();
            $(".othercode[data-name='"+target+"']").show();
            $(".sidebyside").addClass("comparing");
        }
        $drop.val(target);
    }
    $(".othercode").each(function(idx,elem){
        var name = $(elem).attr("data-name");
        $("<option>").attr("value",name).text(name).appendTo($drop);
        $(elem).hide();
    });
    $drop.on("change",function(){
        var target = $drop.val();
        window.location.hash = "#"+encodeURI(target);
    });
    $(".hider").on("click",function(){
        window.location.hash = "#";
    });
    window.onhashchange();
}