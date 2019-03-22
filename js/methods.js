$(document).ready(function fetchListData() {
    const url = './data.json'
    // const url = 'http://172.16.248.123:8091/mainConf/getAll'

    $.ajax({
        method: "GET",
        url: url,
        data: "",
        dataType: "json",
        success: function (res) {
            dealData(res.resultList);
        },
        error: function (err) {
            console.log(err);
        }
    });
});

function dealData(data) {
    var data = {
        contentList: data
    };
    var sortArr1 = [];
    var sortArr2 = [];
    var sortArr3 = [];
    data.contentList.forEach(element => {
        switch (element.type) {
            case 0:
                sortArr1.push(element);
                break;
            case 1:
                sortArr2.push(element);
                break;
            case 2:
                sortArr3.push(element);
                break;
        }
    });
    sortDown(sortArr1, "sortOrder");
    sortDown(sortArr2, "sortOrder");
    sortDown(sortArr3, "sortOrder");
    sortArr1.forEach(item => {
        var html = template("list-data", item);
        $("#Bl-ul").append(html);
    });
    sortArr2.forEach(item => {
        var html = template("list-data", item);
        $("#Al-ul").append(html);
    });
    sortArr3.forEach(item => {
        var html = template("list-data", item);
        $("#tool-ul").append(html);
    });
}

function sortDown(array, key) {
    return array.sort((b, a) => {
        let x = a[key];
        let y = b[key];
        let sort = 0;
        if (x < y) {
            sort = -1;
        } else if (x > y) {
            sort = 1;
        } else {
            sort = 0;
        }
        return sort;
    });
}