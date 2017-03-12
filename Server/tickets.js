function getAllTickets(db){
    var rows = [];
    db.query("SELECT * FROM Ticket", function(err, result){
        if(!err){
            rows.push(result);
        }
    });
    return rows;
}

module.exports = {
  getAllTickets: getAllTickets
};