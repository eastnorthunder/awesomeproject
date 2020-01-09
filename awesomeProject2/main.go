package main

import (
	"awesomeProject2/Boot"
	"awesomeProject2/Router"
	_ "github.com/go-sql-driver/mysql"
)
func main() {
	Boot.Init()
	Router.Init()
	defer Boot.Close()
}

