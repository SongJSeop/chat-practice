package chat.server.repository

import chat.server.model.User

interface UserRepository {

    fun saveUser(id: String)

    fun findById(id: String): User?
}