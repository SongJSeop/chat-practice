package chat.server.service

import chat.server.repository.UserRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import java.util.*

@Service
class UserService @Autowired constructor(
    private val userRepository: UserRepository
) {

    fun createUser(): String {
        var id: StringBuilder
        while (true) {
            val characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
            val random = Random()
            id = StringBuilder(8)

            for (i in 0 until 8) {
                val index = random.nextInt(characters.length)
                id.append(characters[index])
            }

            if (userRepository.findById(id.toString()) == null) {
                break
            }
        }

        userRepository.saveUser(id.toString())
        return id.toString()
    }

    fun getUserById(id: String): String? {
        return userRepository.findById(id)
    }
}