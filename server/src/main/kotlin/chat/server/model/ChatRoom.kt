package chat.server.model

import java.time.LocalDateTime

data class ChatRoom(
    val id: Int,
    val title: String,
    val users: MutableList<User>,
    val createdAt: LocalDateTime = LocalDateTime.now(),
    val owner: User
)