package chat.server.repository

import chat.server.model.ChatRoom

interface ChatRoomRepository {
    fun createChatRoom(title: String, ownerId: String): ChatRoom
    fun getChatRoomById(id: Int): ChatRoom?
    fun getChatRooms(): List<ChatRoom>
    fun addUserToChatRoom(userId: String, chatRoomId: Int)
    fun removeUserFromChatRoom(userId: String, chatRoomId: Int)
    fun deleteChatRoom(id: Int)
}