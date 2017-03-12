let tickets = function getAllTickets(db){
    db.query("SELECT * FROM \"Ticket\"", function(err, result){
        if(err){
            console.log("There has been an error processing your request: ", err);
            return [];
        } else {
            console.log("Success: ", result.rows);
            return result.rows;
        }
    });
}

function addTicket(db, values) {
    db.query("INSERT INTO \"Ticket\"(name, \"user\", price, dateEvent, datePosted, type, description) VALUES(${name}, ${user}, ${price}, ${dateEvent}, ${datePosted}, ${type}, &{description})",
    values,
    function(err, result) {
                if (err) {
                    console.log(err);
                    return "Insertion has failed!";
                } else {
                    console.log('Rows has been inserted.');
                }
            });
    return "Command has been proccessed successfully!"
}

module.exports = {
  getAllTickets: tickets,
  addTicket: addTicket
};