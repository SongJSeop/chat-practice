package chat.server.service

import chat.server.model.ChatRoom
import chat.server.repository.ChatRoomRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class ChatRoomService @Autowired constructor(
    private val chatRoomRepository: ChatRoomRepository,
) {

    fun createChatRoom(title: String, ownerId: String): ChatRoom {
        return chatRoomRepository.createChatRoom(title, ownerId)
    }

    fun getAllChatRooms(): List<ChatRoom> {
        return chatRoomRepository.getAllChatRooms()
    }
}