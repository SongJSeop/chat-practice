package chat.server.repository

import chat.server.model.User
import org.springframework.stereotype.Repository

@Repository
class MemoryUserRepository: UserRepository {

    private val users = mutableSetOf<User>()

    override fun saveUser(id: String) {
        val newUser = User(id)
        users.add(newUser)
    }

    override fun findById(id: String): User? {
        return users.find { it.id == id }
    }
}