// take the promise function from fs and store it as fs
import {promises as fs} from "fs"

let Path = null;

export default {
  async index() {
    // go to our file and parse out the data there
    return JSON.parse(await fs.readFile(`${Path}/db/db.json`, "utf8"));
  },
    // 
    async create(newEntry) {
      const currentNotes = await this.index();
      fs.writeFile(
        `${Path}/db/db.json`, JSON.stringify([... currentNotes, newEntry])    
    );
  },
};

(async () => {
  //sets path as the full path data to the base folder
  Path = await fs.realpath("./")
})();