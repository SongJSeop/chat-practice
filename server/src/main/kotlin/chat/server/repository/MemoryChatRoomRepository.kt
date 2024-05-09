package chat.server.repository

import chat.server.model.ChatRoom
import org.springframework.stereotype.Repository

@Repository
class MemoryChatRoomRepository(
    private val userRepository: UserRepository
): ChatRoomRepository {

    private val chatRooms = mutableMapOf<Int, ChatRoom>()

    override fun createChatRoom(title: String, ownerId: String): ChatRoom {
        val id = chatRooms.size + 1
        val ownerUser = userRepository.findById(ownerId) ?: throw IllegalArgumentException("User not found")
        val chatRoom = ChatRoom(id = id, title = title, users = mutableListOf(ownerUser), owner = ownerUser)
        chatRooms[id] = chatRoom
        return chatRoom
    }

    override fun getChatRoomById(id: Int): ChatRoom? {
        TODO("Not yet implemented")
    }

    override fun getChatRooms(): List<ChatRoom> {
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