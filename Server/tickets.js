function getAllTickets(db){
    var rows = [];
    db.query("SELECT * FROM Tickets", function(err, result){
        if(err != null){
            rows.push(result);
        }
    });
    return rows;
}

module.exports = {
  getAllTickets: getAllTickets
};