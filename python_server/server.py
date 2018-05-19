# najbrž ga ne bomo rabili

import socket
import threading
import signal


target_host = "127.0.0.1"
target_port = 80
image_size = 640 * 480

server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
server_socket.bind(target_host, target_port)
server_socket.listen(5)



def handle_feed(feed_socket):
    #receiving
    while True:
        cam_url = feed_socket.recv(image_size)
        print("[*] Receiving...")
    #handle the jpg stream


try:
    feed_socket_1, address_1 = server_socket.accept()
    print("[*] Connected to " + address)
