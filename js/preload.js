function Preload() {
    var items = new Array();
    var completedItems = 0;
    
    this.init = function() {
        $.getJSON('media/list.php', function(data){
            items = data;
            updateProgress();
            run();
        })
        
    }
    var run = function() {
        for (i=0; i<items.length; i++) {
            $.get('media/' + items[i], function(){
                addToProgress();
            });
        }
    }
    var addToProgress = function() {
        completedItems++;
        updateProgress();
    }
    var updateProgress = function() {
        var percentage = 100 - ((completedItems / items.length) * 100);
        percentage = percentage + "%";
        $("#border").css({'right': percentage});
    }
}
var preload = new Preload();

$(function(){
    preload.init();
});