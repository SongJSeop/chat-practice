package chat.server.controller

import chat.server.model.ChatRoom
import chat.server.service.ChatRoomService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/chat-rooms")
class ChatRoomController @Autowired constructor(
    private val chatRoomService: ChatRoomService
) {

    @PostMapping
    fun createChatRoom(@RequestBody body: Map<String, String>): ChatRoom {
        val title = body["title"] ?: throw IllegalArgumentException("Title is required")
        val ownerId = body["ownerId"] ?: throw IllegalArgumentException("Owner ID is required")
        return chatRoomService.createChatRoom(title, ownerId)
    }

    @GetMapping
    fun getAllChatRooms(): List<ChatRoom> {
        return chatRoomService.getAllChatRooms()
    }
}