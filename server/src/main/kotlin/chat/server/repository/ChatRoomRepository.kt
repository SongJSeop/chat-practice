package chat.server.repository

import chat.server.model.ChatRoom

interface ChatRoomRepository {
    fun createChatRoom(title: String, ownerId: Int): Int
    fun getChatRoomById(id: Int): ChatRoom?
    fun getChatRooms(): List<ChatRoom>
    fun addUserToChatRoom(userId: Int, chatRoomId: Int)
    fun removeUserFromChatRoom(userId: Int, chatRoomId: Int)
    fun deleteChatRoom(id: Int)
}