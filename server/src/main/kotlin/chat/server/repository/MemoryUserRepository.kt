package chat.server.repository

import org.springframework.stereotype.Repository

@Repository
class MemoryUserRepository: UserRepository {

    private val users = mutableSetOf<String>()

    override fun saveUser(id: String) {
        users.add(id)
    }
}