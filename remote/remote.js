function RemoteServer() {
    this.main = function() {
        $('li a').click(function() {
            $.get('data.php?command=write&content=' + $(this).parent().index());
            return false;
        });
        $("#pgup").click(function() {
            $.get('data.php?command=write&content=pgup');
            return false;
        })
        $("#pgdown").click(function() {
            $.get('data.php?command=write&content=pgdown');
            return false;
        })
        $("#stop").click(function() {
            $.get('data.php?command=write&content=stop');
            return false;
        })
    }
    
}
//var remoteServer = new RemoteServer();
//remoteServer.main();

function RemoteClient() {
    var interval = 500;
    this.main = function() {
        run();
    }
    run = function() {
        $.get('remote/data.txt', function(data) {
            /*if (data == "stop") {
                alert("Remote client stopped.");
                $.get('remote/data.php?command=delete');
            }*/
            
            if (data == "pgup") {
                $.scrollTo("-=400px", {axis: "y", duration: 500});
                $.get('remote/data.php?command=delete', function() {
                    setTimeout(run, interval);
                });
            } else if (data == "pgdown") {
                $.scrollTo("+=400px", {axis: "y", duration: 500});
                $.get('remote/data.php?command=delete', function() {
                    setTimeout(run, interval);
                });
            } else if (data != "" && data != "stop") {
                // do something with data
                toc.click($('li:eq(' + data + ') a'));
                $.get('remote/data.php?command=delete', function() {
                    setTimeout(run, interval);
                });
            } else {
                setTimeout(run, interval);
            }
        });
    }
}
//var remoteClient = new RemoteClient();
//remoteClient.main();