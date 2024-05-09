package chat.server.model

import java.time.LocalDateTime

data class ChatRoom(
    val id: Int,
    val title: String,
    val users: List<User>,
    val createAt: LocalDateTime,
    val owner: User
)