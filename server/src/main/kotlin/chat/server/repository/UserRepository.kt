package chat.server.repository

interface UserRepository {

    fun saveUser(id: String)

    fun findById(id: String): String?
}