/**
 * Created by Administrator on 2/18/15.
 */

function sortList(ToDoListTable) {

        var $table = $('#ToDoListTable');

        var rows = $table.find('tr').get();
        rows.sort(function (a, b) {
            var keyA = $(a).attr('id');
            var keyB = $(b).attr('id');
            if (keyA < keyB) return 1;
            if (keyA > keyB) return -1;
            return 0;
        });
        $.each(rows, function (index, row) {
            $table.children('tbody').append(row);
        });

}
