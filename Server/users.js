function getAllUsers(db)
{
	let rows = [];
	db.query('SELECT * FROM User', function (err, result)
	{
		if(!err)
			rows.push(result);
	});
	return rows;
}

function getUserById(db, id)
{
	db.query('SELECT * FROM User WHERE User.id = ' + id, function (err, result)
	{
		if(!err)
			return result;
	});
	return null;
}

module.exports = {
	getAllUsers: getAllUsers,
	getUserById: getUserById
};