import { Controller, Get } from "@nestjs/common";

@Controller("/app")
export class AppController {
  @Get("/hello")
  getRootRoute() {
    return "Hello Thereee!!";
  }

  @Get("/bye")
  getByeThere() {
    return "Goodbye Theree!";
  }
}
