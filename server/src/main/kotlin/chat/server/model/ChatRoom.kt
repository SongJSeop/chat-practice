package chat.server.model

data class ChatRoom(
    val id: Int,
    val title: String,
    val users: MutableList<User>,
    val createdAt: String,
    val owner: User
)