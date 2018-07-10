;(function ($, window, undefined) {
    var dataSet = [
        [ "1","<a href='' class='sent-by'>MICHAEL ALPHONSUS</a><br><small>01/01/1980</small>","BOCK HWEE<br>(SAM)",  "S92724712A", "HP: 92724712<br>O: 92724712<br>H: 92724712", "STAFF","01/01/2017","01/01/2017","NO","Active","Mary <i class='fa fa-ellipsis-v fa-2x pull-right'></i>"],
        [ "2","<a href='' class='sent-by'>MICHAEL ANTHONY PILLAY</a><br><small>01/01/1980</small>","BOCK HWEE<br>(SAM)",  "S94506677A", "HP: 94506677<br>O: 94506677<br>H: 94506677", "STAFF","01/01/2017","01/01/2017","NO","Active","Mary <i class='fa fa-ellipsis-v fa-2x pull-right'></i>"],
        [ "3","<a href='' class='sent-by'>MICHAEL ALPHONSUS</a><br><small>01/01/1980</small>","BOCK HWEE<br>(SAM)",  "S92724712A", "HP: 92724712<br>O: 92724712<br>H: 92724712", "STAFF","01/01/2017","01/01/2017","NO","Active","Mary <i class='fa fa-ellipsis-v fa-2x pull-right'></i>"],
        [ "4","<a href='' class='sent-by'>MICHAEL ALPHONSUS</a><br><small>01/01/1980</small>","BOCK HWEE<br>(SAM)",  "S92724712A", "HP: 92724712<br>O: 92724712<br>H: 92724712", "STAFF","01/01/2017","01/01/2017","NO","Active","Mary <i class='fa fa-ellipsis-v fa-2x pull-right'></i>"],
        [ "5","<a href='' class='sent-by'>MICHAEL ALPHONSUS</a><br><small>01/01/1980</small>","BOCK HWEE<br>(SAM)",  "S92724712A", "HP: 92724712<br>O: 92724712<br>H: 92724712", "STAFF","01/01/2017","01/01/2017","NO","Active","Mary <i class='fa fa-ellipsis-v fa-2x pull-right'></i>"],
        [ "6","<a href='' class='sent-by'>MICHAEL ALPHONSUS</a><br><small>01/01/1980</small>","BOCK HWEE<br>(SAM)",  "S92724712A", "HP: 92724712<br>O: 92724712<br>H: 92724712", "STAFF","01/01/2017","01/01/2017","NO","Active","Mary <i class='fa fa-ellipsis-v fa-2x pull-right'></i>"],
        [ "7","<a href='' class='sent-by'>MICHAEL ANTHONY PILLAY</a><br><small>01/01/1980</small>","BOCK HWEE<br>(SAM)",  "S94506677A", "HP: 94506677<br>O: 94506677<br>H: 94506677", "STAFF","01/01/2017","01/01/2017","NO","Active","Mary <i class='fa fa-ellipsis-v fa-2x pull-right'></i>"],
        [ "8","<a href='' class='sent-by'>MICHAEL ALPHONSUS</a><br><small>01/01/1980</small>","BOCK HWEE<br>(SAM)",  "S92724712A", "HP: 92724712<br>O: 92724712<br>H: 92724712", "STAFF","01/01/2017","01/01/2017","NO","Active","Mary <i class='fa fa-ellipsis-v fa-2x pull-right'></i>"],
        [ "9","<a href='' class='sent-by'>MICHAEL ALPHONSUS</a><br><small>01/01/1980</small>","BOCK HWEE<br>(SAM)",  "S92724712A", "HP: 92724712<br>O: 92724712<br>H: 92724712", "STAFF","01/01/2017","01/01/2017","NO","Active","Mary <i class='fa fa-ellipsis-v fa-2x pull-right'></i>"],
        [ "10","<a href='' class='sent-by'>MICHAEL ALPHONSUS</a><br><small>01/01/1980</small>","BOCK HWEE<br>(SAM)",  "S92724712A", "HP: 92724712<br>O: 92724712<br>H: 92724712", "STAFF","01/01/2017","01/01/2017","NO","Active","Mary <i class='fa fa-ellipsis-v fa-2x pull-right'></i>"],
        [ "11","<a href='' class='sent-by'>MICHAEL ALPHONSUS</a><br><small>01/01/1980</small>","BOCK HWEE<br>(SAM)",  "S92724712A", "HP: 92724712<br>O: 92724712<br>H: 92724712", "STAFF","01/01/2017","01/01/2017","NO","Active","Mary <i class='fa fa-ellipsis-v fa-2x pull-right'></i>"],
    ];
    $(document).ready(function () {        
        $('#stafffile-list').DataTable( {
            data: dataSet,
            "iDisplayLength": 10,
            "paging": true,
            "lengthChange": false,
            "searching": false,
            "ordering": false,
            "info": false,
            columns: [
                { title: "No." },
                { title: "Name" },
                { title: "Display Name" },
                { title: "IC No./FIN No." },
                { title: "Tel" },
                { title: "Position" },
                { title: "Join Date" },
                { title: "Leave Date" },
                { title: "CV" },
                { title: "Status" },
                { title: "Creator" }
            ]
        } );
    });
})(jQuery, window);