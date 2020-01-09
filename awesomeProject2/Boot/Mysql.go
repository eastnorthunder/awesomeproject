package Boot

import (
	"database/sql"
	_"github.com/go-sql-driver/mysql"
	"strings"
)

var DB *sql.DB

const (
	userName = "root"
	password = "root"
	ip = "127.0.0.1"
	port = "3306"
	dbName = "bok"
)

func Init()  {
	path := strings.Join([]string{userName, ":", password, "@tcp(",ip, ":", port, ")/", dbName, "?charset=utf8"}, "")

	engine, err := sql.Open("mysql", path)
	if err != nil {
		panic("连接数据库失败")
	}
	DB = engine
}

func GetDB() *sql.DB {
	return DB
}

func Close()  {
	err := DB.Close()
	if err != nil {

	}
}