// 产品首页数据请求
// window.onload =

$(document).ready(
    function fetchListData() {
        const url = './data.json'
        $.ajax({
            method: 'GET',
            url: url,
            data: '',
            dataType: 'json',
            success: function (res) {
                dealData(res.resultList)
            },
            error: function (err) {
                console.log(err)
            }
        })
    }
)

function dealData(data) {
    var data = {
        contentList: data
    }
    // var sortArr1 = [];
    // var sortArr2 = [];
    // var sortArr3 = [];
    const typeMap = {
        0: {
            list: [],
            id: '#Bl-ul'
        },
        1: {
            list: [],
            id: '#Al-ul'
        },
        2: {
            list: [],
            id: '#tool-ul'
        }
    }
    data.contentList.forEach(item => {
        typeMap[item.type].list.push(item);
    })
    Object.keys(typeMap).forEach(type => {
        let arr = typeMap[type].list.sort((a, b) => {
            return b.sortOrder - a.sortOrder;
        });
        console.log(arr,'this is arr')
        let tempList = []
        arr.forEach(item => {
            tempList.push(item)
        })
        console.log(tempList)

    })
   
    // for (let key in data.contentList) {
    //     console.log(data.contentList[key])

    //     var html = template('list-data', data.contentList[key]);
    //     if (data.contentList[key].type == 0) {

    //         $('#Bl-ul').append(html);

    //     } else if (data.contentList[key].type == 1) {

    //         $('#Al-ul').append(html)

    //     } else {
    //         $('#tool-ul').append(html)
    //     }
    // }
}



// function sortDown(array, key) {
//     return array.sort((b, a) => {
//         let x = a[key];
//         let y = b[key];
//         let sort = 0;
//         if (x < y) {
//             sort = -1;
//         } else if (x > y) {
//             sort = 1;
//         } else {
//             sort = 0;
//         }
//         return sort;
//     });
// }