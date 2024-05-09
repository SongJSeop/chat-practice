package chat.server.controller

import chat.server.service.UserService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = ["http://localhost:5173"], methods = [RequestMethod.GET, RequestMethod.POST])
class UserController @Autowired constructor(
    private val userService: UserService
) {

    @PostMapping("/create")
    fun createUser(): String {
        return userService.createUser()
    }

    @GetMapping("/check-exist")
    fun existUserID(@RequestParam("id") id: String): Boolean {
        return userService.getUserById(id) != null
    }
}