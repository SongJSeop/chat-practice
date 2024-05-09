package chat.server.controller

import chat.server.service.UserService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/users")
class UserController @Autowired constructor(
    private val userService: UserService
) {

    @PostMapping("/create")
    fun createUser(): String {
        return userService.createUser()
    }
}