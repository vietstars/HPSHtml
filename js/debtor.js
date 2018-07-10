;(function ($, window, undefined) {
    var dataSet = [
        [ "1","<a href='' class='sent-by'>MICHAEL ALPHONSUS</a>","S8325275H",  "", "92724712", "#","92724712","C.O.D.","NO","" ],
        [ "2","<a href='' class='sent-by'>MICHAEL ANTHONY PILLAY</a>","S9190506Z",  "MICHAEL ANTHONY PILLAY ", "94506677", "#","94506677","C.O.D.","NO","" ],
        [ "3","<a href='' class='sent-by'>MICHAEL ALPHONSUS</a>","S8325275H",  "", "92724712", "#","92724712","C.O.D.","NO","" ],
        [ "4","<a href='' class='sent-by'>MICHAEL ALPHONSUS</a>","S8325275H",  "", "92724712", "#","92724712","C.O.D.","NO","" ],
        [ "5","<a href='' class='sent-by'>MICHAEL ALPHONSUS</a>","S8325275H",  "", "92724712", "#","92724712","C.O.D.","NO","" ],
        [ "6","<a href='' class='sent-by'>MICHAEL ALPHONSUS</a>","S8325275H",  "", "92724712", "#","92724712","C.O.D.","NO","" ],
        [ "7","<a href='' class='sent-by'>MICHAEL ANTHONY PILLAY</a>","S9190506Z",  "MICHAEL ANTHONY PILLAY ", "94506677", "#","94506677","C.O.D.","NO","" ],
        [ "8","<a href='' class='sent-by'>MICHAEL ALPHONSUS</a>","S8325275H",  "", "92724712", "#","92724712","C.O.D.","NO","" ],
        [ "9","<a href='' class='sent-by'>MICHAEL ALPHONSUS</a>","S8325275H",  "", "92724712", "#","92724712","C.O.D.","NO","" ],
        [ "10","<a href='' class='sent-by'>MICHAEL ALPHONSUS</a>","S8325275H",  "", "92724712", "#","92724712","C.O.D.","NO","" ],
        [ "11","<a href='' class='sent-by'>MICHAEL ALPHONSUS</a>","S8325275H",  "", "92724712", "#","92724712","C.O.D.","NO","" ],
    ];
    $(document).ready(function () {        
        $('#debtor-list').DataTable( {
            data: dataSet,
            "iDisplayLength": 10,
            "paging": true,
            "lengthChange": false,
            "searching": false,
            "ordering": false,
            "info": false,
            columns: [
                { title: "no." },
                { title: "company" },
                { title: "reference" },
                { title: "contact" },
                { title: "tel" },
                { title: "tel2" },
                { title: "fax" },
                { title: "credit" },
                { title: "blacklist" },
                { title: "mblogin" }
            ]
        } );
    });
})(jQuery, window);