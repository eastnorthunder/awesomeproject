package Controller

import (
	"awesomeProject2/Boot"
	"encoding/json"
	"net/http"
)

type  List struct {
	Id int
	Head string
	Content string
	Photo string
}


func Test(w http.ResponseWriter, r *http.Request)  {
	w.Header().Set("Access-Control-Allow-Origin", "*") //允许访问所有域
	w.Header().Set("Content-Type", "application/json") // 返回json格式
	w.WriteHeader(200) // 返回状态
	db := Boot.GetDB()
	rows, err := db.Query("SELECT * FROM main")
	if err != nil {
		panic("查询表单失败")
	}
	var lists [5]List
	for rows.Next() {
		var a int
		var b, c, d string
		err = rows.Scan(&a, &b, &c, &d)
		lists[a] = List{a,b,c,d}}
		if err != nil {
			panic("查询数据失败")
	}
	//
	json.NewEncoder(w).Encode(lists)

}
// 方法1
//response, err := json.Marshal(tom)
//if err != nil {
//  fmt.Println("err")
//}
//w.Write(response)

//方法2
//json.NewEncoder(w).Encode(jojo)