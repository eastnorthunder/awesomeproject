package Router

import (
	"awesomeProject2/Controller"
	"fmt"
	"log"
	"net/http"
)

func Init()  {
	http.HandleFunc("/", Controller.Test)
	err := http.ListenAndServe(":8000", nil)
	fmt.Printf("运行成功")
	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}
}