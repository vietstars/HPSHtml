;(function ($, window, undefined) {
    var dataSet = [
        [ "1","<a href='javascript:;' class='ledger'>111100</a>","CASH IN BANK - SCB", "(18,445,647.31)", "<A href='javascript:;'>SB</a>", "<A href='javascript:;'>SB</a>", "<A href='javascript:;'>SB</a>","<button class='btn btn-open'>Active</button> <i class='fa fa-ellipsis-v fa-2x pull-right'></i>"],
        [ "1","<a href='javascript:;' class='ledger'>121101</a>","CASH IN BANK - SCB", "(18,445,647.31)", "<A href='javascript:;'>SB</a>", "<A href='javascript:;'>SB</a>", "<A href='javascript:;'>SB</a>","<button class='btn btn-not-active'>Not active</button> <i class='fa fa-ellipsis-v fa-2x pull-right'></i>"],
        [ "1","<a href='javascript:;' class='ledger'>121101</a>","CASH IN BANK - SCB", "(18,445,647.31)", "<A href='javascript:;'>SB</a>", "<A href='javascript:;'>SB</a>", "<A href='javascript:;'>SB</a>","<button class='btn btn-open'>Active</button> <i class='fa fa-ellipsis-v fa-2x pull-right'></i>"],
        [ "1","<a href='javascript:;' class='ledger'>121102</a>","CASH IN BANK - SCB", "(18,445,647.31)", "<A href='javascript:;'>SB</a>", "<A href='javascript:;'>SB</a>", "<A href='javascript:;'>SB</a>","<button class='btn btn-not-active'>Not Active</button> <i class='fa fa-ellipsis-v fa-2x pull-right'></i>"],
        [ "1","<a href='javascript:;' class='ledger'>121099</a>","CASH IN BANK - SCB", "(18,445,647.31)", "<A href='javascript:;'>SB</a>", "<A href='javascript:;'>SB</a>", "<A href='javascript:;'>SB</a>","<button class='btn btn-open'>Active</button> <i class='fa fa-ellipsis-v fa-2x pull-right'></i>"],
        [ "1","<a href='javascript:;' class='ledger'>121096</a>","CASH IN BANK - SCB", "(18,445,647.31)", "<A href='javascript:;'>SB</a>", "<A href='javascript:;'>SB</a>", "<A href='javascript:;'>SB</a>","<button class='btn btn-open'>Active</button> <i class='fa fa-ellipsis-v fa-2x pull-right'></i>"],
        [ "1","<a href='javascript:;' class='ledger'>121097</a>","CASH IN BANK - SCB", "(18,445,647.31)", "<A href='javascript:;'>SB</a>", "<A href='javascript:;'>SB</a>", "<A href='javascript:;'>SB</a>","<button class='btn btn-not-active'>Not Active</button> <i class='fa fa-ellipsis-v fa-2x pull-right'></i>"],
        [ "1","<a href='javascript:;' class='ledger'>121094</a>","CASH IN BANK - SCB", "(18,445,647.31)", "<A href='javascript:;'>SB</a>", "<A href='javascript:;'>SB</a>", "<A href='javascript:;'>SB</a>","<button class='btn btn-open'>Active</button> <i class='fa fa-ellipsis-v fa-2x pull-right'></i>"],
        [ "1","<a href='javascript:;' class='ledger'>121087</a>","CASH IN BANK - SCB", "(18,445,647.31)", "<A href='javascript:;'>SB</a>", "<A href='javascript:;'>SB</a>", "<A href='javascript:;'>SB</a>","<button class='btn btn-open'>Active</button> <i class='fa fa-ellipsis-v fa-2x pull-right'></i>"],
        [ "1","<a href='javascript:;' class='ledger'>121093</a>","CASH IN BANK - SCB", "(18,445,647.31)", "<A href='javascript:;'>SB</a>", "<A href='javascript:;'>SB</a>", "<A href='javascript:;'>SB</a>","<button class='btn btn-open'>Active</button> <i class='fa fa-ellipsis-v fa-2x pull-right'></i>"],
        [ "1","<a href='javascript:;' class='ledger'>121090</a>","CASH IN BANK - SCB", "(18,445,647.31)", "<A href='javascript:;'>SB</a>", "<A href='javascript:;'>SB</a>", "<A href='javascript:;'>SB</a>","<button class='btn btn-open'>Active</button> <i class='fa fa-ellipsis-v fa-2x pull-right'></i>"],
    ];
    $(document).ready(function () {        
        $('#chartacc-list').DataTable( {
            data: dataSet,
            "iDisplayLength": 10,
            "paging": true,
            "lengthChange": false,
            "searching": false,
            "ordering": false,
            "info": false,
            columns: [
                { title: "No" },
                { title: "Bank AC/Code" },
                { title: "Bank Description" },
                { title: "Balance" },
                { title: "Prefix Payment" },
                { title: "Prefix Receipt" },
                { title: "Prefix Receipt" },
                { title: "Status" }
            ]
        } );
    });
})(jQuery, window);