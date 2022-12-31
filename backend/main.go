package main

import (
	"fmt"
	"net/http"

	"github.com/winnie368c/waffle.git/app/user/actions/websocket"
)

// func loadDatabase() {
// 	database.Connect()
// 	database.Database.AutoMigrate(&model.Entry{})
// }
// func loadEnv() {
// 	err := godotenv.Load("./api/.env.local")
// 	if err != nil {
// 		log.Fatal("Error loading .env file")
// 	}
// }
// func serveApplication() {
// 	router := gin.Default()

// 	publicRoutes := router.Group("/auth")
// 	publicRoutes.POST("/register", controller.Register)
// 	publicRoutes.POST("/login", controller.Login)

//		router.Run(":8000")
//		fmt.Println("Server running on port 8000")
//	}
func serveWs(pool *websocket.Pool, w http.ResponseWriter, r *http.Request) {
	fmt.Println("WebSocket Endpoint Hit")
	conn, err := websocket.Upgrade(w, r)
	if err != nil {
		fmt.Fprintf(w, "%+v\n", err)
	}

	client := &websocket.Client{
		Conn: conn,
		Pool: pool,
	}

	pool.Register <- client
	client.Read()
}

func setupRoutes() {
	pool := websocket.NewPool()
	go pool.Start()

	http.HandleFunc("/ws", func(w http.ResponseWriter, r *http.Request) {
		serveWs(pool, w, r)
	})
}

func main() {
	// loadEnv()
	// loadDatabase()
	// serveApplication()
	setupRoutes()
	http.ListenAndServe(":8080", nil)
}
