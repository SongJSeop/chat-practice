package chat.server.repository

import chat.server.model.ChatRoom
import org.springframework.stereotype.Repository
import java.time.format.DateTimeFormatter

@Repository
class MemoryChatRoomRepository(
    private val userRepository: UserRepository
): ChatRoomRepository {

    private val chatRooms = mutableMapOf<Int, ChatRoom>()

    override fun createChatRoom(title: String, ownerId: String): ChatRoom {
        val createdAt = java.time.LocalDateTime.now()
        val formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd")
        val formattedDate = createdAt.format(formatter)
        val id = chatRooms.size + 1
        val ownerUser = userRepository.findById(ownerId) ?: throw IllegalArgumentException("User not found")

        val chatRoom = ChatRoom(id = id, title = title, users = mutableListOf(ownerUser), createdAt = formattedDate, owner = ownerUser)
        chatRooms[id] = chatRoom
        return chatRoom
    }

    override fun getChatRoomById(id: Int): ChatRoom? {
        TODO("Not yet implemented")
    }

    override fun getAllChatRooms(): List<ChatRoom> {
        return chatRooms.values.toList()
    }

    override fun addUserToChatRoom(userId: String, chatRoomId: Int) {
        TODO("Not yet implemented")
    }

    override fun removeUserFromChatRoom(userId: String, chatRoomId: Int) {
        TODO("Not yet implemented")
    }

    override fun deleteChatRoom(id: Int) {
        TODO("Not yet implemented")
    }


}