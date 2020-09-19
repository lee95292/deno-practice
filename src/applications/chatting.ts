//TODO: 여러명이서 채팅가능하도록
import Example from "../interface/example.ts";

class Chatting implements Example {
  // _variable for implements singleton class
  private static _default: Chatting;
  public constructor() {
    this.run();
  }
  public static getDefault(): Chatting {
    if (!Chatting._default) {
      Chatting._default = new Chatting();
    }

    return Chatting._default;
  }

  public async run() {
    const port: number = 8080;
    const listener = Deno.listen({ port });
    console.log(`server list now running at http://localhost:${port}`);
    for await (const conn of listener) {
      Deno.copy(conn, conn);
    }

    return 1;
  }
  getDescription() {
    return "description";
  }
}

const t: Chatting = Chatting.getDefault();

export default Chatting;
