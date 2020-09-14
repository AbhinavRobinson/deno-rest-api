import client from "../db/database.js";
const data = JSON.parse(Deno.readTextFileSync('../schema.json'));
const schema = data[Object.keys(data)[0]];
const keys = Object.keys(schema);

class FlightRepo{

    create(db) {    
        return client.query(
            `INSERT INTO datas (${keys.map((_, i) => `${i + 1}`)}) VALUES (${keys.map((_, i) => `${i + 1 + keys.length}`)})`,
            ...keys,
            ...db.schema.keys 
        );
    }

    selectAll() {
        return client.query(`SELECT * FROM $1 ORDER BY Time`, schema);
    }

    selectById(id) {
        return client.query(`SELECT * FROM $2 WHERE $3 = $1`, id, schema, schema[0]);
    }

    /**
     * ! Requires Manual Editing to make compatible. 
     * TODO: Write formatting Logic (#01)
     */

    // update(id, data) {
    //     var latestdata = this.selectById(id);
    //     var query = `UPDATE datas SET Airlines = $1, Time = $2, OnTime = $3, Dep = $4, Arr = $5 WHERE id = $6`;
    
    //     return client.query(query,
    //         data.Airlines !== undefined ? data.Airlines : latestdata.Airlines,
    //         data.Time !== undefined ? data.Time : latestdata.Time,
    //         data.OnTime !== undefined ? data.OnTime : latestdata.OnTime,
    //         data.Dep !== undefined ? data.Dep : latestdata.Dep, 
    //         data.Arr !== undefined ? data.Arr : latestdata.Arr,
    //         id);
    // }
    
}

export default new FlightRepo();