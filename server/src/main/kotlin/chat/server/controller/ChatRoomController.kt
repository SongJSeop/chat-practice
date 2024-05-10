package chat.server.controller

import chat.server.model.ChatRoom
import chat.server.service.ChatRoomService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/chat-rooms")
@CrossOrigin(origins = ["http://localhost:5173"], methods = [RequestMethod.GET, RequestMethod.POST])
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